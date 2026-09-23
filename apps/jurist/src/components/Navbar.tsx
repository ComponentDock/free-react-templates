import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Area', href: '#practice' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="font-heading text-2xl font-bold uppercase tracking-wide text-white"
        >
          <span className="bg-black px-3 py-1 text-white">Jurist</span>
          <span className="text-brand">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-6 text-sm font-semibold uppercase tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-900 transition-colors hover:text-brand">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-gray-900 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-gray-100 py-2">
              <a
                href={link.href}
                className="block text-sm font-semibold uppercase text-gray-900 hover:text-brand"
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
