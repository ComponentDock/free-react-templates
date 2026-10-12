/**
 * The visitor's motion preference. Kept as a one-line read so the effect that consumes it has no
 * branch of its own to cover.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
