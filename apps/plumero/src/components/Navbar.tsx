import { useState } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Pages', href: '#pages' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#home" className="font-heading text-2xl font-bold text-dark-purple">
          Plumero
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-dark-purple transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-dark-purple hover:bg-light-purple"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Shopping bag"
            className="rounded-full p-2 text-dark-purple hover:bg-light-purple"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded p-2 text-dark-purple lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        aria-label="Mobile navigation"
        className={cn(
          'border-t border-border bg-white px-4 pb-4 lg:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block py-2 text-sm font-medium text-dark-purple transition-colors hover:text-brand"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
