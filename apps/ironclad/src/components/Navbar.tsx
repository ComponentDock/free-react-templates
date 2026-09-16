import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-dark sticky top-0 z-50 shadow-lg" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
          <span className="text-brand-400 text-2xl">🏗</span>
          <span>
            Ironclad{' '}
            <small className="text-xs font-normal text-gray-400 block leading-none">
              Construction Company
            </small>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-400 hover:bg-brand-500 text-white px-5 py-2 rounded text-sm font-medium transition-colors"
          >
            Inquire Now
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-dark-light border-t border-gray-700 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-300 hover:text-white transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block bg-brand-400 hover:bg-brand-500 text-white px-5 py-2 rounded text-sm font-medium text-center transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Inquire Now
          </a>
        </div>
      )}
    </nav>
  )
}
