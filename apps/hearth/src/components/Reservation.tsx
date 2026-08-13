import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { Calendar, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { RESERVATION_IMAGE } from '../data'
import { SectionHeading } from './SectionHeading'

const reservationSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().trim().min(1, 'Phone is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  person: z.string().min(1, 'Person is required'),
})

type ReservationValues = z.infer<typeof reservationSchema>

const initialValues: ReservationValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  person: '1',
}

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  date: 'Date',
  time: 'Time',
  person: 'Person',
} as const

const PLACEHOLDERS = {
  name: 'Your Name',
  email: 'Your Email',
  phone: 'Phone',
  date: 'Date',
  time: 'Time',
} as const

/**
 * Reservation — "Book a Table / Make Reservation" split section (source
 * `.makereservation`): a photo column on the left and a six-field booking
 * form on the right (Name, Email, Phone, Date, Time, Person). The form
 * validates with zod, shows per-field errors and blocks the red submit until
 * every field is valid; a confirmation replaces the form after submit.
 */
export function Reservation() {
  const [values, setValues] = useState<ReservationValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange =
    (field: keyof ReservationValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = reservationSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        date: fieldErrors.date?.[0],
        time: fieldErrors.time?.[0],
        person: fieldErrors.person?.[0],
      })
      return
    }
    setConfirmation(
      `Thank you, ${result.data.name}! Your table is reserved — we will confirm by email.`,
    )
  }

  return (
    <section id="reservation" className="bg-paper py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 lg:grid-cols-12">
        <div className="min-h-[420px] overflow-hidden lg:col-span-5">
          <img
            src={RESERVATION_IMAGE}
            alt="Hearth dining room"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <SectionHeading script="Book a Table" title="Make Reservation" />
          {confirmation ? (
            <div
              className="mt-10 flex items-start gap-3 rounded-md bg-divider/40 p-6"
              role="status"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-base text-ink">{confirmation}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2"
            >
              {(['name', 'email', 'phone'] as const).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={`reservation-${field}`}
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    {FIELD_LABELS[field]}
                  </label>
                  <input
                    id={`reservation-${field}`}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={PLACEHOLDERS[field]}
                    value={values[field]}
                    onChange={handleChange(field)}
                    aria-invalid={errors[field] ? true : undefined}
                    aria-describedby={errors[field] ? `reservation-${field}-error` : undefined}
                    className="w-full border-b border-divider bg-transparent py-2.5 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
                  />
                  {errors[field] && (
                    <p
                      id={`reservation-${field}-error`}
                      role="alert"
                      className="mt-1.5 text-sm text-brand"
                    >
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
              <div className="relative">
                <label
                  htmlFor="reservation-date"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  {FIELD_LABELS.date}
                </label>
                <input
                  id="reservation-date"
                  type="text"
                  placeholder={PLACEHOLDERS.date}
                  value={values.date}
                  onChange={handleChange('date')}
                  aria-invalid={errors.date ? true : undefined}
                  aria-describedby={errors.date ? 'reservation-date-error' : undefined}
                  className="w-full border-b border-divider bg-transparent py-2.5 pr-9 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
                />
                <Calendar
                  className="pointer-events-none absolute bottom-3 right-0 h-5 w-5 text-ink/70"
                  aria-hidden="true"
                />
                {errors.date && (
                  <p id="reservation-date-error" role="alert" className="mt-1.5 text-sm text-brand">
                    {errors.date}
                  </p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="reservation-time"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  {FIELD_LABELS.time}
                </label>
                <input
                  id="reservation-time"
                  type="text"
                  placeholder={PLACEHOLDERS.time}
                  value={values.time}
                  onChange={handleChange('time')}
                  aria-invalid={errors.time ? true : undefined}
                  aria-describedby={errors.time ? 'reservation-time-error' : undefined}
                  className="w-full border-b border-divider bg-transparent py-2.5 pr-9 text-base text-ink outline-none transition-colors placeholder:text-muted focus:border-brand"
                />
                <Clock
                  className="pointer-events-none absolute bottom-3 right-0 h-5 w-5 text-ink/70"
                  aria-hidden="true"
                />
                {errors.time && (
                  <p id="reservation-time-error" role="alert" className="mt-1.5 text-sm text-brand">
                    {errors.time}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="reservation-person"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  {FIELD_LABELS.person}
                </label>
                <select
                  id="reservation-person"
                  value={values.person}
                  onChange={handleChange('person')}
                  className="w-full border-b border-divider bg-transparent py-2.5 text-base text-ink outline-none transition-colors focus:border-brand"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="mt-2 rounded px-8 py-3">
                  Make a Reservation
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
