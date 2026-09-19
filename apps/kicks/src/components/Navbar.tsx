import { useState } from 'react'
import { Search, ShoppingCart, Heart, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Men', 'Women', 'About', 'Contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-dark text-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
        <button
          type="button"
          className="lg:hidden p-1"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a href="#" className="text-2xl font-heading font-bold tracking-tight">
          Kicks
        </a>

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search..."
              aria-label="Search products"
              className="bg-white/10 text-white placeholder:text-white/50 border border-white/20 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-brand-400 w-40"
            />
            <button type="button" className="ml-1 p-1" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <button type="button" className="p-1 sm:hidden" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="p-1 hidden sm:block" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </button>
          <a
            href="#cart"
            className="flex items-center gap-1 text-sm font-medium hover:text-brand-400 transition-colors"
            aria-label="Cart with 0 items"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>[0]</span>
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-white/20 bg-dark" aria-label="Mobile">
          <ul className="flex flex-col px-5 py-4 gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-1 hover:text-brand-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
