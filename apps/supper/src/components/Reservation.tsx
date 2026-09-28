import { type FormEvent } from 'react'
import { User, Mail, Phone, Calendar, Clock, MessageSquare } from 'lucide-react'

export function Reservation() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="reservation" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-3xl font-bold text-charcoal"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Reservation
          </h2>
          <p className="text-sm text-muted">Book your table with us</p>
        </div>
        <form
          onSubmit={handleSubmit}
          aria-label="Reservation form"
          className="rounded-lg bg-light-bg p-8"
        >
          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="res-name"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Name
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <User size={16} className="text-muted" />
                <input
                  type="text"
                  id="res-name"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="res-email"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Email
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Mail size={16} className="text-muted" />
                <input
                  type="email"
                  id="res-email"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="res-phone"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Phone
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Phone size={16} className="text-muted" />
                <input
                  type="tel"
                  id="res-phone"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                htmlFor="res-persons"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Number of Persons
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <select
                  id="res-persons"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                >
                  <option>1 person</option>
                  <option>2 persons</option>
                  <option>3 persons</option>
                  <option>4 persons</option>
                  <option>5+ persons</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="res-date"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Date
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Calendar size={16} className="text-muted" />
                <input
                  type="date"
                  id="res-date"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="res-time"
                className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
              >
                Time
              </label>
              <div className="flex items-center gap-2 border-b border-gray-300 py-2">
                <Clock size={16} className="text-muted" />
                <input
                  type="time"
                  id="res-time"
                  className="w-full bg-transparent text-sm text-charcoal outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="res-message"
              className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted"
            >
              Message
            </label>
            <div className="flex items-start gap-2 border-b border-gray-300 py-2">
              <MessageSquare size={16} className="mt-0.5 text-muted" />
              <textarea
                id="res-message"
                rows={4}
                className="w-full bg-transparent text-sm text-charcoal outline-none"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="rounded border border-charcoal bg-charcoal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-charcoal"
            >
              Reserve Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
