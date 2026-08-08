import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const services = [
  'Classic Haircut',
  'Skin Fade',
  'Beard Trim',
  'Hot Towel Shave',
  'Hair + Beard Combo',
  'Kids Haircut',
  'Group Booking',
  'Other',
]

const contactDetails = [
  { label: 'Visit Us', value: '123 Main Street\nBrooklyn, NY 11201', icon: MapPin },
  { label: 'Call Us', value: '(555) 741-2580', icon: Phone },
  { label: 'Email Us', value: 'hello@barberkraft.com', icon: Mail },
  {
    label: 'Shop Hours',
    value: 'Mon: Closed · Tue–Fri: 9 AM – 7 PM · Sat: 8 AM – 6 PM · Sun: 10 AM – 4 PM',
    icon: Clock,
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!service) nextErrors.service = 'Please select a service.'
    if (!message.trim()) nextErrors.message = 'Please tell us what you need.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Questions, feedback, or want to book a group session? Drop us a line.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {sent ? (
              <div
                role="status"
                className="rounded-2xl border border-accent-200 bg-accent-50 p-10 text-center dark:border-accent-800 dark:bg-accent-900/30"
              >
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Thanks for reaching out!
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We'll get back to you within one business day to confirm your booking.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
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
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.service}
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
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
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
                  className="mt-6 w-full rounded-lg px-6 py-3 text-base sm:w-auto"
                >
                  Send Message <Send className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon
              return (
                <div
                  key={detail.label}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100 text-accent-600 dark:bg-accent-900/40 dark:text-accent-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{detail.label}</h3>
                    <p className="mt-1 text-sm whitespace-pre-line text-gray-600 dark:text-gray-400">
                      {detail.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </aside>
        </div>
      </div>
    </section>
  )
}
