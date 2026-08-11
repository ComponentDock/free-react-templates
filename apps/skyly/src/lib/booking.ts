/** Pure validation + summary helpers for the Skyly flight-booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY Departing and Returning dates as
    required; the flight-type radios default to Roundtrip and the Adults,
    Children and Travel class selects default to their first options (1, 0
    and Economy class) — none of them are required. */

export interface BookingValues {
  flightType: string
  from: string
  to: string
  departing: string
  returning: string
  adults: string
  children: string
  travelClass: string
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<BookingField, string>>

/** Departing/returning are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.departing === '') {
    errors.departing = 'Please choose a departing date.'
  }

  if (values.returning === '') {
    errors.returning = 'Please choose a returning date.'
  } else if (values.departing !== '' && values.returning < values.departing) {
    errors.returning = 'Please choose a returning date on or after your departing date.'
  }

  return errors
}

export function formatSummary(values: BookingValues): string {
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childrenLabel = values.children === '1' ? '1 child' : `${values.children} children`
  return `${values.flightType} · ${values.from} → ${values.to} · ${values.departing} → ${values.returning} · ${adultsLabel} · ${childrenLabel} · ${values.travelClass}`
}
