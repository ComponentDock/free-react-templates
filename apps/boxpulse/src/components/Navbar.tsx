import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
  { label: 'Video', href: '#video' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      id="header-main-menu"
      aria-label="Main navigation"
      className="fixed top-0 z-50 w-full bg-brand-dark/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4">
        <a href="#home" className="font-heading text-2xl font-bold text-white">
          Box<span className="text-brand-pink">Pulse</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-heading text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand-pink"
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
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-white/10 bg-brand-dark px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 font-heading text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-brand-pink"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
