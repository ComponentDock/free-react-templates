import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NavbarProps {
  className?: string
}

const navLinks = ['Home', 'About', 'Services', 'News', 'Contact']

export function Navbar({ className }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className={cn('bg-white shadow-sm sticky top-0 z-50', className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-brand-blue">
            Curemark
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-body hover:text-brand-accent transition-colors text-sm font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Emergency CTA */}
          <a
            href="tel:+1234567890"
            className="hidden md:inline-flex items-center gap-2 gradient-bg text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone size={16} aria-hidden="true" />
            <span>+1 234 567 890</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-body"
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
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-body hover:text-brand-accent transition-colors text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 gradient-bg text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              <Phone size={16} aria-hidden="true" />
              <span>+1 234 567 890</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
