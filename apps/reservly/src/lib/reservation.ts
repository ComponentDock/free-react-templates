export interface ReservationDetails {
  destination: string
  checkIn: string
  checkOut: string
  rooms: number
  adults: number
  children: number
}

export interface ReservationErrors {
  destination?: string
  checkIn?: string
  checkOut?: string
}

/** Validate a reservation form submission. Returns an error map keyed by
 *  field; empty object means valid. Check-out must not precede check-in. */
export function validateReservation(details: ReservationDetails): ReservationErrors {
  const errors: ReservationErrors = {}
  if (details.destination.trim() === '') {
    errors.destination = 'Please enter a destination'
  }
  if (details.checkIn === '') {
    errors.checkIn = 'Please choose a check-in date'
  }
  if (details.checkOut === '') {
    errors.checkOut = 'Please choose a check-out date'
  } else if (details.checkIn !== '' && details.checkOut < details.checkIn) {
    errors.checkOut = 'Check-out must be on or after check-in'
  }
  return errors
}

/** Format a human-readable summary line for a valid reservation. */
export function formatSummary(details: ReservationDetails): string {
  const guests = `${details.adults} adult${details.adults === 1 ? '' : 's'}, ${
    details.children
  } child${details.children === 1 ? '' : 'ren'}, ${details.rooms} room${
    details.rooms === 1 ? '' : 's'
  }`
  return `${guests} · ${details.checkIn} → ${details.checkOut} · ${details.destination.trim()}`
}
