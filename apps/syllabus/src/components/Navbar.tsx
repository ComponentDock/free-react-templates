import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Elements', href: '#elements' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-surface shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-2xl font-bold text-ink">
          syllabus
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1 text-sm font-medium text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+123 456 7890</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6 text-ink" /> : <Menu className="h-6 w-6 text-ink" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-surface px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="mt-2 flex items-center gap-1 text-sm font-medium text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+123 456 7890</span>
          </a>
        </nav>
      )}
    </header>
  )
}
