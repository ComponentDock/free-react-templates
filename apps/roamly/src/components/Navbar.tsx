import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, Mountain, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Tours', href: '#tours' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const resourceLinks = ['Travel Blog', 'Travel Guides', 'FAQ'] as const

/* The reference demo persists the dark-mode preference under the `theme`
   key with the values "dark"/"light". */
export const DARK_KEY = 'theme'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? 'dark' : 'light')
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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="Roamly home">
          <Mountain className="h-8 w-8 text-primary-600 lg:h-10 lg:w-10" aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight text-gray-900 lg:text-2xl dark:text-white">
            Roamly
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-semibold text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              Resources
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                aria-hidden="true"
              />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="flex min-w-48 flex-col gap-1 rounded-xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-800 dark:bg-gray-800">
                {resourceLinks.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
            href="#tours"
            className="hidden rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-700 sm:inline-flex"
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-gray-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
          {resourceLinks.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
            >
              {label}
            </a>
          ))}
          <ButtonLink
            href="#tours"
            onClick={() => setOpen(false)}
            className="bg-primary-600 px-5 py-2.5 text-center text-sm font-medium hover:bg-primary-700"
          >
            Book Now
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
