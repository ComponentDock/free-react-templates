import { useState } from 'react'
import { Clock, Scissors } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const informationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

const serviceLinks = [
  { label: 'Smooth Shave', href: '#services' },
  { label: 'Beard Triming', href: '#services' },
  { label: 'Haircut Styles', href: '#services' },
] as const

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <footer id="contact" className="bg-[#0d0e0f] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand">
              <Scissors className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-widest">
              Buzz<span className="text-brand-light">.</span>
            </span>
          </a>
          <p className="mt-6 text-sm leading-relaxed text-gray-400">
            A modern barber shop in the center of the city. Great cuts, classic shaves, and a chair
            that always has your name on it.
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-gray-400">
            <Clock className="h-4 w-4 text-brand-light" aria-hidden="true" />
            10:00 am - 10:00 pm
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Information
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-gray-400">
            {informationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Services
          </h3>
          <ul className="mt-5 space-y-2 text-sm text-gray-400">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Newsletter
          </h3>
          <p className="mt-5 text-sm text-gray-400">Stay updated with our latest trends</p>
          {subscribed ? (
            <p role="status" className="mt-5 text-sm text-brand-light">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              className="mt-5 flex"
              onSubmit={(event) => {
                event.preventDefault()
                setSubscribed(true)
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter email address"
                aria-label="Enter email address"
                className="h-10 w-full flex-1 rounded-l border border-gray-700 bg-gray-900 px-4 text-sm text-white outline-none transition-colors focus:border-brand-light"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-10 shrink-0 rounded-r bg-brand px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Send
              </button>
            </form>
          )}
          <h3 className="mt-8 font-display text-lg font-bold uppercase tracking-wide text-brand-light">
            Follow Us
          </h3>
          <div className="mt-4 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#contact"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors hover:border-brand-light hover:bg-brand-light hover:text-black"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} All rights reserved | Buzz
      </div>
    </footer>
  )
}
