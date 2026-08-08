import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Button } from '@free-react-templates/ui'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(5, 'Please enter a valid phone number'),
  department: z.string().min(1, 'Please choose a department'),
  message: z.string().min(5, 'Please enter a message'),
})

const departments = [
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Neurology',
  'Dental Care',
  'Emergency',
] as const

type AppointmentValues = z.infer<typeof appointmentSchema>

const initialValues: AppointmentValues = {
  name: '',
  email: '',
  phone: '',
  department: '',
  message: '',
}

export function Appointment() {
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
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        department: fieldErrors.department?.[0],
        message: fieldErrors.message?.[0],
      })
      return
    }
    setConfirmation(
      `Thank you, ${result.data.name}. We will contact you shortly to confirm your appointment.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="appointment" aria-label="Appointment" className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">Request an Appointment</h2>
          <p className="mt-3 text-sm text-mist">
            Fill in the form and our team will confirm your visit within one business day.
          </p>
          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
            <div>
              <label htmlFor="md-name" className="sr-only">
                Name
              </label>
              <input
                id="md-name"
                type="text"
                placeholder="Name"
                value={values.name}
                onChange={(event) => handleChange('name', event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'md-name-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none"
              />
              {errors.name && (
                <p id="md-name-error" className="mt-1 text-xs text-brand-dark">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="md-email" className="sr-only">
                Email
              </label>
              <input
                id="md-email"
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={(event) => handleChange('email', event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'md-email-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none"
              />
              {errors.email && (
                <p id="md-email-error" className="mt-1 text-xs text-brand-dark">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="md-phone" className="sr-only">
                Phone
              </label>
              <input
                id="md-phone"
                type="tel"
                placeholder="Phone"
                value={values.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'md-phone-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none"
              />
              {errors.phone && (
                <p id="md-phone-error" className="mt-1 text-xs text-brand-dark">
                  {errors.phone}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="md-department" className="sr-only">
                Department
              </label>
              <select
                id="md-department"
                value={values.department}
                onChange={(event) => handleChange('department', event.target.value)}
                aria-invalid={Boolean(errors.department)}
                aria-describedby={errors.department ? 'md-department-error' : undefined}
                className="h-12 w-full rounded-md border border-gray-200 px-4 text-sm text-ink focus:border-brand focus:outline-none"
              >
                <option value="">Select Department</option>
                {departments.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p id="md-department-error" className="mt-1 text-xs text-brand-dark">
                  {errors.department}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="md-message" className="sr-only">
                Message
              </label>
              <textarea
                id="md-message"
                placeholder="Message"
                rows={4}
                value={values.message}
                onChange={(event) => handleChange('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'md-message-error' : undefined}
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none"
              />
              {errors.message && (
                <p id="md-message-error" className="mt-1 text-xs text-brand-dark">
                  {errors.message}
                </p>
              )}
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
              Request Appointment
            </Button>
            {confirmation && (
              <p role="status" className="text-sm font-semibold text-brand">
                {confirmation}
              </p>
            )}
          </form>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold text-ink">Clinic Information</h3>
          <ul className="mt-6 space-y-5 text-sm text-body">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              123 Wellness Avenue, Medical District, Springfield
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href="tel:+15550199005" className="transition-colors hover:text-brand">
                +1 (555) 019-9005
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a href="mailto:hello@medora.clinic" className="transition-colors hover:text-brand">
                hello@medora.clinic
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              Mon–Sat: 8:00 AM – 8:00 PM · Sun: Closed
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
