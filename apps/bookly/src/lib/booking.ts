/** Pure validation + summary helpers for the Bookly hotel-reservation form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks only Check In / Check Out as `required`;
    the recreation additionally validates name, email and phone (documented
    recreation choice in the spec). Rooms and Guests selects default to their
    first options (1 and 1 Person) and are never empty. */

export interface BookingValues {
  name: string
  email: string
  phone: string
  rooms: string
  guests: string
  checkIn: string
  checkOut: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Check-in/check-out are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  const email = values.email.trim()

  if (values.name.trim() === '') {
    errors.name = 'Please enter your name.'
  }

  if (email === '') {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.phone.trim() === '') {
    errors.phone = 'Please enter your phone number.'
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

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
] as const

/** `2026-08-10` → `Aug 10` (withYear adds `, 2026`). */
function formatDate(iso: string, withYear = false): string {
  const [year, month, day] = iso.split('-')
  const label = `${MONTHS[Number(month) - 1]} ${Number(day)}`
  return withYear ? `${label}, ${year}` : label
}

export function formatSummary(values: BookingValues): string {
  const roomsLabel = values.rooms === '1' ? '1 room' : `${values.rooms} rooms`
  return `${values.name} · ${formatDate(values.checkIn)} → ${formatDate(values.checkOut, true)} · ${roomsLabel} · ${values.guests}`
}
