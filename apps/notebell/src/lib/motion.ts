/**
 * Read the user's motion preference at the moment of the interaction — the same
 * place the reference reads it, and the reason this is a function and not a hook:
 * there is no state to sync, so nothing has to be written back from an effect.
 * A browser without `matchMedia` is treated as "animate".
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
}
