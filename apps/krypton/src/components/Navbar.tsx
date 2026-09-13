import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
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
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-wide text-primary-500 dark:text-primary-300"
        >
          Krypton
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink
            href="#contact"
            className="hidden rounded-md bg-primary-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600 sm:inline-flex"
          >
            Get Started
          </ButtonLink>

          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
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
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-300"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-2 block w-full rounded-md bg-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Get Started
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
