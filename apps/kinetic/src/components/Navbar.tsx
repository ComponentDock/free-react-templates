import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="text-xl font-semibold text-white">
          Kinetic
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-light text-white/90 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/20 bg-gradient-to-r from-primary-400 to-teal-400 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-light text-white"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
