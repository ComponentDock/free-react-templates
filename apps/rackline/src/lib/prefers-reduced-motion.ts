/**
 * True when the visitor asked the operating system to reduce motion, so the
 * scroll reveals, the drifting clouds and the smooth in-page scrolling all
 * stand still.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
