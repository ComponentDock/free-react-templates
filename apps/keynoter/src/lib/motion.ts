/** Read once at mount: the preference is a load-time setting, not a live one. */
export function prefersReducedMotion(): boolean {
  if (typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
