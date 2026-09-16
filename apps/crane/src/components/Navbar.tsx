import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-heading">
          Crane<span className="text-primary-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-heading transition-colors hover:text-primary-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="rounded p-2 text-heading transition-colors hover:bg-gray-100"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded p-2 text-heading transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 text-sm font-medium text-heading transition-colors hover:text-primary-400"
                  onClick={() => setMobileOpen(false)}
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
