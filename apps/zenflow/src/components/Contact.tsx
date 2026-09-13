import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-section-gray py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Contact Us
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary-400" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                  Address
                </h3>
                <p className="mt-1 text-body">123 Business Street, Suite 100, New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-primary-400" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                  Phone
                </h3>
                <p className="mt-1 text-body">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-primary-400" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-ink">
                  Email
                </h3>
                <p className="mt-1 text-body">info@zenflow.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
            </div>
            <label htmlFor="contact-subject" className="sr-only">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              className="w-full resize-none border border-gray-300 bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="w-full bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
