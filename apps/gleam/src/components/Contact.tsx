import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  'Regular Cleaning',
  'Deep Cleaning',
  'Move-In/Out Cleaning',
  'Commercial Cleaning',
  'Post-Construction',
  'Green Cleaning',
  'Other',
] as const

const infoCards = [
  {
    title: 'Visit Us',
    Icon: MapPin,
    lines: ['456 Clean Street', 'Portland, OR 97201'],
  },
  {
    title: 'Call Us',
    Icon: Phone,
    lines: ['(555) 867-5309'],
  },
  {
    title: 'Email Us',
    Icon: Mail,
    lines: ['hello@gleamclean.com'],
  },
  {
    title: 'Office Hours',
    Icon: Clock,
    lines: [
      'Monday - Friday',
      '7:00 AM - 7:00 PM',
      'Saturday',
      '8:00 AM - 5:00 PM',
      'Sunday',
      '10:00 AM - 4:00 PM',
    ],
  },
] as const

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            Contact
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Ready for a cleaner space? Book your cleaning or ask us a question.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="full-name"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service-needed"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service-needed"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="preferred-date"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="preferred-date"
                    name="preferredDate"
                    type="date"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your cleaning needs..."
                    className="mt-1.5 w-full resize-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
              >
                Request Cleaning
              </button>
              {submitted && (
                <p
                  role="status"
                  className="mt-4 text-sm font-semibold text-primary-600 dark:text-primary-400"
                >
                  Thanks! We&rsquo;ll be in touch within 24 hours.
                </p>
              )}
            </form>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map(({ title, Icon, lines }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-gray-900 dark:text-white">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
              Interactive map coming soon
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
