import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Project', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 py-3" aria-label="Nectar Home">
          <svg
            className="h-8 w-8 text-brand"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.35 8 12 11.82 4.65 8 12 4.18z" />
          </svg>
          <span className="font-heading text-xl font-bold text-white">
            Nectar<span className="text-brand">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-white/70 transition-colors hover:text-brand"
            aria-label="Search"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="p-2 text-white/70 transition-colors hover:text-brand md:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul
        className={cn(
          'space-y-1 overflow-hidden bg-dark px-4 pb-4 transition-all duration-300 md:hidden',
          isOpen ? 'max-h-64' : 'max-h-0',
        )}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-brand"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
