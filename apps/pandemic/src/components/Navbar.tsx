import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Prevention', href: '#prevention' },
  { label: 'Protect Yourself', href: '#protect' },
  { label: 'Symptoms', href: '#symptoms' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-divider bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="text-xl font-black text-brand">
          Pandemic
        </a>
        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile toggle */}
        <button
          className="text-ink md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="flex flex-col gap-3 border-t border-divider bg-white px-4 pb-4 pt-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-sm font-semibold text-ink transition-colors hover:text-brand"
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
