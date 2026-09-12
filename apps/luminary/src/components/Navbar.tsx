import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Services', 'FAQ', 'About', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 text-xl font-bold text-heading">
          <span>Luminary</span>
          <span className="h-2 w-2 rounded-full bg-brand" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium text-heading transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-heading md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-heading transition-colors hover:text-brand"
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
