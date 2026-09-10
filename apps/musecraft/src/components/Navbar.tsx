import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-navy" aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-heading text-lg font-bold tracking-wide text-white">
          Musecraft
        </a>
        {/* Desktop menu */}
        <ul className="hidden gap-6 text-sm uppercase tracking-wider text-white md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="transition-colors hover:text-mint">
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          type="button"
          className="text-2xl text-white md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col items-center gap-4 pb-4 text-sm uppercase tracking-wider text-white md:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors hover:text-mint"
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
