import { cn } from '@free-react-templates/ui'
import { Phone, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Opening Hours', href: '#opening-hours' },
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn('fixed top-0 left-0 right-0 z-50 bg-white shadow-md', className)}
      data-testid="header"
    >
      {/* Top bar */}
      <div className="bg-ink text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-1 hover:text-brand transition-colors"
          >
            <Phone size={14} />
            <span>+1 (234) 567-890</span>
          </a>
          <a
            href="mailto:info@dentalink.com"
            className="flex items-center gap-1 hover:text-brand transition-colors"
          >
            <Mail size={14} />
            <span>info@dentalink.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-brand">
          Dentalink
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons (desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-mist hover:text-brand transition-colors text-sm"
              aria-label={link.label}
            >
              {link.label === 'Facebook' && <span className="font-bold">f</span>}
              {link.label === 'Twitter' && <span className="font-bold">𝕏</span>}
              {link.label === 'Instagram' && <span className="font-bold">ig</span>}
              {link.label === 'LinkedIn' && <span className="font-bold">in</span>}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white border-t px-4 pb-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-ink hover:text-brand transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 mt-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-mist hover:text-brand transition-colors text-sm"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
