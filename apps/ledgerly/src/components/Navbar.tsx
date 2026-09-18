import { useState } from 'react'
import { Button } from '@free-react-templates/ui'

const navLinks = ['Home', 'Currencies', 'About', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 border-b border-navy-800 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="text-xl font-bold text-white">
          <span className="text-gold-500">Ledger</span>ly
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium text-gray-300 transition-colors hover:text-gold-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <input
            type="email"
            placeholder="Newsletter"
            className="rounded bg-navy-800 px-3 py-1.5 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gold-500"
          />
          <Button variant="primary" size="sm">
            Subscribe
          </Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy-800 bg-navy-900 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="block text-sm font-medium text-gray-300 hover:text-gold-500">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Newsletter"
              className="flex-1 rounded bg-navy-800 px-3 py-1.5 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-gold-500"
            />
            <Button variant="primary" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
