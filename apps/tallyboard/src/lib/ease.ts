/**
 * The count-up's arithmetic, kept out of the hook so it can be asserted on its
 * own: a 600 ms ease-out cubic, and an index read that never hands a card an
 * `undefined` when the state array is short.
 */

export const COUNT_UP_MS = 600

/** `1 − (1 − t)³`, clamped to the 0…1 progress the frame timestamps produce. */
export function easeOutCubic(progress: number): number {
  const clamped = Math.min(1, Math.max(0, progress))
  return 1 - (1 - clamped) ** 3
}

/** The figure a card shows `progress` of the way from `start` to `target`. */
export function figureAt(start: number, target: number, progress: number): number {
  return Math.round(start + (target - start) * easeOutCubic(progress))
}

/**
 * Reads a figure by index. The state array is always as long as `PLANS`, so the
 * fallback is only reachable if the two ever drift — it keeps a card printing a
 * real price instead of `$undefined`.
 */
export function readFigure(values: readonly number[], index: number, fallback: number): number {
  return values[index] ?? fallback
}
