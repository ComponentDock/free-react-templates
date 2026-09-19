import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Shop', 'Pages', 'News', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="font-display text-xl font-bold text-ink">
          KeyForge
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:1234567890"
            className="hidden items-center gap-2 rounded bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:flex"
          >
            <Phone size={16} aria-hidden="true" />
            1234 5678 90
          </a>
          <button
            type="button"
            className="text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-2 py-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-1 text-sm font-medium uppercase text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:1234567890"
            className="mt-2 flex items-center justify-center gap-2 rounded bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            <Phone size={16} aria-hidden="true" />
            1234 5678 90
          </a>
        </div>
      )}
    </nav>
  )
}
