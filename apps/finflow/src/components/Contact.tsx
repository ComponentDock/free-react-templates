import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const info = [
  { icon: MapPin, label: '123 Finance Street, New York, NY 10001' },
  { icon: Phone, label: '+1 (555) 123-4567' },
  { icon: Mail, label: 'info@finflow.com' },
] as const

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Contact Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mt-2 text-sm text-mist dark:text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="sm:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-brand/30 bg-brand/10 p-8 text-center">
                <p className="text-lg font-semibold text-brand">Thank you for your message!</p>
                <p className="mt-2 text-sm text-mist dark:text-gray-400">
                  We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-brand px-10 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
