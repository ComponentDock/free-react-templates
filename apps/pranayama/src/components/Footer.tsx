import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const EMAIL_REGEX = /^\S+@\S+\.\S+$/

const socials = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Instagram', name: 'instagram' as const },
  { label: 'Twitter', name: 'twitter' as const },
] as const

export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!EMAIL_REGEX.test(email)) {
      setEmailError('Please enter a valid email address')
      setSubmitted(false)
      return
    }

    setEmailError('')
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer id="contact" className="bg-ink py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="font-display text-2xl font-bold">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
                {emailError && <p className="mt-1 text-sm text-red-400">{emailError}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-brand focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-sm text-green-400">Thank you! Your message has been sent.</p>
            )}
          </div>

          {/* Contact info + social links */}
          <div>
            <h2 className="font-display text-2xl font-bold">Contact Info</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>123 Yoga Lane, Serenity City, SC 12345</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a href="mailto:info@pranayama.com" className="transition-colors hover:text-brand">
                  info@pranayama.com
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Pranayama. All rights reserved.</p>
          <p className="mt-2">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
