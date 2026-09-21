import { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS, PAGES_DROPDOWN } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-ink text-white text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <select
              aria-label="Currency"
              className="bg-transparent text-xs text-white/80 focus:outline-none"
            >
              <option>USD</option>
              <option>EUR</option>
            </select>
            <select
              aria-label="Language"
              className="bg-transparent text-xs text-white/80 focus:outline-none"
            >
              <option>ENG</option>
              <option>Spanish</option>
            </select>
          </div>
          <a href="#signin" className="text-white/80 hover:text-brand transition-colors">
            Sign in
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation" className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a href="#home" className="font-display text-2xl font-bold text-ink">
            Batterly
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-ink hover:text-brand transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-ink hover:text-brand transition-colors"
                aria-expanded={pagesOpen}
              >
                Pages <ChevronDown className="h-3 w-3" />
              </button>
              {pagesOpen && (
                <ul className="absolute left-0 top-full z-10 mt-2 w-48 rounded-md bg-white shadow-lg border border-border">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#pages"
                        className="block px-4 py-2 text-sm text-ink hover:bg-cream hover:text-brand transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="text-ink hover:text-brand transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Wishlist"
              className="text-ink hover:text-brand transition-colors"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="relative text-ink hover:text-brand transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] text-white">
                3
              </span>
            </button>
            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-ink hover:text-brand md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="border-t border-border bg-white px-4 pb-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-ink hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <span className="block py-2 text-sm font-medium text-muted">Pages</span>
              <ul className="pl-4">
                {PAGES_DROPDOWN.map((item) => (
                  <li key={item}>
                    <a href="#pages" className="block py-1 text-sm text-ink hover:text-brand">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}
