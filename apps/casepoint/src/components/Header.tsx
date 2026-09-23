import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface HeaderProps {
  className?: string
}

const navLinks = ['Home', 'About', 'Services', 'Case Studies', 'Blog', 'Contact']

export function Header({ className }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 bg-white shadow-sm', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-heading font-bold text-text-heading">
            Casepoint
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-sans text-text-body hover:text-brand transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01654066456"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm font-semibold uppercase tracking-wider hover:bg-brand/90 transition-colors"
            >
              <Phone size={16} />
              01654.066.456
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t">
          <nav className="px-4 py-4 space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block text-sm font-sans text-text-body hover:text-brand py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="tel:01654066456"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm font-semibold"
            >
              <Phone size={16} />
              01654.066.456
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
