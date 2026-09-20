import { useState } from 'react'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Blog', href: '#blog' },
  { label: 'Page', href: '#page' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold font-display text-ink dark:text-white">
          Uni<span className="text-primary-400">well</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold text-charcoal hover:text-primary-400 transition-colors dark:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="text-charcoal hover:text-primary-400 transition-colors dark:text-gray-300"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Shopping cart"
            className="text-charcoal hover:text-primary-400 transition-colors dark:text-gray-300"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="text-charcoal hover:text-primary-400 transition-colors md:hidden dark:text-gray-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden dark:border-gray-800 dark:bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-sm font-semibold text-charcoal hover:text-primary-400 transition-colors dark:text-gray-300"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
