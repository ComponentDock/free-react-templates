import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Speakers', 'Schedule', 'Blog', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-display text-2xl font-bold text-brand">
          Confetti
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-display text-sm font-medium uppercase tracking-wide text-ink hover:text-brand dark:text-white dark:hover:text-brand"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#"
          className="hidden rounded bg-brand px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark lg:inline-block"
        >
          Get Your Ticket
        </a>

        <button
          type="button"
          className="text-ink dark:text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="block py-3 font-display text-sm font-medium uppercase tracking-wide text-ink hover:text-brand dark:text-white dark:hover:text-brand"
            >
              {l}
            </a>
          ))}
          <a
            href="#"
            className="mt-2 block rounded bg-brand px-6 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
          >
            Get Your Ticket
          </a>
        </nav>
      )}
    </header>
  )
}
