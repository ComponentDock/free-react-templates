/** Pure validation + summary helpers for the Innly resort reservation form
    (kept exported and side-effect free so every branch is unit-testable). */

export interface BookingValues {
  checkIn: string
  checkOut: string
  rooms: string
  adults: string
  children: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

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

  if (values.rooms === '') {
    errors.rooms = 'Please select the number of rooms.'
  }

  if (values.adults === '') {
    errors.adults = 'Please select the number of adults.'
  }

  if (values.children === '') {
    errors.children = 'Please select the number of children.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const roomsLabel = values.rooms === '1' ? '1 room' : `${values.rooms} rooms`
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childrenLabel =
    values.children === '0'
      ? '0 children'
      : values.children === '1'
        ? '1 child'
        : `${values.children} children`
  return `Check-in ${values.checkIn} → Check-out ${values.checkOut} · ${roomsLabel} · ${adultsLabel} · ${childrenLabel}`
}
