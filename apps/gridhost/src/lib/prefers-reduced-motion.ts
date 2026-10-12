/**
 * True when the visitor asked the operating system to reduce motion, so the hero
 * carousel stops auto-advancing and transitions collapse.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
