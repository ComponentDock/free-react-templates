/**
 * The visitor's motion preference, read once at mount. Every band resolves to
 * its final visible state when this is true: no reveal is left transparent,
 * the ping stops and the carousel does not advance by itself.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
