import { useState, type FormEvent } from 'react'
import { Calendar } from 'lucide-react'
import { ADULT_OPTIONS, BOOKING_TITLE, CHILD_OPTIONS, ROOM_OPTIONS } from '../data'
import { bookingSchema, fieldErrors, initialBooking } from '../lib/forms'

/* Booking widget (source: div.hotel_booking_area > div.hotel_booking_table —
   dark #04091e panel with the "Book Your Room" title, Arrival/Departure date
   fields with calendar icons, Adult/Child/Rooms selects and a full-width
   yellow "Book Now" button; validates with zod and swaps to a confirmation
   on success). */
export function BookingWidget() {
  const [values, setValues] = useState(initialBooking)
  const [errors, setErrors] = useState<Record<string, string | undefined>>({})
  const [confirmed, setConfirmed] = useState(false)

  function handleChange(field: keyof typeof initialBooking, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = bookingSchema.safeParse(values)
    if (!result.success) {
      setErrors(fieldErrors(result))
      setConfirmed(false)
      return
    }
    setErrors({})
    setConfirmed(true)
  }

  return (
    <section id="booking" className="relative z-20 -mt-24 px-4">
      <div className="mx-auto max-w-5xl bg-night px-6 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.25)] sm:px-10">
        {confirmed ? (
          <div role="status" className="py-8 text-center">
            <h3 className="text-[22px] font-semibold uppercase text-white">Booking received</h3>
            <p className="mt-3 text-[14px] text-white/80">
              Thank you! Your room request has been received — our team will confirm shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 className="text-center text-[24px] font-semibold uppercase leading-[30px] text-white">
              {BOOKING_TITLE}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:items-end">
              <div className="lg:col-span-1">
                <label htmlFor="arrival" className="mb-2 block text-[13px] text-white/80">
                  Arrival Date
                </label>
                <div className="flex items-center gap-2 border-b border-white/25 pb-2">
                  <Calendar className="h-4 w-4 text-white/60" aria-hidden="true" />
                  <input
                    id="arrival"
                    type="date"
                    value={values.arrival}
                    onChange={(event) => handleChange('arrival', event.target.value)}
                    aria-invalid={errors.arrival ? true : undefined}
                    className="w-full bg-transparent text-[14px] text-white outline-none [color-scheme:dark]"
                  />
                </div>
                {errors.arrival && (
                  <p className="mt-1 text-[12px] text-red-400">{errors.arrival}</p>
                )}
              </div>

              <div className="lg:col-span-1">
                <label htmlFor="departure" className="mb-2 block text-[13px] text-white/80">
                  Departure Date
                </label>
                <div className="flex items-center gap-2 border-b border-white/25 pb-2">
                  <Calendar className="h-4 w-4 text-white/60" aria-hidden="true" />
                  <input
                    id="departure"
                    type="date"
                    value={values.departure}
                    onChange={(event) => handleChange('departure', event.target.value)}
                    aria-invalid={errors.departure ? true : undefined}
                    className="w-full bg-transparent text-[14px] text-white outline-none [color-scheme:dark]"
                  />
                </div>
                {errors.departure && (
                  <p className="mt-1 text-[12px] text-red-400">{errors.departure}</p>
                )}
              </div>

              <div>
                <label htmlFor="adults" className="mb-2 block text-[13px] text-white/80">
                  Adult
                </label>
                <select
                  id="adults"
                  value={values.adults}
                  onChange={(event) => handleChange('adults', event.target.value)}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-[14px] text-white outline-none [&>option]:text-ink"
                >
                  <option value="" disabled>
                    Adult
                  </option>
                  {ADULT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="child" className="mb-2 block text-[13px] text-white/80">
                  Child
                </label>
                <select
                  id="child"
                  value={values.child}
                  onChange={(event) => handleChange('child', event.target.value)}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-[14px] text-white outline-none [&>option]:text-ink"
                >
                  <option value="" disabled>
                    Child
                  </option>
                  {CHILD_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="rooms" className="mb-2 block text-[13px] text-white/80">
                  Number of Rooms
                </label>
                <select
                  id="rooms"
                  value={values.rooms}
                  onChange={(event) => handleChange('rooms', event.target.value)}
                  className="w-full border-b border-white/25 bg-transparent pb-2 text-[14px] text-white outline-none [&>option]:text-ink"
                >
                  <option value="" disabled>
                    Number of Rooms
                  </option>
                  {ROOM_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-brand px-5 py-[14px] text-[14px] font-medium uppercase text-ink transition-colors hover:bg-brand-dark"
            >
              Book Now
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
