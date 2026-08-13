/** Pure carousel helpers — kept exported so vitest covers the index math
 *  without fake timers. */

/** Advance a slide index by delta, wrapping within [0, total). */
export function slideIndex(current: number, total: number, delta: number): number {
  if (total <= 0) return 0
  return (current + delta + total) % total
}

/** Normalize an arbitrary index into the valid [0, total) range. */
export function clampIndex(index: number, total: number): number {
  if (total <= 0) return 0
  return ((index % total) + total) % total
}
