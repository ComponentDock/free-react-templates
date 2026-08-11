/** Pure validation + summary helpers for the Voyagely travel-booking form
    (kept exported and side-effect free so every branch is unit-testable).

    Fidelity: the source demo is static (jQuery datepickers, no action on the
    form); the recreation (documented in the spec) requires Destination and
    both dates, enforces To ≥ From, and shows a summary line on submit. The
    Quantity stepper is optional and defaults to 0 (min 0, like the source's
    Tang()/Giam() clamp). */

export interface BookingValues {
  destination: string
  from: string
  to: string
  quantity: number
}

export type BookingField = keyof BookingValues

export type BookingErrors = Partial<Record<'destination' | 'from' | 'to', string>>

/** From/To are ISO `yyyy-mm-dd` strings, so plain string comparison is a
    valid date order check. */
export function validateBooking(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}

  if (values.destination === '') {
    errors.destination = 'Please enter a destination.'
  }

  if (values.from === '') {
    errors.from = 'Please choose a departure date.'
  }

  if (values.to === '') {
    errors.to = 'Please choose a return date.'
  } else if (values.from !== '' && values.to < values.from) {
    errors.to = 'The return date must be on or after the departure date.'
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

export function formatSummary(values: BookingValues): string {
  const guestsLabel = values.quantity === 1 ? '1 guest' : `${values.quantity} guests`
  return `Voyage to ${values.destination} from ${toDayLabel(values.from, false)} to ${toDayLabel(values.to, true)} for ${guestsLabel}`
}
