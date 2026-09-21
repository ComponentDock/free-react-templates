import { useState } from 'react'
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react'

const navLinks = ['Home', 'Services', 'History', 'Gallery', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="font-display text-2xl font-bold tracking-wide text-ink">
          Sartorial
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-display text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-ink transition-colors hover:text-brand">
            <Search size={20} />
          </button>
          <button aria-label="Wishlist" className="text-ink transition-colors hover:text-brand">
            <Heart size={20} />
          </button>
          <button aria-label="Cart" className="text-ink transition-colors hover:text-brand">
            <ShoppingBag size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            className="text-ink md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-brand"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
