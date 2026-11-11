import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react'
import { DEFAULT_LEAD_DAYS, DEFAULT_NIGHTS, MESSAGES, SUBMIT_MESSAGE } from '../data/site'

const ONE_DAY = 86_400_000

/**
 * A local-date string, built from the calendar parts rather than
 * `toISOString()` so a timezone east or west of UTC cannot shift the day.
 */
export function iso(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/**
 * Both ends are read at midday: a DST change then moves the clock by an hour
 * inside the same day instead of across a date boundary.
 */
export function addDays(value: string, days: number): string {
  const date = new Date(`${value}T12:00:00`)
  date.setDate(date.getDate() + days)
  return iso(date)
}

/** Whole nights between two local dates, DST included. */
export function nightsBetween(checkIn: string, checkOut: string): number {
  return Math.round((Date.parse(`${checkOut}T12:00:00`) - Date.parse(`${checkIn}T12:00:00`)) / ONE_DAY)
}

/** `2 Dec` — the shape the status line prints. */
export function prettyDate(value: string): string {
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  })
}

export interface StaySearch {
  readonly where: string
  readonly checkIn: string
  readonly checkOut: string
  readonly guest: string
  readonly message: string
  readonly today: string
  readonly earliestCheckOut: string
  readonly onWhereChange: (event: ChangeEvent<HTMLInputElement>) => void
  readonly onCheckInChange: (event: ChangeEvent<HTMLInputElement>) => void
  readonly onCheckOutChange: (event: ChangeEvent<HTMLInputElement>) => void
  readonly onGuestChange: (event: ChangeEvent<HTMLSelectElement>) => void
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

/**
 * The booking panel's state. The dates are plain strings (never `Date` objects),
 * the check-out is kept at least one night after the check-in, and the status
 * line always describes the attempt that just happened — the reference leaves
 * its previous sentence in place when the browser blocks a submit.
 */
export function useStaySearch(): StaySearch {
  const [defaults] = useState(() => {
    const today = iso(new Date())
    const checkIn = addDays(today, DEFAULT_LEAD_DAYS)
    return { today, checkIn, checkOut: addDays(checkIn, DEFAULT_NIGHTS) }
  })
  const [where, setWhere] = useState('')
  const [checkIn, setCheckIn] = useState(defaults.checkIn)
  const [checkOut, setCheckOut] = useState(defaults.checkOut)
  const [guest, setGuest] = useState(SUBMIT_MESSAGE.defaultGuest)
  const [message, setMessage] = useState('')

  const onWhereChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setWhere(event.target.value)
  }, [])

  const onCheckInChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setCheckIn(value)
      if (!value) return
      const earliest = addDays(value, 1)
      if (checkOut < earliest) setCheckOut(earliest)
    },
    [checkOut],
  )

  const onCheckOutChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value)
  }, [])

  const onGuestChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setGuest(event.target.value)
  }, [])

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const place = where.trim()
      if (!place) {
        setMessage(MESSAGES.missingPlace)
        return
      }
      if (checkOut <= checkIn) {
        setMessage(MESSAGES.badDates)
        return
      }
      const nights = nightsBetween(checkIn, checkOut)
      setMessage(SUBMIT_MESSAGE.line(place, guest, prettyDate(checkIn), prettyDate(checkOut), nights))
    },
    [checkIn, checkOut, guest, where],
  )

  return {
    where,
    checkIn,
    checkOut,
    guest,
    message,
    today: defaults.today,
    earliestCheckOut: addDays(checkIn, 1),
    onWhereChange,
    onCheckInChange,
    onCheckOutChange,
    onGuestChange,
    onSubmit,
  }
}
