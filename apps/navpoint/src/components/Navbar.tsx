import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About us', 'Listings', 'News', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="/" className="text-brand-dark font-bold text-2xl">
          Nav<span className="text-brand">point</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={`text-sm font-medium transition-colors hover:text-brand ${
                    link === 'Home' ? 'text-brand' : 'text-text-primary'
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="border-2 border-brand text-brand text-sm font-light px-5 py-2 rounded transition-colors hover:bg-brand hover:text-white"
          >
            +Add Listing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-text-primary hover:text-brand transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="text-sm font-medium text-text-primary hover:text-brand transition-colors"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          className="lg:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark/95 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-white text-sm font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href="#" className="text-white text-sm font-medium">
              Login
            </a>
            <a
              href="#"
              className="bg-brand text-white text-sm font-bold px-5 py-2 text-center rounded"
            >
              +Add Listing
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
