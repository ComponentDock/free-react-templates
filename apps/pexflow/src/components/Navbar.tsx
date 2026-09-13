import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      id="home"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-bold text-heading">
          Pex<span className="text-brand">flow</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-body transition-colors hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Get a Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-body transition-colors hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="mt-2 block rounded bg-brand px-5 py-2 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
