import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, siteName } from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-charcoal shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a
          href="#home"
          className="text-2xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {siteName}
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
          className="text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {menuOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 lg:hidden',
          menuOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="border-t border-white/10 px-6 pb-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
