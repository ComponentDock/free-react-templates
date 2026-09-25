import { useState, type FormEvent } from 'react'
import { User, Mail, Phone, Send } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-ink md:text-5xl">
          Get In Touch
        </h2>

        {submitted ? (
          <div className="rounded-lg border border-brand/40 bg-brand/10 p-8 text-center">
            <p className="text-lg font-bold text-brand">Thank you! Your message has been sent.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-lg bg-paper p-8" noValidate>
            <div className="mb-6 grid gap-6 md:grid-cols-3">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm text-mist">
                  Name
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <User
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm text-mist">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Mail
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm text-mist">
                  Phone
                </label>
                <div className="relative">
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    className="w-full rounded border-2 border-border bg-transparent px-4 py-3 pr-10 text-ink transition-colors focus:border-brand focus:outline-none"
                  />
                  <Phone
                    className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-mist"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <label htmlFor="contact-message" className="mb-2 block text-sm text-mist">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  required
                  className="w-full rounded border-2 border-border bg-transparent px-4 py-3 text-ink transition-colors focus:border-brand focus:outline-none"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-brand bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
