import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Collections', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#" className="text-2xl font-bold tracking-tight text-black">
          Bespoke<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wide text-gray-800 transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          type="button"
          className="lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-gray-100 py-3">
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wide text-gray-800 transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
