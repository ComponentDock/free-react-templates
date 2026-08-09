import { useState } from 'react'
import { Diamond, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'

const columns = [
  {
    heading: 'Hotel',
    links: ['Rooms', 'Amenities', 'Dining', 'Spa'],
  },
  {
    heading: 'Explore',
    links: ['Local Attractions', 'Activities', 'Events', 'Transportation'],
  },
  {
    heading: 'Guest Services',
    links: ['Concierge', 'FAQ', 'Accessibility', 'Policies'],
  },
] as const

const socials = [
  { name: 'Facebook', icon: 'facebook' as const },
  { name: 'Instagram', icon: 'instagram' as const },
  { name: 'Twitter', icon: 'twitter' as const },
]

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer className="bg-gray-900 pt-16 text-gray-300 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2" aria-label="Seacliff home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-950 text-accent-400">
                <Diamond className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Seacliff
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              A luxury oceanfront resort on Miami Beach, Florida — elegant rooms, world-class
              dining, and hospitality that feels like home.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4 text-accent-500" aria-hidden="true" />1 Ocean Drive,
                Miami Beach, FL 33139
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4 text-accent-500" aria-hidden="true" />
                <a href="tel:+15554567890" className="transition-colors hover:text-white">
                  (555) 456-7890
                </a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4 text-accent-500" aria-hidden="true" />
                <a
                  href="mailto:reservations@seacliff.com"
                  className="transition-colors hover:text-white"
                >
                  reservations@seacliff.com
                </a>
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#home"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-accent-500 hover:text-accent-500"
                >
                  <BrandIcon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-gray-400 transition-colors hover:text-accent-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Stay Updated</h3>
            {subscribed ? (
              <p role="status" className="mt-4 text-sm text-accent-400">
                Thanks for subscribing — see you at Seacliff!
              </p>
            ) : (
              <form
                className="mt-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSubscribed(true)
                }}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:border-accent-400 focus:outline-none"
                />
                <Button
                  type="submit"
                  className="mt-3 w-full bg-accent-500 shadow-lg shadow-accent-500/25 hover:bg-accent-600"
                >
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">© 2026 Seacliff. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#home" className="text-gray-500 transition-colors hover:text-accent-400">
              Privacy Policy
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-accent-400">
              Terms of Service
            </a>
            <a href="#home" className="text-gray-500 transition-colors hover:text-accent-400">
              Style Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
