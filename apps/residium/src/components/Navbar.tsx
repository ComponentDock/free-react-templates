import { useState } from 'react'
import { Menu, X, Phone, LogIn } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Pages', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50 bg-navy-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight text-white font-heading">
          Residium
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#login"
            className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white"
          >
            <LogIn className="h-4 w-4" />
            Login
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white"
          >
            <Phone className="h-4 w-4" />
            +001 325 589
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-white/10 px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 text-sm text-white/80 transition hover:text-white"
            >
              {link}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-2">
            <a href="#login" className="flex items-center gap-1 text-sm text-white/80">
              <LogIn className="h-4 w-4" />
              Login
            </a>
            <a href="#contact" className="flex items-center gap-1 text-sm text-white/80">
              <Phone className="h-4 w-4" />
              +001 325 589
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
