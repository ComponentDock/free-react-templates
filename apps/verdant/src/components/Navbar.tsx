import { useState } from 'react'
import { Search } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-brand">
          Verdant
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`text-sm font-medium transition-colors ${
                activeLink === link ? 'text-brand' : 'text-ink hover:text-brand'
              }`}
            >
              {link}
            </a>
          ))}
          <button aria-label="Search" className="ml-2 text-mist transition-colors hover:text-brand">
            <Search size={18} />
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 dark:bg-gray-900 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setActiveLink(link)
                setMobileOpen(false)
              }}
              className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
