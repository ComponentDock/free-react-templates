import { useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, Phone, ShieldCheck } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactTypes = ['Auto', 'Home', 'Life', 'Health', 'Business', 'Umbrella', 'Other'] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const inputClasses =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [coverage, setCoverage] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    if (!name.trim()) {
      nextErrors.name = 'Full name is required.'
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = 'A valid email address is required.'
    }
    if (!message.trim()) {
      nextErrors.message = 'Please tell us about your insurance needs.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Get Started
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Request Your Free Quote
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Fill out the form below and one of our licensed advisors will get back to you within one
            business day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Request received!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Thanks, {name}! A licensed advisor will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="John Smith"
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
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="john@example.com"
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
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="(555) 123-4567"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-coverage"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Coverage Type
                    </label>
                    <select
                      id="contact-coverage"
                      value={coverage}
                      onChange={(event) => setCoverage(event.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select a coverage type</option>
                      {contactTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your insurance needs..."
                      aria-invalid={Boolean(errors.message)}
                      className={inputClasses}
                    />
                    {errors.message ? (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-8 w-full bg-accent-600 hover:bg-accent-700 sm:w-auto"
                >
                  Request Free Quote
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+15555678901"
                    className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300"
                  >
                    (555) 567-8901
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:info@shieldguard.com"
                    className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300"
                  >
                    info@shieldguard.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Mon-Fri 8am-6pm
                    <span className="block text-gray-500 dark:text-gray-400">Sat 9am-1pm</span>
                  </span>
                </li>
              </ul>
              <p className="mt-6 flex items-center gap-2 rounded-lg bg-accent-100 px-3 py-2 text-sm font-medium text-accent-700 dark:bg-accent-900/50 dark:text-accent-300">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Licensed in All 50 States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
