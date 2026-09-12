import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks } from '../data'

/** Header with brand wordmark and nav links; hamburger toggler on mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy text-white" data-testid="navbar">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="text-2xl font-bold tracking-wide">
          {brand.name}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggler */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={cn(
          'overflow-hidden transition-all duration-300 md:hidden',
          open ? 'max-h-96 pb-4' : 'max-h-0',
        )}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-3 px-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-sm uppercase text-white/80 hover:text-white"
                onClick={() => setOpen(false)}
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
