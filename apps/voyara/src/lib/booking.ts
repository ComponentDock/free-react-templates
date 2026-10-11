/* Booking + newsletter validation helpers.
   Pure functions so the form components stay thin and every branch is
   unit-testable (the template keeps 100% coverage). */

export interface BookingValues {
  firstName: string
  lastName: string
  arrival: string
  departure: string
  roomType: string
  rooms: string
  adults: string
  childs: string
  message: string
}

export type BookingErrors = Partial<Record<keyof BookingValues, string>>

export const EMPTY_BOOKING: BookingValues = {
  firstName: '',
  lastName: '',
  arrival: '',
  departure: '',
  roomType: '',
  rooms: '',
  adults: '',
  childs: '',
  message: '',
}

const REQUIRED: ReadonlyArray<readonly [keyof BookingValues, string]> = [
  ['firstName', 'Please enter your first name'],
  ['lastName', 'Please enter your last name'],
  ['arrival', 'Please choose an arrival date'],
  ['departure', 'Please choose a departure date'],
  ['roomType', 'Please choose a room type'],
  ['rooms', 'Please choose the number of rooms'],
  ['adults', 'Please choose the number of adults'],
  ['childs', 'Please choose the number of childs'],
  ['message', 'Please enter your message'],
]

export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}
  for (const [field, message] of REQUIRED) {
    if (values[field].trim() === '') {
      errors[field] = message
    }
  }
  return errors
}

export function hasErrors(errors: BookingErrors): boolean {
  return Object.keys(errors).length > 0
}

export function validateEmail(value: string): string | null {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    ? null
    : 'Please enter a valid email address'
}
