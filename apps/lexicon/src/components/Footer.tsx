import { useState } from 'react'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { FacebookIcon, TwitterIcon, LinkedinIcon } from './BrandIcons'

const NAV_LINKS = ['Home', 'Rooms', 'About', 'Blog', 'Contact']

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-ink pt-20 pb-6 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo + social */}
          <div>
            <a href="#" className="font-display text-2xl font-bold text-white">
              Lexicon
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Experience luxury and comfort in the heart of Prague. Your perfect getaway starts
              here.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/60 transition-colors hover:text-brand"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/60 transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                123 Wenceslas Square, Prague, Czech Republic
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={16} aria-hidden="true" />
                +1 555 234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={16} aria-hidden="true" />
                info@lexicon.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-white/60">
              Subscribe to get updates on special offers and events.
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 rounded-l bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-r bg-brand px-4 text-white transition-colors hover:bg-brand-dark"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Lexicon. All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand transition-colors hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
