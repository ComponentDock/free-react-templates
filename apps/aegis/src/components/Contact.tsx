import { useState, type FormEvent } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const projectTypes = [
  'EDR Deployment',
  'Cloud Security',
  'Incident Response',
  'Compliance',
  'Other',
] as const

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
  const [projectType, setProjectType] = useState('')
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
      nextErrors.message = 'Please describe your security needs.'
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
            Get In Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Talk to a Security Expert
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Ready to strengthen your security posture? Our team of cybersecurity experts is
            available 24/7 to assess your needs and recommend the right protection.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Message sent!
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Thanks, {name}! A security expert will contact you within one business day.
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
                      htmlFor="contact-project-type"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={projectType}
                      onChange={(event) => setProjectType(event.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((type) => (
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
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us about your security requirements..."
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
                  className="mt-8 w-full rounded-full bg-primary-600 hover:bg-primary-700 sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
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
                    href="tel:+1555678901"
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
                    href="mailto:security@aegis.io"
                    className="font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300"
                  >
                    security@aegis.io
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    1200 Cyber Defense Blvd
                    <span className="block text-gray-500 dark:text-gray-400">
                      Washington, DC 20001
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    Mon - Fri: 7:00 AM - 6:00 PM
                    <span className="block text-gray-500 dark:text-gray-400">
                      Sat: 8:00 AM - 2:00 PM
                    </span>
                    <span className="block text-gray-500 dark:text-gray-400">Sun: Closed</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
              <iframe
                title="Aegis office location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-77.05%2C38.88%2C-76.95%2C38.92&amp;layer=mapnik&amp;marker=38.9047%2C-77.0164"
                className="h-64 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
