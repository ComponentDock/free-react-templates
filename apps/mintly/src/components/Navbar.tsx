import { Cross, Menu, Search, User } from 'lucide-react'
import { navLinks } from '../data'

interface NavbarProps {
  menuOpen: boolean
  onMenuToggle: () => void
}

export function Navbar({ menuOpen, onMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold text-charcoal">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-white">
            <Cross className="h-5 w-5" aria-hidden="true" />
          </span>
          Mintly
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-charcoal transition-colors hover:text-mint"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <User className="h-5 w-5 text-charcoal" aria-label="Account" />
          <Search className="h-5 w-5 text-charcoal" aria-label="Search" />
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}
