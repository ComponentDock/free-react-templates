/** Pure validation + summary helpers for the Guestly room-reservation form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY Arrival and Departure dates as
    required; the Rooms, Adults and Kids selects default to their first
    options (1, 1 and 0) and are NOT required. */

export interface BookingValues {
  arrival: string
  departure: string
  rooms: string
  adults: string
  kids: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

/** Arrival/departure are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.arrival === '') {
    errors.arrival = 'Please choose an arrival date.'
  }

  if (values.departure === '') {
    errors.departure = 'Please choose a departure date.'
  } else if (values.arrival !== '' && values.departure < values.arrival) {
    errors.departure = 'Please choose a departure date on or after your arrival date.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const roomsLabel = values.rooms === '1' ? '1 room' : `${values.rooms} rooms`
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const kidsLabel = values.kids === '1' ? '1 kid' : `${values.kids} kids`
  return `Arrival ${values.arrival} → Departure ${values.departure} · ${roomsLabel} · ${adultsLabel} · ${kidsLabel}`
}
