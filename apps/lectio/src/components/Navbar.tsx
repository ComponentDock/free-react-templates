import { useState } from 'react'
import { BookOpen, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About Us', 'Courses', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="bg-navy text-white" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-semibold text-white">
            <BookOpen className="h-6 w-6 text-gold" aria-hidden="true" />
            <span className="text-xl">Lectio</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-white/90 transition-colors hover:text-gold"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Login link */}
          <a
            href="#login"
            className="hidden text-sm font-medium text-white/90 transition-colors hover:text-gold md:inline-block"
          >
            Login / Register
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/10 px-4 pb-4 md:hidden">
            <ul className="flex flex-col gap-3 pt-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm font-medium text-white/90 hover:text-gold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#login"
                  className="block text-sm font-medium text-white/90 hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Login / Register
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Yellow accent bottom border */}
      <div className="h-1 bg-gold" />
    </header>
  )
}
