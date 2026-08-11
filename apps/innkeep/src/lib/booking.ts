/** Pure validation + summary helpers for the Innkeep room-booking form (kept
    exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo is static (jQuery Air Datepicker, no action on
    the form); the recreation (documented in the spec) requires name, phone,
    check-in and check-out, enforces Check-out ≥ Check-in, and shows a summary
    line on submit. Adults/Children default to 1 like the source selects. */

export interface BookingValues {
  name: string
  phone: string
  checkIn: string
  checkOut: string
  adults: number
  children: number
}

export type BookingErrors = Partial<Record<'name' | 'phone' | 'checkIn' | 'checkOut', string>>

/** Check-in/Check-out are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.name === '') {
    errors.name = 'Please enter your name.'
  }

  if (values.phone === '') {
    errors.phone = 'Please enter your phone number.'
  }

  if (values.checkIn === '') {
    errors.checkIn = 'Please choose a check-in date.'
  }

  if (values.checkOut === '') {
    errors.checkOut = 'Please choose a check-out date.'
  } else if (values.checkIn !== '' && values.checkOut < values.checkIn) {
    errors.checkOut = 'The check-out date must be on or after the check-in date.'
  }

  return errors
}

/** `2026-08-10` → `10 Aug 2026`, matching the source Air Datepicker format
    (`dd M yyyy`). Parsed from the ISO parts so the local timezone cannot
    shift the day. */
export function toDayLabel(date: string): string {
  const [year, month, day] = date.split('-')
  const parsed = new Date(Number(year), Number(month) - 1, Number(day))
  const label = parsed.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
  // toLocaleDateString emits "Aug 10, 2026"; the source format is "10 Aug
  // 2026" (day first, no comma).
  return label.replace(/([A-Z][a-z]{2}) (\d{1,2}), (\d{4})/, '$2 $1 $3')
}

function plural(count: number, singular: string, pluralForm: string): string {
  return count === 1 ? singular : pluralForm
}

export function formatSummary(values: BookingValues): string {
  return (
    `Room booked for ${values.name}: ${toDayLabel(values.checkIn)} to ` +
    `${toDayLabel(values.checkOut)}, ${values.adults} ` +
    `${plural(values.adults, 'adult', 'adults')}, ${values.children} ` +
    plural(values.children, 'child', 'children')
  )
}
