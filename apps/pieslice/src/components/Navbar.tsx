import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Best Sellers', href: '#best-sellers' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-dark-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white">
          Pieslice
        </a>

        {/* Right area: phone + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+346857788892"
            className="hidden rounded bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark sm:inline-block"
          >
            <Phone className="mr-1 inline-block h-4 w-4" />
            ORDER: +34 685 778 8892
          </a>
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        className={cn(
          'border-t border-white/10 bg-dark-bg/95 md:border-none',
          isOpen ? 'block' : 'hidden',
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 px-4 py-2 md:flex-row md:justify-center md:gap-6 md:py-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-brand"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop nav */}
      <nav className="hidden md:block" aria-label="Desktop navigation">
        <ul className="flex justify-center gap-6 pb-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
