export interface ClassCard {
  /** Deterministic placeholder-image seed (1–7), cycled across the 19 cards. */
  seed: number
  title: string
  time: string
}

const yoga = (seed: number): ClassCard => ({
  seed,
  title: 'Yoga training',
  time: '7 am-6 am',
})

/** Day-of-week column headers, left to right. */
export const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const

/**
 * Canonical weekly grid: 5 rows × 7 cells. `null` = no class (× mark),
 * otherwise a class card. Row 5 intentionally has adjacent cards on
 * Wednesday and Thursday; image seeds cycle 1–7 in source order.
 */
export const scheduleRows: (ClassCard | null)[][] = [
  [null, yoga(1), null, yoga(2), null, yoga(3), null],
  [yoga(4), null, yoga(5), null, yoga(6), null, yoga(7)],
  [null, yoga(1), null, yoga(2), null, yoga(3), null],
  [yoga(4), null, yoga(5), null, yoga(6), null, yoga(7)],
  [yoga(1), null, yoga(2), yoga(3), null, yoga(4), yoga(5)],
]
