import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Shows', 'Album', 'Artists', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cadence-dark/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="font-display text-2xl text-white">
          Cadence
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social icons (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          {['Facebook', 'Twitter', 'Instagram'].map((s) => (
            <a
              key={s}
              href="#"
              aria-label={s}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {s[0]}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
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
        <nav
          className="border-t border-white/10 px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm font-semibold uppercase text-white/80 transition-colors hover:text-white"
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
