import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Features', 'Pricing', 'Courses'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-ink text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold uppercase tracking-wider">
          Liber<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

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

      {/* Mobile nav */}
      {open && (
        <nav
          className="border-t border-gray-700 px-4 pb-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium uppercase tracking-wide">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 transition-colors hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
