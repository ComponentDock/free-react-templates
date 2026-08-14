/** Pure carousel index math — kept exported so vitest covers the wrap logic
 *  without fake timers or scroll stubs. */

/** Advance a slide index by delta, wrapping within [0, total). */
export function slideIndex(current: number, total: number, delta: number): number {
  if (total <= 0) return 0
  return (current + delta + total) % total
}
