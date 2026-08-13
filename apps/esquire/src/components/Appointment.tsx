import { useState, type ChangeEvent, type FormEvent } from 'react'
import { z } from 'zod'
import { Calendar, CheckCircle2, Scale } from 'lucide-react'
import { APPOINTMENT_COPY, APPOINTMENT_IMAGE, APPOINTMENT_TITLE } from '../data'

const appointmentSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email'),
  phone: z.string().trim().min(1, 'Phone is required'),
  date: z.string().min(1, 'Date is required'),
  message: z.string().trim().min(1, 'Message is required'),
})

type AppointmentValues = z.infer<typeof appointmentSchema>

const initialValues: AppointmentValues = {
  name: '',
  email: '',
  phone: '',
  date: '',
  message: '',
}

const PLACEHOLDERS: Record<keyof AppointmentValues, string> = {
  name: 'Your Name',
  email: 'Your Email',
  phone: 'Phone no.',
  date: 'Appointment date',
  message: 'Message',
}

const FIELD_LABELS: Record<keyof AppointmentValues, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  date: 'Date',
  message: 'Message',
}

/**
 * Appointment — "Make an Appointment" section (source `.appointment_area`):
 * a photo column on the left (desktop) and, on the right, a faint
 * balance-scale watermark, the serif heading, an ipsum paragraph and a
 * border-bottom-only form (Your Name, Your Email, Phone no., Appointment
 * date, Message). The full-width solid-gold "Submit" button validates with
 * zod, shows per-field errors and swaps the form for a success message.
 */
export function Appointment() {
  const [values, setValues] = useState<AppointmentValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentValues, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof AppointmentValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }))
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = appointmentSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        date: fieldErrors.date?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="bg-paper py-24 lg:pt-[150px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className="hidden lg:col-span-5 lg:block">
          <img
            src={APPOINTMENT_IMAGE}
            alt="Consultation room"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <Scale
            className="pointer-events-none absolute -top-10 right-0 hidden h-40 w-40 text-ink opacity-[0.04] lg:block"
            aria-hidden="true"
          />
          <h3 className="font-heading text-[32px] leading-[48px] font-normal text-ink lg:text-[38px]">
            {APPOINTMENT_TITLE}
          </h3>
          <p className="mt-3 mb-8 max-w-lg text-base leading-relaxed text-section-sub">
            {APPOINTMENT_COPY}
          </p>

          {submitted ? (
            <div role="status" className="flex items-start gap-3 rounded-md bg-warm p-6">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <p className="text-base text-ink">
                Thank you, {values.name}! Your appointment request has been received — we will
                confirm by email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 sm:grid-cols-2">
              {(['name', 'email', 'phone', 'date'] as const).map((field) => (
                <div key={field}>
                  <label htmlFor={`appointment-${field}`} className="sr-only">
                    {FIELD_LABELS[field]}
                  </label>
                  <div className="relative">
                    <input
                      id={`appointment-${field}`}
                      type={field === 'email' ? 'email' : field === 'date' ? 'date' : 'text'}
                      placeholder={PLACEHOLDERS[field]}
                      value={values[field]}
                      onChange={handleChange(field)}
                      aria-invalid={errors[field] ? true : undefined}
                      aria-describedby={errors[field] ? `appointment-${field}-error` : undefined}
                      className="mb-6 h-10 w-full border-0 border-b border-hero-sub bg-transparent pb-2 text-base text-ink outline-none transition-colors placeholder:text-placeholder focus:border-brand"
                    />
                    {field === 'date' && (
                      <Calendar
                        className="pointer-events-none absolute right-0 bottom-4 h-5 w-5 text-placeholder"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  {errors[field] && (
                    <p
                      id={`appointment-${field}-error`}
                      role="alert"
                      className="-mt-4 mb-4 text-sm text-brand"
                    >
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="appointment-message" className="sr-only">
                  {FIELD_LABELS.message}
                </label>
                <textarea
                  id="appointment-message"
                  placeholder={PLACEHOLDERS.message}
                  value={values.message}
                  onChange={handleChange('message')}
                  rows={4}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? 'appointment-message-error' : undefined}
                  className="mb-6 h-28 w-full resize-none border-0 border-b border-hero-sub bg-transparent pb-2 text-base text-ink outline-none transition-colors placeholder:text-placeholder focus:border-brand"
                />
                {errors.message && (
                  <p
                    id="appointment-message-error"
                    role="alert"
                    className="-mt-4 mb-4 text-sm text-brand"
                  >
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-brand px-11 py-4 text-base font-semibold text-paper transition-colors hover:bg-brand-dark"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
