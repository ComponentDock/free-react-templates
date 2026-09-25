import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, PenLine, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { darkStorageKey, navLinks, pageLinks } from '../data'

const hrefFor = (link: string) => (link === 'Home' ? '#home' : `#${link.toLowerCase()}`)

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(darkStorageKey) === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(darkStorageKey, dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-[0_2px_10px_rgba(158,158,158,0.3)] backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-sans text-lg font-semibold text-ink dark:text-white"
        >
          <PenLine className="h-5 w-5 text-brand" aria-hidden="true" />
          Quill
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={hrefFor(link)}
                className="block px-5 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              aria-expanded={pagesOpen}
              onClick={() => setPagesOpen((current) => !current)}
              className="flex items-center gap-1 px-5 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
            >
              Pages
              <ChevronDown
                className={cn('h-3.5 w-3.5 transition-transform', pagesOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {pagesOpen && (
              <ul className="absolute right-0 top-full w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg dark:border-gray-800 dark:bg-gray-900">
                {pageLinks.map((page) => (
                  <li key={page}>
                    <a
                      href="#home"
                      className="block px-4 py-2 text-sm text-muted transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((current) => !current)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden dark:text-gray-200 dark:hover:text-brand"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <ul className="flex flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={hrefFor(link)}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
            {pageLinks.map((page) => (
              <li key={page}>
                <a
                  href="#home"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-xs font-medium uppercase tracking-wide text-muted transition-colors hover:text-brand dark:text-gray-400 dark:hover:text-brand"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
