import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Ads', href: '#ads' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="text-ink dark:text-white">Classily</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 text-sm text-mist lg:flex dark:text-gray-400">
            <span className="h-5 w-px bg-gray-300 dark:bg-gray-700" aria-hidden="true" />
            <a href="#login" className="transition-colors hover:text-brand">
              Log In
            </a>
            <a href="#register" className="transition-colors hover:text-brand">
              Register
            </a>
          </div>

          <ButtonLink
            href="#post-ad"
            size="sm"
            className="hidden rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark lg:inline-flex"
          >
            Post an Ad
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-mist lg:hidden dark:border-gray-700 dark:text-gray-300"
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
          className="border-t border-gray-100 bg-white/95 px-4 py-3 dark:border-gray-800 dark:bg-gray-950/95 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-mist transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-4 border-t border-gray-100 pt-2 text-sm text-mist dark:border-gray-800 dark:text-gray-400">
            <a href="#login" className="transition-colors hover:text-brand">
              Log In
            </a>
            <a href="#register" className="transition-colors hover:text-brand">
              Register
            </a>
          </div>
          <ButtonLink
            href="#post-ad"
            size="sm"
            className="mt-2 w-full rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Post an Ad
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
