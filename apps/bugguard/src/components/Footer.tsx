import { useState, type FormEvent } from 'react'
import { Phone, MapPin, Clock, Mail, Rss } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function RssIcon({ className }: { className?: string }) {
  return <Rss className={className} aria-hidden="true" />
}

const usefulLinks = [
  'About Us',
  'Contact Us',
  'Testimonials',
  'Terms',
  'Affiliate Program',
] as const
const serviceLinks = [
  'Cockroach Control',
  'Ant Treatment',
  'Rodent Removal',
  'Termite Inspection',
  'Spider Control',
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <footer id="contact" className="bg-[#222222] text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
        {/* Column 1 — About */}
        <div>
          <a href="#home" className="text-xl font-bold text-white">
            BugGuard<span className="text-brand">.</span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">
            Professional pest control services for homes and businesses. Trusted by over 1,254
            satisfied clients across the country.
          </p>
          <p className="mt-3 text-sm">
            <Phone className="mr-1 inline h-3 w-3" aria-hidden="true" />
            (+800) 1234 56781
          </p>
          <Button className="mt-4 rounded-full bg-brand px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-dark">
            Request An Appointment
          </Button>
        </div>

        {/* Column 2 — Useful Links */}
        <div>
          <h3 className="text-lg font-bold text-white">Useful Links</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a href="#home" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Services */}
        <div>
          <h3 className="text-lg font-bold text-white">Our Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h3 className="text-lg font-bold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              450 Strand, Charing Cross, London WC2R 0DG
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              (+800) 1234 56781
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              info@bugguard.com
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>
                Mon - Fri: 08:00 - 19:00
                <br />
                Sat - Sun: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} BugGuard. All rights reserved. More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
          <div className="flex gap-3">
            {[
              { Icon: FacebookIcon, label: 'Facebook' },
              { Icon: TwitterIcon, label: 'Twitter' },
              { Icon: LinkedinIcon, label: 'LinkedIn' },
              { Icon: RssIcon, label: 'RSS' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#home"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded border border-gray-600 text-gray-400 transition-colors hover:border-brand hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter overlay (optional subscribe form) */}
      {subscribed && (
        <div className="bg-[#1a1a1a] py-3 text-center text-sm text-brand">
          Thanks for subscribing to our newsletter!
        </div>
      )}
      {!subscribed && (
        <form onSubmit={handleSubscribe} className="bg-[#1a1a1a] py-4">
          <div className="mx-auto flex max-w-md gap-2 px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              aria-label="Email for newsletter"
              className="flex-1 rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-6 py-2 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}
    </footer>
  )
}
