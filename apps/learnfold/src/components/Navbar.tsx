import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const NAV_LINKS = ['Home', 'About us', 'Courses', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Learn<span className="text-brand">fold</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm font-semibold text-white transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Login
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="bg-brand/95 px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, '-')}`}
              className="block py-2 text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="mt-2 w-full bg-white px-6 py-2.5 text-sm font-semibold text-brand"
          >
            Login
          </button>
        </nav>
      )}
    </header>
  )
}
