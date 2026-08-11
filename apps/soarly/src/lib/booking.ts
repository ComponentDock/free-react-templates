/** Pure validation + summary helpers for the Soarly flight-booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo is a STATIC form (its only JS is the floating
    label toggle). The recreation (documented in the spec) adds minimal
    validation: flying-from and flying-to are required; the date selects and
    the travel-class/adults/children selects all have default values in the
    source (dates are empty until the native picker is used — the spec keeps
    them required), so only the two text fields and the two dates can be
    empty. An unselected flight type (source marks NO radio checked) defaults
    to "Roundtrip" in the summary, matching the spec's example. */

export interface FlightValues {
  flightType: string
  flyingFrom: string
  flyingTo: string
  checkIn: string
  checkOut: string
  travelClass: string
  adults: string
  children: string
}

export type FlightField = keyof FlightValues

export type FlightErrors = Partial<Record<FlightField, string>>

/** Check-in/check-out are ISO `yyyy-mm-dd` strings, so plain string
    comparison is a valid date order check. */
export function validateBooking(values: FlightValues): FlightErrors {
  const errors: FlightErrors = {}

  if (values.flyingFrom === '') {
    errors.flyingFrom = 'Please enter your departure city or airport.'
  }

  if (values.flyingTo === '') {
    errors.flyingTo = 'Please enter your arrival city or airport.'
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

export function formatSummary(values: FlightValues): string {
  /* The source marks NO flight-type radio checked; the summary defaults to
     "Roundtrip" (the first option), like the untouched selects. */
  const flightType = values.flightType === '' ? 'Roundtrip' : values.flightType
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childrenLabel = values.children === '1' ? '1 child' : `${values.children} children`
  return `${flightType} · ${values.flyingFrom} → ${values.flyingTo} · ${toDayLabel(values.checkIn, false)} – ${toDayLabel(values.checkOut, true)} · ${values.travelClass} · ${adultsLabel} · ${childrenLabel}`
}
