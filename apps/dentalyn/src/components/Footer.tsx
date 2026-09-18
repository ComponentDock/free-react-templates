import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const openingHours = [
  { days: 'Mon-Wed', hours: '8:00 - 18:00' },
  { days: 'Thu-Fri', hours: '8:00 - 17:00' },
  { days: 'Sat', hours: '9:00 - 17:00' },
  { days: 'Sun', hours: '10:00 - 17:00' },
  { days: 'Holiday', hours: 'Closed' },
] as const

const quickLinks = [
  'About',
  'FAQs',
  'Contact',
  'Policy',
  'News',
  'Advisors',
  'Careers',
  'Dentist',
  'Services',
  'Legals',
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat pt-16 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://picsum.photos/seed/dentalyn-footer/1600/900)',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* Logo & Contact */}
        <div>
          <a
            href="#home"
            className="mb-4 block font-display text-2xl font-bold tracking-wide text-primary-400"
          >
            Dentalyn
          </a>
          <p className="mb-6 text-sm leading-relaxed text-white/80">
            Etiam sutor risus, dapibus act elefend katen, lacinia sitamet denim. Mauris sagittis
            kansa interdum dignissim.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              28 Jackson Street, Chicago, 7788569 USA
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              +84. 2252. 2250. 122
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              info.dentalyn@gmail.com
            </p>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h5 className="mb-5 border-b border-white pb-2 text-base font-semibold">Opening Hours</h5>
          <ul className="space-y-3 text-sm">
            {openingHours.map((entry) => (
              <li key={entry.days} className="flex justify-between">
                <span>{entry.days}</span>
                <span>{entry.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="mb-5 border-b border-white pb-2 text-base font-semibold">Quick Link</h5>
          <ul className="grid grid-cols-2 gap-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-primary-400">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="mb-5 border-b border-white pb-2 text-base font-semibold">Newsletter</h5>
          <p className="mb-4 text-sm text-white/80">
            We will send out weekly newest article and some great offers
          </p>
          <form onSubmit={handleSubmit} className="relative mb-6">
            <label htmlFor="footer-email" className="sr-only">
              Email Address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full rounded-sm bg-white px-4 py-2.5 pr-12 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-0 top-0 flex h-full items-center justify-center rounded-r-sm bg-primary-400 px-3 text-white transition-colors hover:bg-primary-600"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <div className="flex gap-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Pinterest'].map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="text-white transition-colors hover:text-primary-400"
              >
                {name.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright + Component Dock link */}
      <div className="mt-12 border-t border-white/20 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} All rights reserved | Made with{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary-400 transition-colors hover:text-primary-300"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
