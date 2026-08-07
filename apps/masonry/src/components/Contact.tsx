import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Get In Touch
          </p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            Send Us Messages
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
              Contact Info
            </p>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-mist dark:text-gray-400">
                  56 Construction Ave, New York, NY 10001
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-mist dark:text-gray-400">
                  +1 (555) 1990-2026
                </p>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-sm leading-relaxed text-mist dark:text-gray-400">
                  info@masonry.templates
                </p>
              </li>
            </ul>
            <Button
              size="lg"
              className="mt-8 rounded-none bg-brand px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
            >
              View Contact Info <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-4 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-ink dark:text-white"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-none border border-gray-300 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-ink dark:text-white"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-none border border-gray-300 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="text-sm font-semibold text-ink dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project…"
                rows={5}
                className="mt-2 w-full rounded-none border border-gray-300 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-white"
              />
            </div>
            {error && (
              <p role="alert" className="text-sm font-medium text-red-600 dark:text-red-400">
                {error}
              </p>
            )}
            <Button
              type="submit"
              size="lg"
              className="rounded-none bg-brand px-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
