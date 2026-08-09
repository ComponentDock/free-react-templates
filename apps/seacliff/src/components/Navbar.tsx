import { useEffect, useState } from 'react'
import { Diamond, Menu, Moon, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'About', href: '#' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#' },
  { label: 'Rates', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Experiences', href: '#' },
  { label: 'Contact', href: '#' },
] as const

export const DARK_KEY = 'seacliff-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  // Light is the DEFAULT experience (the demo ships light-first); the stored
  // value '1' opts into dark mode.
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Seacliff home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-900 text-accent-400">
            <Diamond className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Seacliff
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <ButtonLink
            href="#booking"
            className="hidden bg-accent-500 px-5 py-2.5 shadow-lg shadow-accent-500/25 hover:bg-accent-600 sm:inline-flex"
          >
            Book Now
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-200 bg-white px-4 py-6 dark:border-gray-800 dark:bg-gray-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#booking"
            onClick={() => setOpen(false)}
            className="bg-accent-500 px-5 py-2.5 text-center shadow-lg shadow-accent-500/25 hover:bg-accent-600"
          >
            Book Now
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
