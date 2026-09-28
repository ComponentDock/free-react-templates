import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Recipes', href: '#recipes' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'News', href: '#news' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-white">
          Foodnest
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover md:inline-block"
          >
            Contact Us
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-3 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-sm font-medium text-gray-300 transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="mt-2 block rounded bg-brand px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
