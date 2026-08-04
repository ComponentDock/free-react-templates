import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

const menuLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
] as const

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-night pb-10 pt-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white p-8 text-center dark:bg-gray-800 md:p-12">
          <h2 className="text-3xl font-bold text-heading dark:text-white">Subscribe Newsletter</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-gray-500 dark:text-gray-400">
            We strictly follow the State Board’s sanitary and disinfection guidelines.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
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
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 rounded-full border border-gray-200 bg-paper px-5 text-sm text-gray-900 focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              Free Trial
            </button>
          </form>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-base font-bold text-white">Menu</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>
                <a
                  href="tel:+109834563669"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  10 983 456 3669
                </a>
              </li>
              <li>
                <a
                  href="mailto:reserve@leopet.com"
                  className="flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  reserve@leopet.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Address</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                700, Green lane, New York, USA
              </li>
              <li>
                <a href="#contact" className="text-brand transition-colors hover:text-brand-strong">
                  Get Direction
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Opening Hour</h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>Mon-Fri (9.00-6.00)</li>
              <li>Sat-Sun (Closed)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm font-medium">
            Copyright © {new Date().getFullYear()} Leopet. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
