/**
 * The visitor's motion preference. Kept as a one-line read so the effects that consume it have no
 * branch of their own to cover.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
