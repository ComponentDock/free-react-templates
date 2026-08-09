import { useState, type FormEvent } from 'react'
import { CalendarCheck, CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

interface FormErrors {
  name?: string
  email?: string
  phone?: string
}

const inputClasses =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

export function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    if (!name.trim()) {
      nextErrors.name = 'Name is required.'
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = 'A valid email address is required.'
    }
    if (!phone.trim()) {
      nextErrors.phone = 'A phone number is required.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="booking"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
              Make an Appointment
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-400">
              Ready for a fresh look? Tell us when you would like to visit and our reception team
              will confirm your appointment within one business day.
            </p>
            <p className="mt-8 flex items-center gap-3 font-display text-xl font-semibold uppercase tracking-wide text-brand">
              <Phone className="h-6 w-6" aria-hidden="true" />
              Call Us: 012-3456-7890
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Appointment requested!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Thanks, {name}! Our team will call you back shortly to confirm your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Jane Smith"
                      aria-invalid={Boolean(errors.name)}
                      className={inputClasses}
                    />
                    {errors.name ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="jane@example.com"
                      aria-invalid={Boolean(errors.email)}
                      className={inputClasses}
                    />
                    {errors.email ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="booking-phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(555) 123-4567"
                      aria-invalid={Boolean(errors.phone)}
                      className={inputClasses}
                    />
                    {errors.phone ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-8 w-full rounded-full bg-primary-600 hover:bg-primary-700"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
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
