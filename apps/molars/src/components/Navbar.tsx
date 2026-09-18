import { useState } from 'react'

const navLinks = ['Home', 'About', 'Services', 'Testimonials', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-display text-2xl font-bold text-white">
          Molars
        </a>
        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          type="button"
          className="text-2xl text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-white/20 bg-black/80 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-semibold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
