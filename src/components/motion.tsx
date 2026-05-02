import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  type MotionStyle,
  type Variants,
} from 'framer-motion'
import {
  useRef,
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from 'react'

const SMOOTH_EASE = [0.22, 1, 0.36, 1] as const

/* ─────────────────────────────────────────────────────────
 * ScrollProgress — fixed top progress bar tied to page scroll
 * ───────────────────────────────────────────────────────── */
export function ScrollProgress({
  color = '#C9A96E',
  height = 2,
  zIndex = 100,
}: {
  color?: string
  height?: number
  zIndex?: number
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height,
        background: `linear-gradient(to right, transparent, ${color}, ${color})`,
        transformOrigin: '0 50%',
        scaleX,
        zIndex,
        pointerEvents: 'none',
      }}
    />
  )
}

/* ─────────────────────────────────────────────────────────
 * Magnetic — wrapper that pulls itself toward the cursor
 * ───────────────────────────────────────────────────────── */
type MagneticAs = 'button' | 'a' | 'div'
type MagneticProps = {
  children: ReactNode
  strength?: number
  as?: MagneticAs
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
  style?: CSSProperties
  ariaLabel?: string
  disabled?: boolean
}

export function Magnetic({
  children,
  strength = 0.28,
  as = 'button',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  className,
  style,
  ariaLabel,
  disabled,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.5 })

  const handleMove = (e: ReactMouseEvent<HTMLElement>) => {
    if (!ref.current || disabled) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const motionStyle: MotionStyle = {
    x: sx,
    y: sy,
    display: 'inline-flex',
    ...(style as MotionStyle),
  }

  const shared = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: motionStyle,
    className,
    onClick,
    'aria-label': ariaLabel,
  }

  if (as === 'a') {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...shared}
      >
        {children}
      </motion.a>
    )
  }
  if (as === 'div') {
    return (
      <motion.div ref={ref as React.RefObject<HTMLDivElement>} {...shared}>
        {children}
      </motion.div>
    )
  }
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      {...shared}
    >
      {children}
    </motion.button>
  )
}

/* ─────────────────────────────────────────────────────────
 * TiltCard — perspective tilt that follows the cursor
 * ───────────────────────────────────────────────────────── */
export function TiltCard({
  children,
  max = 5,
  glare = true,
  glareColor = 'rgba(201,169,110,0.10)',
  className,
  style,
  onMouseEnter,
  onMouseLeave,
}: {
  children: ReactNode
  max?: number
  glare?: boolean
  glareColor?: string
  className?: string
  style?: CSSProperties
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const px = useMotionValue(50)
  const py = useMotionValue(50)
  const srx = useSpring(rx, { stiffness: 220, damping: 22 })
  const sry = useSpring(ry, { stiffness: 220, damping: 22 })

  const glareBg = useTransform(
    [px, py],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(circle at ${latestX}% ${latestY}%, ${glareColor} 0%, transparent 55%)`,
  )

  const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    ry.set((nx - 0.5) * max * 2)
    rx.set(-(ny - 0.5) * max * 2)
    px.set(nx * 100)
    py.set(ny * 100)
  }

  const handleLeave = () => {
    rx.set(0)
    ry.set(0)
    onMouseLeave?.()
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformStyle: 'preserve-3d',
        transformPerspective: 1100,
        position: 'relative',
        ...style,
      }}
      className={className}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: glareBg,
            pointerEvents: 'none',
            mixBlendMode: 'plus-lighter',
          }}
        />
      )}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
 * SplitText — per-word reveal with mask. Renders inline spans.
 * Use inside an h1/h2/p — caller controls the heading tag.
 * ───────────────────────────────────────────────────────── */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  by = 'word',
  once = true,
  italic = false,
  color,
}: {
  text: string
  delay?: number
  stagger?: number
  duration?: number
  by?: 'word' | 'char'
  once?: boolean
  italic?: boolean
  color?: string
}) {
  const parts = by === 'char' ? Array.from(text) : text.split(' ')
  return (
    <>
      {parts.map((part, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
          }}
        >
          <motion.span
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-10% 0px' }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: SMOOTH_EASE,
            }}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              fontStyle: italic ? 'italic' : undefined,
              color,
            }}
          >
            {part}
            {by === 'word' && i < parts.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </>
  )
}

/* ─────────────────────────────────────────────────────────
 * Marquee — infinite horizontal scroll. Children rendered twice.
 * ───────────────────────────────────────────────────────── */
export function Marquee({
  children,
  duration = 30,
  direction = 'left',
  pauseOnHover = false,
  gap = 40,
  className,
  style,
}: {
  children: ReactNode
  duration?: number
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  gap?: number
  className?: string
  style?: CSSProperties
}) {
  const [paused, setPaused] = useState(false)
  const from = direction === 'left' ? '0%' : '-50%'
  const to = direction === 'left' ? '-50%' : '0%'
  return (
    <div
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      className={className}
      style={{ overflow: 'hidden', position: 'relative', ...style }}
    >
      <motion.div
        animate={paused ? undefined : { x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap,
          paddingRight: gap,
          willChange: 'transform',
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
 * Spotlight — gold cursor-follow glow over a parent element.
 * Place inside a position:relative parent.
 * ───────────────────────────────────────────────────────── */
export function Spotlight({
  size = 600,
  color = 'rgba(201,169,110,0.07)',
  fade = 70,
}: {
  size?: number
  color?: string
  fade?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)

  useEffect(() => {
    const el = ref.current?.parentElement
    if (!el) return
    const handleMove = (e: globalThis.MouseEvent) => {
      const rect = el.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }
    const handleLeave = () => {
      x.set(-9999)
      y.set(-9999)
    }
    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [x, y])

  const bg = useTransform(
    [x, y],
    ([latestX, latestY]: number[]) =>
      `radial-gradient(${size}px circle at ${latestX}px ${latestY}px, ${color}, transparent ${fade}%)`,
  )

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        background: bg,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'opacity 0.3s ease',
      }}
    />
  )
}

/* ─────────────────────────────────────────────────────────
 * ParallaxY — vertical parallax for an element bound to scroll
 * ───────────────────────────────────────────────────────── */
export function ParallaxY({
  children,
  amount = 80,
  className,
  style,
}: {
  children: ReactNode
  amount?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])
  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
 * Reveal variants helper — for sections that scroll into view.
 * Keep here so all shared variants live alongside primitives.
 * ───────────────────────────────────────────────────────── */
export const lineGrowVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: SMOOTH_EASE },
  },
}
