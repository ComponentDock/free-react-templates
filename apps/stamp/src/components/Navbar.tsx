import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const NAV_LINKS = [
  'Home',
  'About',
  'Industries',
  'FAQ',
  'Projects',
  'Team',
  'Blog',
  'Contact',
] as const

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+02893653652" className="flex items-center gap-1 hover:text-brand">
              <Phone size={14} />
              <span>+02 89 365 3652</span>
            </a>
            <span className="text-gray-500">|</span>
            <a href="mailto:info@example.com" className="flex items-center gap-1 hover:text-brand">
              <Mail size={14} />
              <span>info@example.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:text-brand">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="/" className="text-2xl font-bold text-ink">
            Stamp
          </a>

          {/* Desktop */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-medium text-ink hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-gray-200 bg-white px-4 pb-4"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3 pt-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block font-medium text-ink hover:text-brand transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
