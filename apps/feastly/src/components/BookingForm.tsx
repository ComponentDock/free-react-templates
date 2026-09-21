import { useState } from 'react'
import type { FormEvent } from 'react'
import { Calendar, Clock, Users } from 'lucide-react'

export function BookingForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(1,7,16,0.7), rgba(1,7,16,0.7)), url(https://picsum.photos/seed/feastly-table/1600/600)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h3 className="font-display text-3xl font-bold text-white">
            Book <span className="text-primary-400">your</span> table
          </h3>
          <p className="mt-2 italic text-white/70">
            Beast kind form divide night above let moveth bearing darkness.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl flex-col gap-4 sm:flex-row">
          <div className="flex flex-1 items-center gap-2 rounded bg-white px-4 py-3">
            <Calendar className="h-5 w-5 text-smoke" aria-hidden="true" />
            <label htmlFor="booking-date" className="sr-only">
              Date
            </label>
            <input
              id="booking-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-sm text-ink outline-none"
            />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded bg-white px-4 py-3">
            <Clock className="h-5 w-5 text-smoke" aria-hidden="true" />
            <label htmlFor="booking-time" className="sr-only">
              Time
            </label>
            <input
              id="booking-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent text-sm text-ink outline-none"
            />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded bg-white px-4 py-3">
            <Users className="h-5 w-5 text-smoke" aria-hidden="true" />
            <label htmlFor="booking-guests" className="sr-only">
              Number of guests
            </label>
            <input
              id="booking-guests"
              type="number"
              min={1}
              max={20}
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-smoke"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-primary-400 px-8 py-3 text-sm font-medium uppercase text-ink transition-all hover:border hover:border-primary-400 hover:bg-transparent hover:text-primary-400"
          >
            Book a Table
          </button>
        </form>
      </div>
    </section>
  )
}
