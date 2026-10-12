/**
 * True when the visitor asked the operating system to reduce motion, so the
 * fact counters can jump straight to their final value instead of ticking.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
