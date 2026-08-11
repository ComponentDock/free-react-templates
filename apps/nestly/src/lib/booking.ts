/** Pure validation + summary helpers for the Nestly hotel reservation form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo is a static Bootstrap widget — the recreation
    adds minimal interactive behavior (documented spec choice): check-in and
    check-out dates are required and check-out must be on or after check-in;
    Guests (1/2/3) and Kids (0/1/2) selects default to their first options. */

export interface BookingValues {
  checkIn: string
  checkOut: string
  guests: string
  kids: string
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
  const guestsLabel = values.guests === '1' ? '1 Guest' : `${values.guests} Guests`
  const kidsLabel = values.kids === '1' ? '1 Kid' : `${values.kids} Kids`
  return `${formatDate(values.checkIn)} → ${formatDate(values.checkOut, true)} · ${guestsLabel} · ${kidsLabel}`
}
