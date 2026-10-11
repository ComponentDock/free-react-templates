import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  EMPTY_BOOKING,
  hasErrors,
  validateBooking,
  type BookingErrors,
  type BookingValues,
} from '../lib/booking'

const INPUT_CLASS =
  'w-full border border-black/10 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-pink'

const SELECTS: ReadonlyArray<{
  name: Exclude<keyof BookingValues, 'firstName' | 'lastName' | 'arrival' | 'departure' | 'message'>
  label: string
  options: readonly string[]
}> = [
  { name: 'roomType', label: 'Room Type', options: ['Room type 1', 'Room type 2', 'Room type 3'] },
  { name: 'rooms', label: 'Number Of Rooms', options: ['1', '2', '3'] },
  { name: 'adults', label: 'Adults', options: ['1', '2', '3'] },
  { name: 'childs', label: 'Childs', options: ['1', '2', '3'] },
]

export function BookingForm() {
  const [values, setValues] = useState<BookingValues>(EMPTY_BOOKING)
  const [errors, setErrors] = useState<BookingErrors>({})
  const [sent, setSent] = useState(false)

  function update(name: keyof BookingValues, value: string) {
    setValues((previous) => ({ ...previous, [name]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateBooking(values)
    if (hasErrors(found)) {
      setErrors(found)
      setSent(false)
      return
    }
    setErrors({})
    setSent(true)
  }

  function reset() {
    setValues(EMPTY_BOOKING)
    setErrors({})
    setSent(false)
  }

  return (
    <section id="book" data-testid="booking-section" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[70px] max-w-[720px] text-center">
          <h1 className="text-[36px] font-semibold text-ink">Book a Room</h1>
          <p className="mt-4">
            Send us the dates and we check the room availability for you — you only pay when the
            stay is confirmed.
          </p>
        </div>

        {sent ? (
          <div className="text-center">
            <p role="status" className="text-[18px] text-ink">
              Your booking request has been received — we will confirm your room by email.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-block rounded-[25px] bg-gradient-to-t from-pink to-peach px-8 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white"
            >
              Book another room
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-ink">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  onChange={(event) => update('firstName', event.target.value)}
                  className={INPUT_CLASS}
                />
                {errors.firstName ? (
                  <p role="alert" className="mt-2 text-pink">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="lastName" className="mb-2 block text-ink">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  onChange={(event) => update('lastName', event.target.value)}
                  className={INPUT_CLASS}
                />
                {errors.lastName ? (
                  <p role="alert" className="mt-2 text-pink">
                    {errors.lastName}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="arrival" className="mb-2 block text-ink">
                  Arrival
                </label>
                <input
                  id="arrival"
                  name="arrival"
                  type="date"
                  value={values.arrival}
                  onChange={(event) => update('arrival', event.target.value)}
                  className={INPUT_CLASS}
                />
                {errors.arrival ? (
                  <p role="alert" className="mt-2 text-pink">
                    {errors.arrival}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor="departure" className="mb-2 block text-ink">
                  Departure
                </label>
                <input
                  id="departure"
                  name="departure"
                  type="date"
                  value={values.departure}
                  onChange={(event) => update('departure', event.target.value)}
                  className={INPUT_CLASS}
                />
                {errors.departure ? (
                  <p role="alert" className="mt-2 text-pink">
                    {errors.departure}
                  </p>
                ) : null}
              </div>

              {SELECTS.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="mb-2 block text-ink">
                    {field.label}
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    value={values[field.name]}
                    onChange={(event) => update(field.name, event.target.value)}
                    className={INPUT_CLASS}
                  >
                    <option value="" />
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors[field.name] ? (
                    <p role="alert" className="mt-2 text-pink">
                      {errors[field.name]}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows={9}
                value={values.message}
                onChange={(event) => update('message', event.target.value)}
                className={INPUT_CLASS}
              />
              {errors.message ? (
                <p role="alert" className="mt-2 text-pink">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="md:col-span-2 md:text-center">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-3 rounded-[25px] bg-gradient-to-t from-pink to-peach px-8 py-3 text-[13px] font-medium uppercase tracking-[1px] text-white"
              >
                Book Room
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
