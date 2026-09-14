import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'We Offer', href: '#offer' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#project' },
  { label: 'Price', href: '#price' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="text-2xl font-bold text-brand-600">
          Launchpad
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#price"
            className="rounded bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-gray-700 transition hover:text-brand-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
