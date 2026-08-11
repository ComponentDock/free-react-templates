/** Pure validation + summary helpers for the Coastly hotel booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY Check In and Check out dates as
    required; the destination input and Guests select start empty / at the
    first option. The recreation validates destination + both dates
    (check-out on or after check-in) and formats a summary line. */

export interface BookingValues {
  destination: string
  checkIn: string
  checkOut: string
  guests: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** ISO `yyyy-mm-dd` → "Aug 10"; withYear → "Aug 13, 2026". Parsed as UTC so
    the label is deterministic in any timezone. */
function formatDate(iso: string, withYear = false): string {
  const date = new Date(`${iso}T00:00:00Z`)
  const label = `${MONTHS[date.getUTCMonth()]} ${date.getUTCDate()}`
  return withYear ? `${label}, ${date.getUTCFullYear()}` : label
}

/** Check-in/check-out are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.destination.trim() === '') {
    errors.destination = 'Please enter a destination.'
  }

  if (values.checkIn === '') {
    errors.checkIn = 'Please choose a check-in date.'
  }

  if (values.checkOut === '') {
    errors.checkOut = 'Please choose a check-out date.'
  } else if (values.checkIn !== '' && values.checkOut < values.checkIn) {
    errors.checkOut = 'Please choose a check-out date on or after your check-in date.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const guestsLabel = values.guests === '1' ? '1 guest' : `${values.guests} guests`
  return `${values.destination} · ${formatDate(values.checkIn)} → ${formatDate(values.checkOut, true)} · ${guestsLabel}`
}
