/** Pure validation + summary helpers for the Hostly travel booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY Check In, Check Out and Room Type as
    required; the Adults and Children selects default to their first options
    (1 and 0) and are NOT required. */

export interface BookingValues {
  checkIn: string
  checkOut: string
  adults: string
  children: string
  roomType: string
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

  if (values.roomType === '') {
    errors.roomType = 'Please select a room type.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childrenLabel =
    values.children === '0'
      ? '0 children'
      : values.children === '1'
        ? '1 child'
        : `${values.children} children`
  return `Check-in ${values.checkIn} → Check-out ${values.checkOut} · ${adultsLabel} · ${childrenLabel} · ${values.roomType}`
}
