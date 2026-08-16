import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-cream bg-white/90 backdrop-blur transition-colors dark:border-navy dark:bg-navy/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center bg-brand text-white">
            <Heart className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-semibold text-navy dark:text-white">
            Giveback
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden bg-brand px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-flame lg:inline-block"
          >
            Make a Donation
          </a>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
          >
            {dark ? '☀' : '☾'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-ink lg:hidden dark:border-gray-700 dark:text-gray-300"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-cream bg-white/95 px-4 py-3 dark:border-navy dark:bg-navy/95 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-ink transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block bg-brand px-4 py-2 text-center text-sm font-medium uppercase tracking-wide text-white hover:bg-flame"
          >
            Make a Donation
          </a>
        </nav>
      )}
    </header>
  )
}
