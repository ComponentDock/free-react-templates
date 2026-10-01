/** Weekday column labels — the schedule grid, Sunday-first. */
export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const

export type Day = (typeof DAYS)[number]

/** One staff member's weekly slots — "--" marks an empty slot. */
export interface StaffRow {
  name: string
  times: readonly [string, string, string, string, string, string, string]
}

/**
 * Canonical 8×7 weekly schedule — identical in all six treatment
 * tables (8 staff × 7 days, times or "--").
 */
export const SCHEDULE: readonly StaffRow[] = [
  {
    name: 'Lawrence Scott',
    times: ['8:00 AM', '--', '--', '8:00 AM', '--', '5:00 PM', '8:00 AM'],
  },
  {
    name: 'Jane Medina',
    times: ['--', '5:00 PM', '5:00 PM', '--', '9:00 AM', '--', '--'],
  },
  {
    name: 'Billy Mitchell',
    times: ['9:00 AM', '--', '--', '--', '--', '2:00 PM', '8:00 AM'],
  },
  {
    name: 'Beverly Reid',
    times: ['--', '5:00 PM', '5:00 PM', '--', '9:00 AM', '--', '--'],
  },
  {
    name: 'Tiffany Wade',
    times: ['8:00 AM', '--', '--', '8:00 AM', '--', '5:00 PM', '8:00 AM'],
  },
  {
    name: 'Sean Adams',
    times: ['--', '5:00 PM', '5:00 PM', '--', '9:00 AM', '--', '--'],
  },
  {
    name: 'Rachel Simpson',
    times: ['9:00 AM', '--', '--', '--', '--', '2:00 PM', '8:00 AM'],
  },
  {
    name: 'Mark Salazar',
    times: ['8:00 AM', '--', '--', '8:00 AM', '--', '5:00 PM', '8:00 AM'],
  },
]

/** The six stacked color treatments, top → bottom. */
export type TableVariant = 'ver1' | 'ver2' | 'ver3' | 'ver4' | 'ver5' | 'ver6'
