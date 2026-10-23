import { useState, type FormEvent } from 'react'
import { z } from 'zod'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email'),
  service: z.string().min(1, 'Please choose a service'),
})

const services = ['Training', 'Boarding', 'Events', 'Consultancy'] as const

const testimonials = [
  {
    name: 'Fannie Rowe',
    copy: 'Here you can find the best equestrian services for your horse — lessons, boarding, and care delivered with true passion.',
  },
  {
    name: 'Hulda Sutton',
    copy: 'Accessories and training programs that helped our whole family ride with confidence and joy.',
  },
] as const

type AppointmentValues = z.infer<typeof appointmentSchema>

const initialValues: AppointmentValues = { name: '', phone: '', email: '', service: '' }

export function Booking() {
  const [values, setValues] = useState<AppointmentValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof AppointmentValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof AppointmentValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
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
        phone: fieldErrors.phone?.[0],
        email: fieldErrors.email?.[0],
        service: fieldErrors.service?.[0],
      })
      return
    }
    setConfirmation(`Thank you, ${result.data.name}. We will contact you shortly.`)
    setValues(initialValues)
  }

  return (
    <section id="consultancy" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Appointment Form
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Book a consultancy session with our equestrian experts — we will get back to you within
            one business day.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            <div>
              <label htmlFor="hc-name" className="sr-only">
                Name
              </label>
              <input
                id="hc-name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="h-12 w-full rounded-full border border-gray-200 bg-paper px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              {errors.name && <p className="mt-1 px-4 text-xs text-brand">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="hc-phone" className="sr-only">
                Phone
              </label>
              <input
                id="hc-phone"
                type="tel"
                placeholder="Phone"
                value={values.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
                className="h-12 w-full rounded-full border border-gray-200 bg-paper px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              {errors.phone && <p className="mt-1 px-4 text-xs text-brand">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="hc-email" className="sr-only">
                Email
              </label>
              <input
                id="hc-email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={(event) => handleChange('email', event.target.value)}
                className="h-12 w-full rounded-full border border-gray-200 bg-paper px-5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              />
              {errors.email && <p className="mt-1 px-4 text-xs text-brand">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="hc-service" className="sr-only">
                Service
              </label>
              <select
                id="hc-service"
                value={values.service}
                onChange={(event) => handleChange('service', event.target.value)}
                className="h-12 w-full rounded-full border border-gray-200 bg-paper px-5 text-sm text-ink focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <p className="mt-1 px-4 text-xs text-brand">{errors.service}</p>}
            </div>
            <button
              type="submit"
              className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
            >
              Book Appointment
            </button>
            {confirmation && (
              <p role="status" className="text-sm font-medium text-brand">
                {confirmation}
              </p>
            )}
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-ink dark:text-white">What riders say</h3>
          <div className="mt-6 space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-2xl bg-paper p-8 dark:bg-gray-900"
              >
                <p className="text-sm font-light leading-relaxed text-muted dark:text-gray-400">
                  {testimonial.copy}
                </p>
                <div className="mt-4">
                  <h4 className="text-base font-semibold text-ink dark:text-white">
                    {testimonial.name}
                  </h4>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
