import { useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(555) 234-5678'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['sales@dealflow.app'],
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['350 Market Street', 'San Francisco, CA 94105'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon - Fri: 8:00 AM - 6:00 PM PST', 'Sat - Sun: Closed'],
  },
] as const

const teamSizes = ['1-5 users', '6-20 users', '21-50 users', '51-100 users', '100+ users'] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [teamSize, setTeamSize] = useState('')
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
      nextErrors.email = 'A valid work email is required.'
    }
    if (!message.trim()) {
      nextErrors.message = 'Please tell us how we can help.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const inputClasses =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white'

  return (
    <section
      id="contact"
      className="border-y border-gray-200 bg-gray-50 py-20 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Talk to Our Sales Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ready to transform your sales process? Fill out the form and our team will reach out
            within 24 hours to schedule a personalized demo.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Request received!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Thanks, {name}! Our team will reach out within 24 hours to schedule your
                  personalized demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Jane Smith"
                      aria-invalid={Boolean(errors.name)}
                      className={inputClasses}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Work Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="jane@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className={inputClasses}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
                      htmlFor="contact-team-size"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Team Size
                    </label>
                    <select
                      id="contact-team-size"
                      value={teamSize}
                      onChange={(event) => setTeamSize(event.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your sales process and what you are looking for."
                      aria-invalid={Boolean(errors.message)}
                      className={inputClasses}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-8 w-full rounded-full sm:w-auto">
                  Request Demo
                </Button>
              </form>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600/10 text-primary-600 dark:bg-primary-600/20 dark:text-primary-400">
                  <card.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
