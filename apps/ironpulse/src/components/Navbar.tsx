import { useState } from 'react'

const links = ['Home', 'Program', 'Coaches', 'Schedule', 'About', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold tracking-wider text-brand">
          IRONPULSE
        </a>
        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 transition hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-700 bg-dark px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm font-medium text-gray-300 transition hover:text-brand"
                onClick={() => setOpen(false)}
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
