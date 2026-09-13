import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-wide text-ink dark:text-white">
            Press<span className="text-brand">well</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:text-brand dark:text-gray-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+108728256266"
            className="flex items-center gap-2 text-sm font-semibold text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (08) 728 256 266
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Make an Appointment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:text-brand dark:text-gray-300"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="tel:+108728256266"
            className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            (08) 728 256 266
          </a>
        </nav>
      )}
    </header>
  )
}
