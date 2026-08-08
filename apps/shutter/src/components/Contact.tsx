import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const sessionTypes = ['Portrait Session', 'Wedding Coverage', 'Commercial', 'Other']

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sessionType, setSessionType] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!sessionType) nextErrors.sessionType = 'Please select a session type.'
    if (!date) nextErrors.date = 'Please choose a preferred date.'
    if (!message.trim()) nextErrors.message = 'Please enter a message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  const inputClasses =
    'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400'

  return (
    <section id="contact" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Let&apos;s Create Together
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Ready to tell your story? Reach out and let us discuss how we can create something
            beautiful together.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Side panel */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="font-serif text-xl font-semibold text-gray-900 dark:text-white">
                Contact Details
              </h3>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Call</p>
                    <a
                      href="tel:+15551234567"
                      className="mt-0.5 block text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                    <a
                      href="mailto:hello@shutter.photo"
                      className="mt-0.5 block text-sm text-gray-600 transition-colors hover:text-accent-600 dark:text-gray-400"
                    >
                      hello@shutter.photo
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Studio</p>
                    <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                      128 Hudson Street, New York, NY
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink
                  href="tel:+15551234567"
                  variant="outline"
                  className="w-full rounded-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </ButtonLink>
                <ButtonLink
                  href="#contact"
                  className="w-full rounded-full bg-accent-500 hover:bg-accent-600"
                >
                  Book a Session
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div
              role="status"
              className="flex flex-col items-center justify-center rounded-2xl border border-accent-200 bg-accent-50 p-10 text-center lg:col-span-3 dark:border-accent-800 dark:bg-accent-900/20"
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Inquiry sent successfully!
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thank you, {name}. We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-session-type"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Session Type
                  </label>
                  <select
                    id="contact-session-type"
                    value={sessionType}
                    onChange={(e) => setSessionType(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select a session type</option>
                    {sessionTypes.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.sessionType && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.sessionType}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-date"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClasses}
                  />
                  {errors.date && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={inputClasses}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className="mt-8 w-full rounded-full bg-accent-500 py-4 hover:bg-accent-600 sm:w-auto sm:px-10"
              >
                Send Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
