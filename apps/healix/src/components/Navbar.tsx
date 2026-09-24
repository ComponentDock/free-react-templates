import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

const navLinks = ['Home', 'About', 'Services', 'Doctors', 'Departments', 'Blog', 'Contact']

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn('bg-gray-900 text-white sticky top-0 z-50', className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-brand-blue">
            Healix
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Emergency CTA */}
          <a
            href="tel:+12345678900"
            className="hidden lg:inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-blue-light transition-colors"
          >
            <Phone size={16} aria-hidden="true" />
            <span>+1 234 567 8900</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-700 bg-gray-900">
          <ul className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="tel:+12345678900"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              <Phone size={16} aria-hidden="true" />
              <span>+1 234 567 8900</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
