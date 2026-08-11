/** Pure validation + summary helpers for the Drivly car-booking form (kept
    exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo is a static Bootstrap form (only the date
    input is marked required). The recreation validates name, email, phone,
    pickup location, destination and pickup date (documented recreation
    choice in the spec). Hour / Min / AM-PM selects always hold a value
    (defaults 1 / 05 / AM) and are never validated. */

export interface BookingValues {
  name: string
  email: string
  phone: string
  pickup: string
  destination: string
  pickupDate: string
  hour: string
  min: string
  ampm: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  if (values.pickup.trim() === '') {
    errors.pickup = 'Please enter your pickup location.'
  }

  if (values.destination.trim() === '') {
    errors.destination = 'Please enter your destination.'
  }

  if (values.pickupDate === '') {
    errors.pickupDate = 'Please choose a pickup date.'
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

/** `2026-08-10` → `Aug 10, 2026`. */
function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-')
  return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`
}

export function formatSummary(values: BookingValues): string {
  const time = `${values.hour}:${values.min} ${values.ampm}`
  return `${values.pickup} → ${values.destination} · ${formatDate(values.pickupDate)} · ${time}`
}
