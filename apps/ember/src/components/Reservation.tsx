import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/
const TIMES = [
  '8 AM to 10 AM',
  '10 AM to 12 PM',
  '12 PM to 2 PM',
  '2 PM to 4 PM',
  '4 PM to 6 PM',
  '6 PM to 8 PM',
  '8 PM to 10 PM',
  '10 PM to 12 AM',
] as const

const GUESTS = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'] as const

export function Reservation() {
  const [email, setEmail] = useState('')
  const [guests, setGuests] = useState<string>(GUESTS[0])
  const [time, setTime] = useState<string>(TIMES[0])
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Reservation
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Book A Table
          </h2>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-brand/40 bg-brand/10 p-8 text-center">
            <p className="font-display text-xl font-bold text-brand">
              Thank you! Your reservation request has been received.
            </p>
            <p className="mt-2 text-sm text-mist dark:text-gray-400">
              We'll confirm your table at <strong>{email}</strong> shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
            <div>
              <label
                htmlFor="res-email"
                className="block text-sm font-medium text-ink dark:text-gray-300"
              >
                Email address *
              </label>
              <input
                id="res-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                aria-invalid={Boolean(error)}
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              {error ? (
                <p role="alert" className="mt-1 text-sm text-red-500">
                  {error}
                </p>
              ) : null}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="res-guests"
                  className="block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Persons *
                </label>
                <select
                  id="res-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value as (typeof GUESTS)[number])}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  {GUESTS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="res-time"
                  className="block text-sm font-medium text-ink dark:text-gray-300"
                >
                  Time *
                </label>
                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value as (typeof TIMES)[number])}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="res-note"
                className="block text-sm font-medium text-ink dark:text-gray-300"
              >
                Your Note
              </label>
              <textarea
                id="res-note"
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Special requests, dietary needs, occasion..."
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
            >
              Book A Table
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
