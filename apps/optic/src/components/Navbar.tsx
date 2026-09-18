import { useState } from 'react'
import { Camera, Menu, X } from 'lucide-react'

const leftLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

const rightLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left nav */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-600 hover:text-gold-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-black">
          <Camera className="w-6 h-6 text-gold-400" />
          Optic
        </a>

        {/* Right nav */}
        <ul className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-600 hover:text-gold-400 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          {[...leftLinks, ...rightLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold uppercase tracking-wide text-gray-600 hover:text-gold-400"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
