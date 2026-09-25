import { useState, type FormEvent } from 'react'
import { User, Mail, Phone, ChevronDown, Calendar, Clock } from 'lucide-react'

export function Reservation() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="bg-paper py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-ink md:text-5xl">Reservation</h2>
          <p className="text-lg text-mist">Free Website Template For Restaurants</p>
        </div>

        {submitted ? (
          <div className="rounded-lg border border-brand/40 bg-brand/10 p-8 text-center">
            <p className="text-lg font-bold text-brand">
              Thank you! Your reservation has been received.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-sm" noValidate>
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div>
                <label htmlFor="res-name" className="mb-2 block text-sm text-mist">
                  Name
                </label>
                <div className="relative">
                  <input
                    id="res-name"
                    type="text"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <User
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-email" className="mb-2 block text-sm text-mist">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="res-email"
                    type="email"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Mail
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-phone" className="mb-2 block text-sm text-mist">
                  Phone
                </label>
                <div className="relative">
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Phone
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-persons" className="mb-2 block text-sm text-mist">
                  Number of Persons
                </label>
                <div className="relative">
                  <select
                    id="res-persons"
                    className="w-full appearance-none rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  >
                    <option>1 person</option>
                    <option>2 persons</option>
                    <option>3 persons</option>
                    <option>4 persons</option>
                    <option>5+ persons</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-date" className="mb-2 block text-sm text-mist">
                  Date
                </label>
                <div className="relative">
                  <input
                    id="res-date"
                    type="text"
                    required
                    placeholder="MM/DD/YYYY"
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Calendar
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-time" className="mb-2 block text-sm text-mist">
                  Time
                </label>
                <div className="relative">
                  <input
                    id="res-time"
                    type="text"
                    required
                    placeholder="HH:MM"
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Clock
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-sm border-2 border-brand bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Reserve Now
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
