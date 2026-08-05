import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const importantLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const contactLines = [
  { icon: MapPin, text: '600/B, South Bhadalta, Bagbazar' },
  { icon: Phone, text: '+1 234 567 890' },
  { icon: Mail, text: 'hello@gaas.example' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer id="contact" className="bg-ink py-16 text-gray-300 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-white">About Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Gaas builds software that puts people first — simple tools, honest pricing, and
              support that never sleeps.
            </p>
            <div className="mt-6">
              <SocialLinks inverted />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Contact Info</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {contactLines.map((line) => (
                <li key={line.text} className="flex items-start gap-3">
                  <line.icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                    aria-hidden="true"
                  />
                  <span className="text-gray-400">{line.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Important Link</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-white">Newsletter</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Subscribe to get product updates and growth tips.
            </p>
            <form
              aria-label="Newsletter signup"
              onSubmit={(event) => event.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
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
                className="w-full rounded-full border border-gray-700 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-primary-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Gaas. All rights reserved.</p>
          <p>
            Made with <span aria-hidden="true">♥</span> by Gaas
          </p>
        </div>
      </div>
    </footer>
  )
}
