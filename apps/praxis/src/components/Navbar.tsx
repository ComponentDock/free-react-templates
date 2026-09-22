import { Menu, X, Clock, Phone } from 'lucide-react'
import { useState } from 'react'

import { InstagramIcon, FacebookIcon, TwitterIcon } from './social-icons'

const navLinks = ['Home', 'About', 'Services', 'News', 'Contact']

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="text-lg font-bold leading-tight">
          <span className="text-gray-900">Praxis</span>{' '}
          <span className="text-coral-400">Plastic Surgery</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-coral-400"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop extras */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            <span>Mo–Sat: 8am–9pm</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Phone className="h-3.5 w-3.5" />
            <span>+34 586 778 8892</span>
          </div>
          <a
            href="#appointment"
            className="rounded-full bg-coral-400 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-coral-500"
          >
            Make an Appointment
          </a>
          <div className="flex items-center gap-2">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-coral-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-gray-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t md:hidden">
          <nav className="flex flex-col gap-3 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-coral-400"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 text-xs text-gray-500">
              <span>Mo–Sat: 8am–9pm</span>
              <span>+34 586 778 8892</span>
            </div>
            <a
              href="#appointment"
              className="mt-2 rounded-full bg-coral-400 px-4 py-2 text-center text-xs font-semibold text-white hover:bg-coral-500"
              onClick={() => setOpen(false)}
            >
              Make an Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
