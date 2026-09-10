import { useState } from 'react'
import type { FormEvent } from 'react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" aria-label="Contact" className="relative py-16">
      <div className="absolute inset-0 bg-overlay-green" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          Send Us Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your Name"
                className="w-full rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your Email"
                className="w-full rounded-full border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your Message"
              className="w-full rounded-2xl border border-white/30 bg-white/20 px-5 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded-full bg-white px-10 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-light"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
