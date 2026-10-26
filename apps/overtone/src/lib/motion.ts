/** How long the photograph stays faded out before its `src` is swapped. */
export const SWAP_DELAY = 180

/** How long the buy bar holds its confirmation label. */
export const ADDED_DELAY = 1200

/**
 * The one place that asks the browser about motion. A missing `matchMedia`
 * (older engines, some test environments) means "animate": the swap is a fade,
 * not a behaviour, so the page is complete either way.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}
