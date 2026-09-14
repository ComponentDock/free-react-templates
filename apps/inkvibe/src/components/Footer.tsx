import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const

const hours = [
  { day: 'Mon – Fri', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '11:00 AM – 6:00 PM' },
  { day: 'Sunday', time: 'Closed' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-obsidian text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {/* About */}
        <div>
          <a href="#home" className="font-display text-2xl font-extrabold text-primary-400">
            Inkvibe
          </a>
          <h2 className="mt-5 text-sm font-semibold uppercase tracking-wider text-white">
            About Us
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            We are a premier tattoo studio dedicated to creating meaningful, lasting body art. Every
            piece we create is a collaboration between artist and client.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            Business Hours
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>
                  <strong className="text-white">{h.day}</strong>
                  <br />
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <span>123 Ink Street, Arts District</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a href="tel:+15551234567" className="transition-colors hover:text-primary-400">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
              <a
                href="mailto:hello@inkvibe.com"
                className="transition-colors hover:text-primary-400"
              >
                hello@inkvibe.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-primary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Newsletter</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Stay updated with our latest work, promotions, and tattoo tips.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email Address"
              className="w-full min-w-0 rounded border border-gray-700 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded bg-primary-400 px-6 py-3 text-sm font-bold text-void transition-colors hover:bg-primary-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Inkvibe. All rights reserved. Made with{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
