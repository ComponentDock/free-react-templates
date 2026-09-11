import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !EMAIL_PATTERN.test(email.trim()) || !subject.trim() || !message.trim()) {
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Contact Us</h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
            {submitted ? (
              <p className="mt-8 rounded-lg border border-brand/40 bg-brand/10 px-6 py-4 text-brand">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-ink dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-divider bg-paper px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-ink dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-divider bg-paper px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-ink dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="mt-2 w-full rounded-lg border border-divider bg-paper px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-ink dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-divider bg-paper px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-brand to-brand-light px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand hover:ring-2 hover:ring-brand"
                >
                  Send Now
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-ink dark:text-white">Address</p>
                  <p className="mt-1 text-sm text-mist">160 Link Road, Dhaka-1216</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-ink dark:text-white">Phone</p>
                  <p className="mt-1 text-sm text-mist">+880 1712 345 678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-bold text-ink dark:text-white">Email</p>
                  <p className="mt-1 text-sm text-mist">info@acumen.com</p>
                </div>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="h-64 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800">
              <img
                src="https://picsum.photos/seed/acumen-map/600/300"
                alt="Map placeholder"
                className="h-full w-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
