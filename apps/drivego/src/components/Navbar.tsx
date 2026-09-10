import { useEffect, useState } from 'react'
import { Car, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Listing', href: '#listing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

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
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
            <Car className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-black uppercase tracking-tight">
            Drive<span className="text-brand">Go</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-ink/80 transition-colors hover:border-brand hover:text-brand dark:border-white/15 dark:text-white/80"
          >
            {dark ? '☀' : '☾'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-ink/80 lg:hidden dark:border-white/15 dark:text-white/80"
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
          className="border-t border-gray-200 bg-white px-4 py-3 lg:hidden dark:border-white/10 dark:bg-gray-950"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-brand dark:text-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
