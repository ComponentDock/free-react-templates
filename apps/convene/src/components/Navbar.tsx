import { useState } from 'react'
import { Menu, X, Ticket } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold text-ink dark:text-white">
          Convene
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mist transition-colors hover:text-ink dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-pink px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          <Ticket className="h-4 w-4" />
          Ticket
        </a>

        <button
          type="button"
          className="text-ink dark:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-900 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-mist transition-colors hover:text-ink dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-pink px-6 py-2.5 text-sm font-semibold text-white"
          >
            <Ticket className="h-4 w-4" />
            Ticket
          </a>
        </nav>
      )}
    </header>
  )
}
