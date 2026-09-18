import { useState } from 'react'
import type { FormEvent } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <section
      id="contact"
      className="relative bg-ink bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/pressline-contact/1600/800')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Info */}
          <div className="text-white">
            <h2 className="font-display text-3xl font-bold">Send a Message &amp; Get in Touch!</h2>
            <p className="mt-4 max-w-md leading-relaxed text-gray-200">
              Have a question or want to work together? Drop us a line and we&apos;ll get back to
              you as soon as possible.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <MapPin className="h-5 w-5 text-primary-300" aria-hidden="true" />
                <span>123 Publishing Lane, Bookville, BK 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Phone className="h-5 w-5 text-primary-300" aria-hidden="true" />
                <a href="tel:+1234567890" className="hover:text-primary-300">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Mail className="h-5 w-5 text-primary-300" aria-hidden="true" />
                <a href="mailto:info@pressline.dev" className="hover:text-primary-300">
                  info@pressline.dev
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="contact-name" className="sr-only">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <label htmlFor="contact-email" className="sr-only">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
            <label htmlFor="contact-subject" className="sr-only">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
