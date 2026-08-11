/** Pure validation + summary helpers for the Triply taxi booking form (kept
    exported and side-effect free so every branch is unit-testable). */

export interface BookingValues {
  name: string
  phone: string
  pickup: string
  destination: string
  passengers: string
  date: string
  time: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

const PHONE_CHARS = /^[0-9+(). -]+$/

/** A phone number is valid when it only contains digits, + ( ) - space or
    dots AND has at least 7 digits (so "......." is rejected). */
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 7 && PHONE_CHARS.test(phone)
}

export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.name === '') {
    errors.name = 'Please enter your name.'
  }

  if (values.phone === '') {
    errors.phone = 'Please enter your phone number.'
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (values.pickup === '') {
    errors.pickup = 'Please enter your pickup location.'
  }

  if (values.destination === '') {
    errors.destination = 'Please enter your destination location.'
  }

  if (values.passengers === '') {
    errors.passengers = 'Please select the number of passengers.'
  }

  if (values.date === '') {
    errors.date = 'Please choose a pickup date.'
  }

  if (values.time === '') {
    errors.time = 'Please choose a pickup time.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const passengerLabel =
    values.passengers === '1' ? '1 passenger' : `${values.passengers} passengers`
  return `${passengerLabel} · ${values.date} ${values.time} · ${values.pickup} → ${values.destination} · ${values.name}`
}
