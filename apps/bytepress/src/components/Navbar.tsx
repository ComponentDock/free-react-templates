import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Tech', 'Innovation', 'Videos', 'World', 'Contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className="text-2xl font-extrabold tracking-tight text-ink">
            Byte<span className="text-accent">Press</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest text-secondary">
            Innovation & Technology Magazine
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-accent"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Search + hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="p-2 text-secondary transition-colors hover:text-accent"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-secondary transition-colors hover:text-accent md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-2 text-sm font-semibold uppercase text-ink hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
