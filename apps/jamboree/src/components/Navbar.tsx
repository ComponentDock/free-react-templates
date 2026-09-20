import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Functionalities', 'Speaker', 'Upcoming Event'] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-sans text-xl font-bold text-ink dark:text-white">
          Jamboree<span className="text-brand">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-ink transition-colors hover:text-brand dark:text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden dark:bg-gray-900 dark:border-gray-700"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
