import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Breakfast', href: '#breakfast' },
  { label: 'Lunch', href: '#lunch' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Chef', href: '#chef' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur transition-colors dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl text-heading dark:text-white">
          Grillmark
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 text-body lg:hidden dark:border-gray-700 dark:text-gray-300"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white/95 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/95 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
