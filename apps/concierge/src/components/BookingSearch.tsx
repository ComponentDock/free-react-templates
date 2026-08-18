import { useState } from 'react'
import { Calendar, Users } from 'lucide-react'
import { pillPrimary } from './buttonClasses'

const fieldClass =
  'h-[54px] w-full border border-black/10 bg-transparent pl-11 pr-3 text-sm text-ink placeholder:text-black/70 focus:border-black/20 focus:outline-none'

const iconClass =
  'pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-black/40'

/**
 * White booking-widget card overlapping the hero bottom (reference:
 * .sec-form-search > .form.row). Native date inputs replace the source's
 * flatpickr widgets; submission is client-side only.
 */
export function BookingSearch() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section aria-label="Check availability" className="bg-light-bg">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <form
          data-booking-form
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
          className="-mt-[50px] grid grid-cols-1 gap-4 bg-white p-[30px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="relative">
            <label htmlFor="arrival" className="sr-only">
              Date Arrival
            </label>
            <Calendar className={iconClass} aria-hidden="true" />
            <input
              id="arrival"
              type="date"
              placeholder="Date Arrival"
              required
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <label htmlFor="departure" className="sr-only">
              Date Departure
            </label>
            <Calendar className={iconClass} aria-hidden="true" />
            <input
              id="departure"
              type="date"
              placeholder="Date Departure"
              required
              className={fieldClass}
            />
          </div>

          <div className="relative">
            <label htmlFor="persons" className="sr-only">
              # of Person
            </label>
            <Users className={iconClass} aria-hidden="true" />
            <select id="persons" className={fieldClass} defaultValue="">
              <option value="" disabled>
                # of Person
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </div>

          <button type="submit" className={pillPrimary + ' w-full'}>
            Find now
          </button>
        </form>

        {submitted && (
          <p role="status" className="py-4 text-sm text-brand">
            Thanks — the concierge desk will confirm availability shortly.
          </p>
        )}
      </div>
    </section>
  )
}
