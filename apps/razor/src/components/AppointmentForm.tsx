import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { CalendarDays, Clock, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const appointmentSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  phone: z.string().min(1, 'Please enter your phone number'),
})

type AppointmentValues = z.infer<typeof appointmentSchema>

const initialValues: AppointmentValues = {
  service: '',
  firstName: '',
  lastName: '',
  phone: '',
}

const serviceOptions = [
  'Hair Cut',
  'Beard Trim',
  'Hair Shampoo',
  'Clipper Cut',
  'Hair Style',
  'Face Shave',
  'Moustache Trim',
  'Other',
] as const

export function AppointmentForm() {
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
        service: fieldErrors.service?.[0],
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        phone: fieldErrors.phone?.[0],
      })
      setConfirmation('')
      return
    }
    setConfirmation(`Thanks, ${result.data.firstName}! Your appointment has been requested.`)
    setValues(initialValues)
    setErrors({})
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 lg:py-[120px]">
      <img
        src="https://picsum.photos/seed/razor-appointment/1600/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold uppercase text-white lg:text-5xl">
            Make An Appointment
          </h2>
          <p className="mt-4 text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur dark:bg-gray-950/95 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="appointment-service"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                Select Your Services
              </label>
              <select
                id="appointment-service"
                value={values.service}
                onChange={(event) => handleChange('service', event.target.value)}
                aria-invalid={Boolean(errors.service)}
                className={inputClass}
              >
                <option value="">Select Your Services</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.service}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="appointment-first-name"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                First Name
              </label>
              <input
                id="appointment-first-name"
                type="text"
                value={values.firstName}
                onChange={(event) => handleChange('firstName', event.target.value)}
                placeholder="First Name"
                aria-invalid={Boolean(errors.firstName)}
                className={inputClass}
              />
              {errors.firstName && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="appointment-last-name"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                Last Name
              </label>
              <input
                id="appointment-last-name"
                type="text"
                value={values.lastName}
                onChange={(event) => handleChange('lastName', event.target.value)}
                placeholder="Last Name"
                aria-invalid={Boolean(errors.lastName)}
                className={inputClass}
              />
              {errors.lastName && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.lastName}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="appointment-phone"
                className="mb-1.5 block text-sm font-semibold text-ink dark:text-white"
              >
                Phone
              </label>
              <input
                id="appointment-phone"
                type="tel"
                value={values.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
                placeholder="Phone"
                aria-invalid={Boolean(errors.phone)}
                className={inputClass}
              />
              {errors.phone && (
                <p className="mt-1 text-xs font-semibold text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4 text-xs text-mist dark:text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-brand" aria-hidden="true" />
                Mon – Sat: 9:00 – 20:00
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                Sunday: Closed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                +1 234 567 890
              </span>
            </div>
            <Button type="submit" size="lg" className="rounded-full uppercase">
              Make Appointment
            </Button>
          </div>
          {confirmation && (
            <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700 dark:bg-green-950 dark:text-green-400">
              {confirmation}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
