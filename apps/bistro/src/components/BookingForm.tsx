import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { CalendarDays, Clock, Users } from 'lucide-react'

type BookingValues = {
  name: string
  email: string
  date: string
  time: string
  persons: string
}

type BookingErrors = Partial<Record<keyof BookingValues, string>>

const EMPTY_VALUES: BookingValues = { name: '', email: '', date: '', time: '', persons: '1' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: BookingValues): BookingErrors {
  const errors: BookingErrors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = 'Enter a valid email'
  if (!values.date) errors.date = 'Date is required'
  if (!values.time) errors.time = 'Time is required'
  return errors
}

const FIELD_LABELS = {
  name: 'Your name',
  email: 'Email address',
  date: 'Date',
  time: 'Time',
  persons: 'Persons',
} as const

/**
 * BookingForm — "Book A Table" reservation section on a photo backdrop (source
 * `.booking-area`): name/email inputs, date/time pickers (native inputs
 * recreating the gijgo pickers), person select 1–4 and a solid orange
 * "Book Now" button. Presentational: inline validation only, no backend.
 */
export function BookingForm() {
  const [values, setValues] = useState<BookingValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<BookingErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof BookingValues) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className="relative py-24 lg:py-[120px] lg:pb-[130px]">
        <img
          src="https://picsum.photos/seed/bistro-bg-booking/1920/900"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <span className="text-base font-medium text-brand">About Our Restaurant</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white lg:text-[49px]">
            Book A Table
          </h2>
          <p role="status" className="mt-8 rounded-md bg-white p-8 text-lg font-medium text-ink">
            Your table request has been received — we will confirm by email.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="relative py-24 lg:py-[120px] lg:pb-[130px]">
      <img
        src="https://picsum.photos/seed/bistro-bg-booking/1920/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-base font-medium text-brand">About Our Restaurant</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white lg:text-[49px]">
            Book A Table
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 rounded-md bg-white p-6 shadow-xl lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="mb-1.5 block text-sm font-medium text-ink">
                {FIELD_LABELS.name}
              </label>
              <input
                id="booking-name"
                value={values.name}
                onChange={handleChange('name')}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'booking-name-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.name && (
                <p id="booking-name-error" role="alert" className="mt-1.5 text-sm text-brand-dark">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="booking-email" className="mb-1.5 block text-sm font-medium text-ink">
                {FIELD_LABELS.email}
              </label>
              <input
                id="booking-email"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? 'booking-email-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-ink outline-none transition-colors focus:border-brand"
              />
              {errors.email && (
                <p id="booking-email-error" role="alert" className="mt-1.5 text-sm text-brand-dark">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="booking-date" className="mb-1.5 block text-sm font-medium text-ink">
                {FIELD_LABELS.date}
              </label>
              <div className="relative">
                <CalendarDays
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-meta"
                  aria-hidden="true"
                />
                <input
                  id="booking-date"
                  type="date"
                  value={values.date}
                  onChange={handleChange('date')}
                  aria-invalid={errors.date ? true : undefined}
                  aria-describedby={errors.date ? 'booking-date-error' : undefined}
                  className="h-12 w-full rounded-md border border-gray-200 pl-11 pr-4 text-ink outline-none transition-colors focus:border-brand"
                />
              </div>
              {errors.date && (
                <p id="booking-date-error" role="alert" className="mt-1.5 text-sm text-brand-dark">
                  {errors.date}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="booking-time" className="mb-1.5 block text-sm font-medium text-ink">
                {FIELD_LABELS.time}
              </label>
              <div className="relative">
                <Clock
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-meta"
                  aria-hidden="true"
                />
                <input
                  id="booking-time"
                  type="time"
                  value={values.time}
                  onChange={handleChange('time')}
                  aria-invalid={errors.time ? true : undefined}
                  aria-describedby={errors.time ? 'booking-time-error' : undefined}
                  className="h-12 w-full rounded-md border border-gray-200 pl-11 pr-4 text-ink outline-none transition-colors focus:border-brand"
                />
              </div>
              {errors.time && (
                <p id="booking-time-error" role="alert" className="mt-1.5 text-sm text-brand-dark">
                  {errors.time}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="booking-persons"
                className="mb-1.5 block text-sm font-medium text-ink"
              >
                {FIELD_LABELS.persons}
              </label>
              <div className="relative">
                <Users
                  className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-meta"
                  aria-hidden="true"
                />
                <select
                  id="booking-persons"
                  value={values.persons}
                  onChange={handleChange('persons')}
                  className="h-12 w-full appearance-none rounded-md border border-gray-200 pl-11 pr-4 text-ink outline-none transition-colors focus:border-brand"
                >
                  {[1, 2, 3, 4].map((person) => (
                    <option key={person} value={person}>
                      {person} {person > 1 ? 'Persons' : 'Person'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="mt-8 rounded-md bg-brand px-10 py-4 text-base hover:bg-brand-dark"
          >
            Book Now
          </Button>
        </form>
      </div>
    </section>
  )
}
