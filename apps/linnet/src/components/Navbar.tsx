import { useState } from 'react'
import { Search, User, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-navy-500/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-xl font-bold uppercase tracking-widest text-white">
          Linnet
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              aria-label="Search"
              className="text-gray-300 transition-colors hover:text-white"
            >
              <Search className="h-4 w-4" />
            </button>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="Account"
              className="text-gray-300 transition-colors hover:text-white"
            >
              <User className="h-4 w-4" />
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-gray-300 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/10 bg-navy-600 px-4 pb-4 pt-2 md:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-2 text-sm text-gray-300 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
