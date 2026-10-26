const COUNT = new Intl.NumberFormat('en-US')

/**
 * The visible side of a like count: `1204` renders as `1,204`. The raw number
 * stays on `data-count` so the machine-readable value is unformatted.
 */
export function formatCount(value: number): string {
  return COUNT.format(value)
}
