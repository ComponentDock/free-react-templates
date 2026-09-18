import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-2xl font-bold text-heading">
          Pyxis
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-body transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          className="text-heading md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-body transition-colors hover:text-brand"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
