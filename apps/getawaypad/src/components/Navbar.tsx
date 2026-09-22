import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Services', 'Apartment Room', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold tracking-wide">
          Getaway<span className="text-brand">Pad</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={cn(
                  'text-sm font-light tracking-wide hover:text-brand transition-colors',
                  link === 'Home' && 'text-brand',
                )}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex items-center gap-1 text-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-700">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={cn(
                    'block px-4 py-2 text-sm font-light hover:bg-gray-800 hover:text-brand transition-colors',
                    link === 'Home' && 'text-brand',
                  )}
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
