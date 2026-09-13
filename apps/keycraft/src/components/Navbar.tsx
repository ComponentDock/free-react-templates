import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Shop', href: '#shop' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        {/* Logo */}
        <a href="#home" className="font-display text-2xl font-bold tracking-wide text-white">
          Keycraft
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                  i === 0
                    ? 'border-b-2 border-primary-400 text-primary-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+18005566688"
            className="hidden items-center gap-2 text-sm font-semibold text-white sm:flex"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +1 800 556 6688
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-white lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+18005566688"
              className="mt-2 flex items-center gap-2 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +1 800 556 6688
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
