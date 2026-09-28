import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto mt-4 max-w-6xl rounded-2xl bg-white px-6 py-4 shadow-lg sm:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-2xl font-bold text-heading">
            Forkful
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-mist transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="flex items-center justify-center md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <nav
          className={cn(
            'overflow-hidden transition-all duration-300 md:hidden',
            mobileOpen ? 'mt-4 max-h-60' : 'max-h-0',
          )}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 pb-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-mist transition-colors hover:text-brand"
                  onClick={() => setMobileOpen(false)}
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
