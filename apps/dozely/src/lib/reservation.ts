/** Pure validation + summary helpers for the Dozely hotel-reservation form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY the Check In / Check out dates as
    `required`; the recreation (documented in the spec) also requires a
    Destination. Rooms/Adults/Children selects default to their first options
    (1, 1, 0); Email and Phone are optional in the source demo (no `required`
    attribute), so they stay optional here too. */

export interface ReservationValues {
  destination: string
  checkIn: string
  checkOut: string
  rooms: string
  adults: string
  children: string
  email: string
  phone: string
}

export type ReservationField = keyof ReservationValues

export type ReservationErrors = Partial<Record<ReservationField, string>>

/** Check-in/check-out are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateReservation(values: ReservationValues): ReservationErrors {
  const errors: ReservationErrors = {}

  if (values.destination === '') {
    errors.destination = 'Please enter a destination.'
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

/** `2026-08-10` → `Aug 10` (no year) or `Aug 14, 2026` (with year), matching
    the summary format in the spec. Parsed from the ISO parts so the local
    timezone cannot shift the day. */
function toDayLabel(date: string, withYear: boolean): string {
  const [year, month, day] = date.split('-')
  const parsed = new Date(Number(year), Number(month) - 1, Number(day))
  return parsed.toLocaleDateString(
    'en-US',
    withYear
      ? { month: 'short', day: 'numeric', year: 'numeric' }
      : { month: 'short', day: 'numeric' },
  )
}

export function formatSummary(values: ReservationValues): string {
  /* The three selects start on their hidden placeholder option (''); the
     summary defaults them to their first real options, matching the source
     demo's static values. */
  const rooms = values.rooms === '' ? '1' : values.rooms
  const adults = values.adults === '' ? '1' : values.adults
  const children = values.children === '' ? '0' : values.children
  const roomsLabel = rooms === '1' ? '1 room' : `${rooms} rooms`
  const adultsLabel = adults === '1' ? '1 adult' : `${adults} adults`
  const childrenLabel = children === '1' ? '1 child' : `${children} children`
  const contact = [values.email, values.phone].filter((value) => value !== '').join(' · ')
  const core = `${values.destination} · ${roomsLabel}, ${adultsLabel}, ${childrenLabel} · ${toDayLabel(values.checkIn, false)} – ${toDayLabel(values.checkOut, true)}`
  return contact === '' ? core : `${core} · ${contact}`
}
