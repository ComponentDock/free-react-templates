import { useState, type FormEvent } from 'react'
import { Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'About Us', 'Services', 'News', 'Contact'] as const
const quickLinks = ['Help Desk', 'Emergency Services', 'Appointment'] as const
const hours = [
  { day: 'Monday – Thursday', time: '8.00 – 19.00' },
  { day: 'Friday', time: '8.00 - 18.30' },
  { day: 'Saturday', time: '9.30 – 17.00' },
  { day: 'Sunday', time: '9.30 – 15.00' },
] as const

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/** Four-column footer: about, contact form, opening hours + bottom bar with Component Dock. */
export function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const handleContact = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !EMAIL_PATTERN.test(email) || !message.trim()) {
      setError('Please fill in all fields with valid information.')
      setSent(false)
      return
    }
    setError(null)
    setSent(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <footer className="bg-ink-900 text-mute-600">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <a href="#home" className="text-2xl font-bold text-white">
              vitaheal<span className="text-teal-400">+</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-mute-600">
              Professional healthcare services with a commitment to excellence. Our experienced team
              provides compassionate care for patients of all ages.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal-400"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="#social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal-400"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="#social"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-teal-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white">Quick Contact</h3>
            <form onSubmit={handleContact} className="space-y-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-1/2 rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-1/2 rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
                />
              </div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-sm border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-mute-400 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 focus:outline-none"
              />
              <Button
                type="submit"
                className="h-10 rounded-sm bg-teal-400 px-6 text-sm font-semibold text-white uppercase hover:bg-teal-500"
              >
                Send Message
              </Button>
              {error && (
                <p className="text-sm text-coral-400" role="alert">
                  {error}
                </p>
              )}
              {sent && (
                <p className="text-sm text-teal-300" role="status">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Opening Hours</h3>
            <ul className="space-y-3 text-sm">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span className="text-teal-400">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row lg:px-8">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-xs text-mute-600">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="transition-colors hover:text-teal-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-wrap items-center gap-4 text-xs text-mute-600">
            {quickLinks.map((link) => (
              <a key={link} href="#info" className="transition-colors hover:text-teal-400">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-mute-600">
            <Phone className="h-3 w-3" aria-hidden="true" />
            <span>+34 586 778 8892</span>
          </div>
        </div>
        <div className="border-t border-white/10 py-3 text-center text-xs text-mute-600">
          Made with <span className="text-coral-400">♥</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-semibold text-teal-400 transition-colors hover:text-teal-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
