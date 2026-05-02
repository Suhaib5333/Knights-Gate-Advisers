import type { Variants, Transition } from 'framer-motion'

export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  snap: [0.5, 0, 0, 1] as const,
}

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 24,
  mass: 0.9,
}

export const slowSpring: Transition = {
  type: 'spring',
  stiffness: 50,
  damping: 20,
  mass: 1.2,
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...springTransition },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [...easings.smooth] },
  },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { ...springTransition },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { ...springTransition },
  },
}

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [...easings.smooth] },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [...easings.smooth] },
  },
}

export const lineSweep: Variants = {
  hidden: { scaleX: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: [...easings.smooth] },
  },
}

/**
 * Stagger that ramps up speed for long lists — first items reveal slower,
 * subsequent items snap in faster so a long list never feels sluggish.
 */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
