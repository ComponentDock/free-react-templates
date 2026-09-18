import { useState, type FormEvent } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim()) {
      setError('Name is required.')
      return
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    if (!message.trim()) {
      setError('Message is required.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-paper py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            We would love to hear from you. Reach out to us using the contact information below or
            fill out the form and we will get back to you shortly.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink">Address</p>
                <p className="text-sm text-mist">123 Creative Lane, Art District, NY 10001</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink">Email</p>
                <p className="text-sm text-mist">hello@brushwork.com</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-ink">Phone</p>
                <p className="text-sm text-mist">+1 (555) 123-4567</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          {submitted ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-center text-lg font-semibold text-brand">
                Thank you for your message! We will get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-ink">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-ink">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    rows={5}
                    className="mt-2 w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>
              {error ? (
                <p role="alert" className="mt-3 text-sm text-red-500">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                className="mt-6 w-full rounded-full border-2 border-brand bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
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
