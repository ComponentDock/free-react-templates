import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" aria-label="Main navigation">
      {/* Desktop nav */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between px-4 py-4 lg:flex">
        <a href="#home" className="text-2xl font-bold text-brand-pink">
          Nexus.
        </a>
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-text hover:text-brand-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      <div className="flex items-center justify-between px-4 py-4 lg:hidden">
        <a href="#home" className="text-2xl font-bold text-brand-pink">
          Nexus.
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="text-text"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium uppercase tracking-wider text-text hover:text-brand-pink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
