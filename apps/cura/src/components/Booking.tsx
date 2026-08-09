import { useState, type FormEvent } from 'react'
import { z } from 'zod'
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'

const bookingSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  department: z.string().min(1, 'Please choose a department'),
  date: z.string().optional(),
  message: z.string().optional(),
})

type BookingValues = z.infer<typeof bookingSchema>

const initialValues: BookingValues = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  date: '',
  message: '',
}

const departments = [
  'General Medicine',
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Neurology',
  'Dermatology',
] as const

const assurances = [
  'No referral needed for most specialties',
  'Confirmation within 24 hours',
  'Free rescheduling up to 4 hours before',
] as const

export function Booking() {
  const [values, setValues] = useState<BookingValues>(initialValues)
  const [errors, setErrors] = useState<Partial<Record<keyof BookingValues, string>>>({})
  const [confirmation, setConfirmation] = useState('')

  const handleChange = (field: keyof BookingValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = bookingSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        department: fieldErrors.department?.[0],
      })
      return
    }
    setConfirmation(
      `Thanks, ${result.data.fullName}! Our team will confirm your appointment within 24 hours.`,
    )
    setValues(initialValues)
    setErrors({})
  }

  return (
    <section id="booking" className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Book Your Appointment
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Choose your department and preferred date — our care coordinators will confirm your
              visit within 24 hours.
            </p>
            <ul className="mt-8 space-y-3">
              {assurances.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-success-500"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-primary-50 p-5 dark:bg-primary-900/40">
              <ShieldCheck
                className="h-8 w-8 shrink-0 text-primary-600 dark:text-primary-300"
                aria-hidden="true"
              />
              <p className="text-sm text-primary-900 dark:text-primary-100">
                Your information is encrypted and never shared. Cura is fully HIPAA-compliant.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {confirmation ? (
              <div className="rounded-2xl border border-success-200 bg-success-50 p-8 dark:border-success-800 dark:bg-success-900/30">
                <CheckCircle2
                  className="h-10 w-10 text-success-600 dark:text-success-400"
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
                  Appointment Request Received
                </h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{confirmation}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Full Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={values.fullName}
                      onChange={(event) => handleChange('fullName', event.target.value)}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'booking-name-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.fullName && 'border-red-400',
                      )}
                    />
                    {errors.fullName && (
                      <p id="booking-name-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Email <span className="text-accent-500">*</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      value={values.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'booking-email-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.email && 'border-red-400',
                      )}
                    />
                    {errors.email && (
                      <p id="booking-email-error" className="mt-1 text-xs font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(event) => handleChange('phone', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="booking-department"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Department <span className="text-accent-500">*</span>
                    </label>
                    <select
                      id="booking-department"
                      value={values.department}
                      onChange={(event) => handleChange('department', event.target.value)}
                      aria-invalid={Boolean(errors.department)}
                      aria-describedby={errors.department ? 'booking-department-error' : undefined}
                      className={cn(
                        'mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white',
                        errors.department && 'border-red-400',
                      )}
                    >
                      <option value="">Select a department</option>
                      {departments.map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                    </select>
                    {errors.department && (
                      <p
                        id="booking-department-error"
                        className="mt-1 text-xs font-medium text-red-600"
                      >
                        {errors.department}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      value={values.date}
                      onChange={(event) => handleChange('date', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="booking-message"
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="booking-message"
                      rows={3}
                      value={values.message}
                      onChange={(event) => handleChange('message', event.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="mt-6 w-full rounded-xl sm:w-auto">
                  Book Appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
