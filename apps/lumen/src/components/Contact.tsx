import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    if (name && email && message) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <section id="contact" className="bg-surface-dark py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-400">
            Contact Us
          </h2>
          <h3 className="mt-3 font-display text-3xl font-bold text-text-light md:text-4xl">
            Reach out for a new project or just say hello
          </h3>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h4 className="mb-6 font-display text-xl font-semibold text-text-light">
              Send Us A Message
            </h4>
            {submitted ? (
              <div className="rounded-lg bg-primary-400/10 p-6 text-primary-400">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  minLength={2}
                  className="w-full rounded bg-white/5 px-4 py-3 font-sans text-sm text-text-light placeholder-text-gray outline-none transition-colors focus:ring-2 focus:ring-primary-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded bg-white/5 px-4 py-3 font-sans text-sm text-text-light placeholder-text-gray outline-none transition-colors focus:ring-2 focus:ring-primary-400"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded bg-white/5 px-4 py-3 font-sans text-sm text-text-light placeholder-text-gray outline-none transition-colors focus:ring-2 focus:ring-primary-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={10}
                  required
                  className="w-full rounded bg-white/5 px-4 py-3 font-sans text-sm text-text-light placeholder-text-gray outline-none transition-colors focus:ring-2 focus:ring-primary-400"
                />
                <button
                  type="submit"
                  className="rounded bg-primary-400 px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-text-light transition-colors hover:bg-primary-500"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-6 font-display text-xl font-semibold text-text-light">
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-primary-400" size={20} />
                <div>
                  <p className="font-display text-sm font-semibold text-text-light">
                    Where to Find Us
                  </p>
                  <p className="mt-1 font-sans text-sm text-text-muted">
                    123 Creative Lane, Design District, CA 90210
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 shrink-0 text-primary-400" size={20} />
                <div>
                  <p className="font-display text-sm font-semibold text-text-light">Email Us At</p>
                  <a
                    href="mailto:hello@lumen.com"
                    className="mt-1 font-sans text-sm text-link transition-colors hover:text-primary-400"
                  >
                    hello@lumen.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 shrink-0 text-primary-400" size={20} />
                <div>
                  <p className="font-display text-sm font-semibold text-text-light">Call Us At</p>
                  <a
                    href="tel:+18005551234"
                    className="mt-1 font-sans text-sm text-link transition-colors hover:text-primary-400"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
