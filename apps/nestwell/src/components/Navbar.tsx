import { Menu, X, MapPin } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = ['Home', 'Properties', 'Agents', 'Blog', 'About', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2 text-white font-bold text-xl font-playfair">
          <MapPin className="w-6 h-6 text-brand" />
          Nestwell.
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-white text-sm font-medium hover:text-brand transition-colors ${
                  link === 'Home' ? 'text-brand' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="bg-brand hover:bg-brand-hover text-dark text-sm font-bold px-5 py-2.5 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-white text-sm font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-4 block bg-brand text-dark text-sm font-bold px-5 py-2.5 text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
