import { useState } from 'react'
import { Menu, X, ShoppingCart } from 'lucide-react'

const navLinks = ['Home', 'Albums', 'Events', 'News', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <a href="#" className="text-2xl font-bold tracking-tight text-white">
          Groovecraft
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Cart + mobile toggle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Shopping cart"
            className="text-white/80 transition-colors hover:text-white"
          >
            <ShoppingCart size={20} />
          </button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-white/10 bg-black/90 px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
