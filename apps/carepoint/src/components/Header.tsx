import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold text-lg">
              +
            </div>
            <div>
              <div className="text-2xl font-bold text-dark-text">
                Care<span className="text-brand-green">Point</span>
              </div>
              <div className="text-xs text-body uppercase tracking-wider">Health Care Center</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body font-medium hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden text-dark-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body font-medium hover:text-brand-green transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
