import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Delivery', href: '#menu' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#footer' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      id="home"
      className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-display text-2xl text-primary-400">The Venue</span>
          <span className="text-xs uppercase tracking-widest text-muted">restaurant</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm uppercase tracking-wider text-ink transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Reservation phone */}
        <div className="hidden items-center gap-2 text-sm text-ink lg:flex">
          <Phone className="h-4 w-4 text-primary-400" aria-hidden="true" />
          <span>Reservations: +34 586 778 8892</span>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex items-center gap-1 text-sm font-semibold uppercase text-ink md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span>menu</span>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="flex flex-col items-center gap-6 bg-overlay py-10 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-lg uppercase tracking-wider text-white transition-colors hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <span className="mt-2 text-sm text-white">Reservations: +34 586 778 8892</span>
        </nav>
      )}
    </header>
  )
}
