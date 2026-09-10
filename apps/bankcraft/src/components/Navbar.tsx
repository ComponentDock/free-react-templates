import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-ink">
          Bankcraft<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-semibold text-gray-600 transition hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t bg-white px-4 pb-4 pt-2 md:hidden dark:bg-gray-900">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-sm font-semibold text-gray-600 transition hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
