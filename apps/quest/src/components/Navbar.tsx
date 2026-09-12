import { MapPin, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = ['Home', 'Explore', 'Listings', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="/" className="flex items-center gap-2 text-white font-bold text-xl">
          <MapPin className="w-7 h-7 text-brand" />
          Quest
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-white text-sm font-semibold uppercase tracking-wide hover:text-brand transition-colors ${
                  link === 'Home' ? 'text-brand' : ''
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="Search" className="text-white hover:text-brand transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#"
            className="text-white text-sm font-semibold hover:text-brand transition-colors"
          >
            Sign in
          </a>
          <a
            href="#"
            className="bg-brand hover:bg-brand-hover text-white text-sm font-bold px-5 py-2 transition-colors"
          >
            + Add Listings
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
        <div className="md:hidden bg-brand-dark/95 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-white text-sm font-semibold uppercase">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a href="#" className="text-white text-sm font-semibold">
              Sign in
            </a>
            <a href="#" className="bg-brand text-white text-sm font-bold px-5 py-2 text-center">
              + Add Listings
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
