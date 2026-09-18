import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = ['Home', 'Insurance', 'Services', 'Blog', 'About', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-ink">
          REFUGE
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link === 'Insurance' ? (
              <div key={link} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-mist transition hover:text-ink"
                >
                  {link}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full z-10 mt-2 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                    {['Home Insurance', 'Auto Insurance', 'Travel Insurance'].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-mist hover:bg-gray-50 hover:text-ink"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link}
                href="#"
                className={cn(
                  'text-sm font-medium transition hover:text-ink',
                  link === 'Home' ? 'text-ink' : 'text-mist',
                )}
              >
                {link}
              </a>
            ),
          )}
          <a
            href="#"
            className="rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Get A Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-3 text-sm font-medium text-mist transition hover:text-ink"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 block rounded bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get A Quote
          </a>
        </div>
      )}
    </nav>
  )
}
