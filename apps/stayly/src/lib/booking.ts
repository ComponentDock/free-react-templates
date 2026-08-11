/** Pure validation + summary helpers for the Stayly booking form (kept
    exported and side-effect free so every branch is unit-testable). */

export interface BookingValues {
  checkIn: string
  checkOut: string
  adults: string
  children: string
  email: string
  phone: string
}

export type BookingErrors = Partial<Record<'checkIn' | 'checkOut' | 'email' | 'phone', string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.checkIn === '') {
    errors.checkIn = 'Please choose a check-in date.'
  }

  if (values.checkOut === '') {
    errors.checkOut = 'Please choose a check-out date.'
  } else if (values.checkIn !== '' && values.checkOut < values.checkIn) {
    errors.checkOut = 'Check-out must be on or after check-in.'
  }

  if (values.email === '') {
    errors.email = 'Please enter your email.'
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (values.phone === '') {
    errors.phone = 'Please enter your phone number.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const adultLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childLabel = values.children === '1' ? '1 child' : `${values.children} children`
  return `${adultLabel} · ${childLabel} · ${values.checkIn} → ${values.checkOut} · ${values.email}`
}
