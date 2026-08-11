/** Pure validation + summary helpers for the Wingly flight-booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo marks ONLY the Departing/Returning dates as
    `required`; the recreation (documented in the spec) also requires Flying
    from and Flying to — the flight-type radios default to Roundtrip and the
    Adults, Children and Travel class selects default to their first options
    (1, 0 and Economy class). */

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

  if (values.from === '') {
    errors.from = 'Please enter a departure city or airport.'
  }

  if (values.to === '') {
    errors.to = 'Please enter an arrival city or airport.'
  }

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

/** `2026-08-10` → `Aug 10` (no year) or `Aug 17, 2026` (with year), matching
    the summary format in the spec: "JFK → LHR · Aug 10 – Aug 17, 2026 · 2
    adults, 1 child · Economy class". Parsed from the ISO parts so the local
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

export function formatSummary(values: BookingValues): string {
  const adultsLabel = values.adults === '1' ? '1 adult' : `${values.adults} adults`
  const childrenLabel = values.children === '1' ? '1 child' : `${values.children} children`
  return `${values.from} → ${values.to} · ${toDayLabel(values.departing, false)} – ${toDayLabel(values.returning, true)} · ${adultsLabel}, ${childrenLabel} · ${values.travelClass}`
}
