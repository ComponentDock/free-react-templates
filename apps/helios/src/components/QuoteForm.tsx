import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const services = ['Residential Solar', 'Commercial Solar', 'Battery Storage', 'Other'] as const

interface FormState {
  name: string
  email: string
  service: string
  message: string
}

const initialState: FormState = { name: '', email: '', service: services[0]!, message: '' }

type FieldName = keyof FormState

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const setField = (field: FieldName, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const validate = (values: FormState): Partial<Record<FieldName, string>> => {
    const next: Partial<Record<FieldName, string>> = {}
    if (!values.name.trim()) {
      next.name = 'Please enter your name.'
    }
    if (!EMAIL_RE.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) {
      next.message = 'Please tell us a little about your project.'
    }
    return next
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                Contact
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Get Your Free Quote
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Tell us about your property and energy goals — a Helios advisor will reach out
                within one business day with a custom estimate.
              </p>

              {submitted ? (
                <p
                  role="status"
                  className="mt-8 rounded-2xl border border-primary-200 bg-primary-50 px-6 py-5 font-medium text-primary-800 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-200"
                >
                  Thank you, {form.name.trim()}! Your request has been received — we&apos;ll get
                  back to you within one business day.
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="quote-name"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        value={form.name}
                        onChange={(event) => setField('name', event.target.value)}
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? 'quote-name-error' : undefined}
                        placeholder="Jane Smith"
                        className="mt-1.5 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                      {errors.name && (
                        <p
                          id="quote-name-error"
                          role="alert"
                          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        value={form.email}
                        onChange={(event) => setField('email', event.target.value)}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'quote-email-error' : undefined}
                        placeholder="jane@example.com"
                        className="mt-1.5 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      />
                      {errors.email && (
                        <p
                          id="quote-email-error"
                          role="alert"
                          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="quote-service"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Service
                    </label>
                    <select
                      id="quote-service"
                      value={form.service}
                      onChange={(event) => setField('service', event.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm font-medium text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="quote-message"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="quote-message"
                      value={form.message}
                      onChange={(event) => setField('message', event.target.value)}
                      aria-invalid={errors.message ? true : undefined}
                      aria-describedby={errors.message ? 'quote-message-error' : undefined}
                      placeholder="Tell us about your home or business…"
                      rows={4}
                      className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                    {errors.message && (
                      <p
                        id="quote-message-error"
                        role="alert"
                        className="mt-1.5 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className={cn('mt-6 w-full px-8 py-3 text-base font-semibold sm:w-auto')}
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Submit Request
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Office Hours</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Monday – Friday: 8:00 AM – 6:00 PM
                <br />
                Saturday: 9:00 AM – 2:00 PM
                <br />
                Sunday: Closed
              </p>
              <ul className="mt-6 flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  890 Solar Way, Austin, TX 78701
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+15557632748"
                    className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    (555) 763-2748
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:hello@heliosenergy.com"
                    className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    hello@heliosenergy.com
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-2 rounded-xl bg-primary-50 px-4 py-3 text-sm font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-200">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                Average response time: under 4 hours
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
