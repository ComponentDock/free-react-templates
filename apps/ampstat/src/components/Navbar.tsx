import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'Artists', 'Download Music', 'News', 'Contact'] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header data-testid="navbar" className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-end gap-1">
            <LogoBars />
            <span className="text-3xl font-semibold text-white leading-none pb-0.5">music</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-sm font-bold uppercase hover:text-brand-yellow-light transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* User area */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-white text-sm font-bold uppercase hover:text-brand-yellow-light transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="text-white text-sm font-bold uppercase hover:text-brand-yellow-light transition-colors"
            >
              Register
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            data-testid="hamburger"
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          data-testid="mobile-menu"
          className="fixed inset-0 z-50 bg-brand-purple/95 flex flex-col items-center justify-center gap-8"
        >
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-white text-2xl font-bold uppercase hover:text-brand-yellow-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function LogoBars() {
  return (
    <div className="flex items-end gap-[2px] h-[30px] w-[41px]">
      <span className="w-[6px] bg-brand-yellow-light" style={{ height: 17 }} />
      <span className="w-[6px] bg-brand-green" style={{ height: 23 }} />
      <span className="w-[6px] bg-brand-pink" style={{ height: 30 }} />
      <span className="w-[6px] bg-brand-green" style={{ height: 23 }} />
      <span className="w-[6px] bg-brand-yellow-light" style={{ height: 17 }} />
    </div>
  )
}

export { LogoBars }
