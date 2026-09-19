import { useState } from 'react'
import { Search, Heart, ShoppingBag, Menu, X, Zap } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Shop', 'Categories', 'New Arrivals', 'Sale', 'About']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6"
      >
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-display text-xl font-bold text-gray-900 dark:text-white"
        >
          <Zap className="h-6 w-6 text-primary-500" aria-hidden="true" />
          Lacecraft
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={cn(
                  'text-sm font-medium text-gray-600 hover:text-primary-500',
                  'dark:text-gray-300 dark:hover:text-primary-400',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop icons */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            aria-label="Search"
            className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span aria-hidden="true">🌙</span>
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white">
              2
            </span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="text-gray-600 md:hidden dark:text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4">
            <button type="button" aria-label="Search" className="text-gray-600 dark:text-gray-300">
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Wishlist"
              className="text-gray-600 dark:text-gray-300"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Cart" className="text-gray-600 dark:text-gray-300">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
