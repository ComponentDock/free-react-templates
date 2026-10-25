import { useState, type FormEvent } from 'react'
import { cn } from '@free-react-templates/ui'
import { arrivalWindows, bookingServices, takenSlots } from '../data'

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export interface DayChip {
  iso: string
  name: string
  day: string
  month: string
  label: string
}

/** The strip starts tomorrow, so a template built weeks ago still opens on the right week. */
export function buildDays(now: Date): DayChip[] {
  return DAY_NAMES.map((_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + index + 1)
    const name = DAY_NAMES[date.getDay()]!
    const day = String(date.getDate())
    const month = MONTH_NAMES[date.getMonth()]!
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate(),
    ).padStart(2, '0')}`

    return { iso, name, day, month, label: `${name} ${day} ${month}` }
  })
}

const TAKEN = new Set(takenSlots.map(([day, window]) => `${day}-${window}`))

/** Demo availability table: a `[day, window]` pair is already sold out. */
export function isWindowTaken(dayIndex: number, windowIndex: number): boolean {
  return TAKEN.has(`${dayIndex}-${windowIndex}`)
}

export interface BookingCardProps {
  /** Injectable clock so the seven day chips are deterministic in tests. */
  today?: Date
}

/**
 * The page's centre of gravity: a three-step picker (job → day → two-hour
 * window) plus the contact fields, a live summary and a demo-only confirmation.
 */
export function BookingCard({ today }: BookingCardProps) {
  const [now] = useState(() => today ?? new Date())
  const days = buildDays(now)
  const [service, setService] = useState<string>(bookingServices[0].value)
  const [dayIndex, setDayIndex] = useState(0)
  const [windowIndex, setWindowIndex] = useState<number | null>(null)
  const [confirmation, setConfirmation] = useState<string | null>(null)

  const selectedDay = days[dayIndex]!
  const selectedWindow = windowIndex === null ? null : arrivalWindows[windowIndex]!

  const chooseDay = (index: number) => {
    setDayIndex(index)
    setConfirmation(null)

    if (windowIndex !== null && isWindowTaken(index, windowIndex)) {
      setWindowIndex(null)
    }
  }

  const chooseWindow = (index: number) => {
    setWindowIndex(index)
    setConfirmation(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedWindow || !event.currentTarget.checkValidity()) {
      return
    }

    setConfirmation(`Booked for ${selectedDay.label}, ${selectedWindow.label}.`)
  }

  return (
    <form
      aria-labelledby="booking-heading"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6">
        <h2 id="booking-heading" className="text-xl font-bold text-ink-800">
          Book a technician
        </h2>
        <p className="mt-1.5 text-sm text-ink-500">
          Four choices and you are booked. No call back, no waiting for a slot.
        </p>
      </div>

      <fieldset className="min-w-0">
        <legend className="text-sm font-bold text-ink-700">
          <span className="text-primary-700">1.</span> What needs doing?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {bookingServices.map((option) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="service"
                value={option.value}
                checked={service === option.value}
                onChange={() => setService(option.value)}
                className="peer sr-only"
                required
              />
              <span className="inline-flex items-center rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-600 transition-colors peer-checked:border-primary-600 peer-checked:bg-primary-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 min-w-0">
        <legend className="text-sm font-bold text-ink-700">
          <span className="text-primary-700">2.</span> Which day suits you?
        </legend>
        <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto px-1 pb-2">
          {days.map((chip, index) => (
            <label key={chip.iso} className="cursor-pointer">
              <input
                type="radio"
                name="slot-day"
                value={chip.iso}
                checked={dayIndex === index}
                onChange={() => chooseDay(index)}
                className="peer sr-only"
                required
              />
              <span className="flex w-[68px] shrink-0 flex-col items-center rounded-xl border border-ink-200 px-2 py-3 transition-colors peer-checked:border-primary-600 peer-checked:bg-primary-50 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500">
                <span className="text-xs font-semibold uppercase text-ink-400">{chip.name}</span>{' '}
                <span className="mt-0.5 text-xl font-bold text-ink-800">{chip.day}</span>{' '}
                <span className="text-xs text-ink-400">{chip.month}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-8 min-w-0">
        <legend className="text-sm font-bold text-ink-700">
          <span className="text-primary-700">3.</span> Pick an arrival window
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {arrivalWindows.map((window, index) => {
            const taken = isWindowTaken(dayIndex, index)

            return (
              <label
                key={window.label}
                className={cn(taken ? 'cursor-not-allowed' : 'cursor-pointer')}
              >
                <input
                  type="radio"
                  name="slot-window"
                  value={window.label}
                  checked={windowIndex === index}
                  onChange={() => chooseWindow(index)}
                  disabled={taken}
                  className="peer sr-only"
                  required
                />
                <span
                  className={cn(
                    'flex h-full items-start justify-between gap-2 rounded-xl border p-3 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500',
                    taken
                      ? 'border-ink-100 bg-ink-50 text-ink-400'
                      : 'border-ink-200 text-ink-700 peer-checked:border-primary-600 peer-checked:bg-primary-50',
                  )}
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{window.label}</span>
                    {window.note ? (
                      <span className="mt-0.5 block text-xs text-ink-400">{window.note}</span>
                    ) : null}{' '}
                  </span>
                  <span
                    className={cn(
                      'text-xs font-semibold',
                      taken ? 'text-ink-400' : 'text-primary-700',
                    )}
                  >
                    {taken ? 'Taken' : 'Open'}
                  </span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="mt-8 min-w-0">
        <legend className="text-sm font-bold text-ink-700">
          <span className="text-primary-700">4.</span> Where should we come?
        </legend>
        <div className="mt-3 grid gap-3">
          <label className="block text-sm font-semibold text-ink-700" htmlFor="booking-name">
            Your name
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 block w-full rounded-lg border border-ink-200 px-4 py-2.5 text-base font-normal text-ink-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-semibold text-ink-700" htmlFor="booking-phone">
            Phone
            <input
              id="booking-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="mt-1 block w-full rounded-lg border border-ink-200 px-4 py-2.5 text-base font-normal text-ink-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 focus:outline-none"
            />
          </label>
          <label className="block text-sm font-semibold text-ink-700" htmlFor="booking-address">
            Service address
            <input
              id="booking-address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              className="mt-1 block w-full rounded-lg border border-ink-200 px-4 py-2.5 text-base font-normal text-ink-800 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 focus:outline-none"
            />
          </label>
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 text-sm font-semibold text-ink-600">
        {selectedWindow
          ? `Your visit: ${selectedDay.label}, ${selectedWindow.label}.`
          : 'Choose a day and a window to see your visit here.'}
      </p>

      <button
        type="submit"
        className="mt-3 w-full rounded-lg bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700"
      >
        Confirm this visit
      </button>

      {confirmation ? (
        <p
          role="status"
          className="mt-3 rounded-lg bg-primary-50 px-4 py-3 text-sm text-primary-800"
        >
          {confirmation} You will get a text confirmation, not a call back.
        </p>
      ) : null}
    </form>
  )
}
