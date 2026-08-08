import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const contactCards = [
  { label: 'Phone', value: '1-800-SWIFT-GO', sub: 'Mon–Sun, 24 hours', icon: Phone },
  { label: 'Email', value: 'hello@freightly.com', sub: 'Replies within 2 hours', icon: Mail },
  {
    label: 'Headquarters',
    value: '1250 Logistics Way, Suite 500',
    sub: 'Chicago, IL 60601',
    icon: MapPin,
  },
  { label: 'Business Hours', value: 'Monday–Friday', sub: '8:00 AM – 6:00 PM CT', icon: Clock },
]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!message.trim()) nextErrors.message = 'Please enter a message.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  const inputClasses =
    'mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white'

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Contact Us
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Let&apos;s Discuss Your Shipping Needs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Our team is ready to build the right shipping solution for your business.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{card.label}</h3>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{card.value}</p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-950">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Send us a message</h3>
          {sent ? (
            <div
              role="status"
              className="mt-6 rounded-xl bg-gray-50 px-6 py-8 text-center dark:bg-gray-900"
            >
              <p className="font-semibold text-gray-900 dark:text-white">Message sent!</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Thank you, {name}. A logistics specialist will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
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
                    className="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us about your shipment"
                  className={inputClasses}
                />
                {errors.message && (
                  <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-colors hover:bg-primary-700 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
