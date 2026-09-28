import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#features' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Our Blog', href: '#events' },
  { label: 'Reserve A Table', href: '#why' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#"
          className="text-3xl font-bold text-white"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          S
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-white/10 bg-black px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
