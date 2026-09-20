import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const navLinks = ['Home', 'About', 'Courses', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold">
          <span className="text-white">Learn</span>
          <span className="text-brand">Path</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium uppercase text-text transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#cart"
            aria-label="Shopping cart"
            className="text-text transition hover:text-brand"
          >
            <ShoppingBag className="h-5 w-5" />
          </a>

          {/* Mobile toggle */}
          <button
            className="text-text md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm font-medium uppercase text-text hover:text-brand"
                  onClick={() => setMobileOpen(false)}
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
