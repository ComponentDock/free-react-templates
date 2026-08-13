import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

interface Errors {
  name?: string
  email?: string
}

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const hours = [
  { day: 'Monday-Friday', time: '08.00 am - 10.00 pm' },
  { day: 'Saturday', time: '08.00 am - 10.00 pm' },
  { day: 'Sunday', time: '08.00 am - 10.00 pm' },
] as const

/** Two-part appointment band: service hours + validated booking form. */
export function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Errors = {
      name: name.trim() ? undefined : 'Patient name is required.',
      email: EMAIL_PATTERN.test(email) ? undefined : 'A valid email address is required.',
    }
    if (nextErrors.name || nextErrors.email) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  const inputClasses =
    'h-[52px] w-full rounded-none border border-border-form bg-white px-4 text-sm font-light text-ink-900 placeholder:text-mute-500 focus:border-primary-500 focus:outline-none'

  return (
    <section id="appointment" className="bg-band-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-ink-900">Servicing Hours</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-mute-500">
            Our doors are open seven days a week so that quality care is never more than a phone
            call away.
          </p>
          <ul className="mt-10">
            {hours.map(({ day, time }) => (
              <li
                key={day}
                className="flex items-center justify-between border-b border-line-200 py-5 text-sm text-ink-900"
              >
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-8 shadow-[0px_10px_20px_0px_rgba(153,153,153,0.1)] sm:p-10">
          <h3 className="text-2xl font-bold text-ink-900">Book an Appointment</h3>
          {submitted ? (
            <p role="status" className="mt-8 rounded-md bg-primary-50 p-5 text-sm text-primary-800">
              Your appointment request has been confirmed. Our team will call you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5">
              <div>
                <label htmlFor="disease" className="sr-only">
                  Disease Type
                </label>
                <select id="disease" name="disease" className={inputClasses} defaultValue="">
                  <option value="" disabled>
                    Disease Type
                  </option>
                  <option value="type-one">Type One</option>
                  <option value="type-two">Type Two</option>
                  <option value="type-three">Type Three</option>
                  <option value="type-four">Type Four</option>
                </select>
              </div>
              <div>
                <label htmlFor="patient-name" className="sr-only">
                  Patient Name
                </label>
                <input
                  id="patient-name"
                  type="text"
                  placeholder="Patient Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={inputClasses}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input id="phone" type="tel" placeholder="Phone" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClasses}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="dob" className="sr-only">
                    Date of Birth
                  </label>
                  <input id="dob" type="date" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="appointment-date" className="sr-only">
                    Appointment Date
                  </label>
                  <input id="appointment-date" type="date" className={inputClasses} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full rounded-none border border-border-form bg-white px-4 py-3 text-sm font-light text-ink-900 placeholder:text-mute-500 focus:border-primary-500 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="h-[52px] w-full rounded-none bg-primary-500 text-sm font-medium tracking-wide text-white uppercase hover:bg-primary-600"
              >
                Confirm Booking
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
