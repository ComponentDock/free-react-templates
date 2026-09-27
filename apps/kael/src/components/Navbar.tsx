import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const NAV_LINKS = ['Home', 'About', 'Services', 'Portfolio', 'Contact'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full bg-white/90 backdrop-blur dark:bg-gray-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-primary-500" aria-label="Kael home">
          Kael
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-display text-sm font-medium text-gray-700 transition hover:text-primary-500 dark:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t bg-white px-6 py-4 dark:bg-gray-950 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block font-display text-sm font-medium text-gray-700 transition hover:text-primary-500 dark:text-gray-300"
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
