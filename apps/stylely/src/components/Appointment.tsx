import { useState, type FormEvent } from 'react'
import { CalendarCheck, CheckCircle2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const services = ['Stylish Hair Cut', 'Wedding Hair', 'Color & Hair Wash'] as const

const timeSlots = [
  '8 AM TO 10AM',
  '10 AM TO 12PM',
  '12PM TO 2PM',
  '2PM TO 4PM',
  '4PM TO 6PM',
  '6PM TO 8PM',
  '4PM TO 10PM',
  '10PM TO 12PM',
] as const

interface FormErrors {
  name?: string
  email?: string
  service?: string
  phone?: string
  time?: string
}

const inputClasses =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

export function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [note, setNote] = useState('')
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
    if (!service) {
      nextErrors.service = 'Please choose a service.'
    }
    if (!phone.trim()) {
      nextErrors.phone = 'A phone number is required.'
    }
    if (!time) {
      nextErrors.time = 'Please choose a time slot.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="appointment"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Make an Appointment
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-mist dark:text-gray-400">
            Tell us which service you need and when you would like to visit — our team will confirm
            your booking shortly.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="appointment-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name *
                  </label>
                  <input
                    id="appointment-name"
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
                    htmlFor="appointment-email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email address *
                  </label>
                  <input
                    id="appointment-email"
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

                <div>
                  <label
                    htmlFor="appointment-service"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Select service *
                  </label>
                  <select
                    id="appointment-service"
                    value={service}
                    onChange={(event) => setService(event.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    className={inputClasses}
                  >
                    <option value="">Select service</option>
                    {services.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.service}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="appointment-phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone number *
                  </label>
                  <input
                    id="appointment-phone"
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

                <div>
                  <label
                    htmlFor="appointment-date"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Date *
                  </label>
                  <input
                    id="appointment-date"
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointment-time"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Select time *
                  </label>
                  <select
                    id="appointment-time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    aria-invalid={Boolean(errors.time)}
                    className={inputClasses}
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.time ? (
                    <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                      {errors.time}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2 lg:col-span-3">
                  <label
                    htmlFor="appointment-note"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Note *
                  </label>
                  <textarea
                    id="appointment-note"
                    rows={3}
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    placeholder="Anything we should know before your visit?"
                    className={inputClasses}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-8 w-full rounded-full bg-primary-600 hover:bg-primary-700 sm:w-auto"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Make an Appointment
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
