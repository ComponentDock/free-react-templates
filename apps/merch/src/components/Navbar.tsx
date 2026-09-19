import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'

const menuLinks = [
  { label: 'New', href: '#new' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'Jewelry', href: '#jewelry' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold text-ink">
          Merch<span className="text-primary-400">.</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide lg:flex">
          {menuLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-primary-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="transition-colors hover:text-primary-400"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="User account"
            className="transition-colors hover:text-primary-400"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="relative transition-colors hover:text-primary-400"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ink text-[10px] text-white">
              2
            </span>
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t lg:hidden">
          <ul className="flex flex-col gap-4 px-4 py-4 text-sm font-semibold uppercase tracking-wide">
            {menuLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block transition-colors hover:text-primary-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
