import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'About us', 'Properties', 'News', 'Contact']

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-brand-primary">
          BlueCoast
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand-primary',
                link === 'Home' ? 'text-brand-primary' : 'text-text-dark',
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Phone + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+15551234567"
            className="hidden items-center gap-2 text-sm font-medium text-text-dark md:flex"
          >
            <Phone size={16} className="text-accent-green" />
            +1 (555) 123-4567
          </a>
          <button
            type="button"
            className="text-text-dark md:hidden"
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
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="text-sm font-medium text-text-dark transition-colors hover:text-brand-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-sm font-medium text-text-dark"
            >
              <Phone size={16} className="text-accent-green" />
              +1 (555) 123-4567
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
