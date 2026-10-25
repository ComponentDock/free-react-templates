import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { navLinks } from '../content'
import { Wordmark } from './Wordmark'

export interface HeaderProps {
  dark: boolean
  onToggleTheme: () => void
}

/**
 * Sticky two-row header: wordmark · catalogue search · theme toggle · quote CTA
 * · menu toggle, then a ruled catalogue rail. Two rows of chrome only exist
 * from 1024 up; the quote CTA waits until 1280 while the rail is already there,
 * so both the rail and the menu button are visible between the two.
 */
export function Header({ dark, onToggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-ink-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95',
        scrolled && 'shadow-lg',
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 lg:h-20 lg:gap-8 lg:px-8">
        <a href="#main-content" aria-label="Brassworks home" className="shrink-0">
          <Wordmark />
        </a>

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="hidden min-w-0 flex-1 md:block"
        >
          <label htmlFor="catalogue-search" className="sr-only">
            Search the catalogue
          </label>
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-400"
            />
            <input
              id="catalogue-search"
              type="search"
              placeholder="Search fixtures, heaters, fittings…"
              className="h-[42px] w-full rounded-lg border border-ink-200 bg-ink-50 py-2 pr-3 pl-9 text-sm text-ink-800 placeholder:text-ink-400 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="hidden rounded-lg p-2.5 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800 sm:block dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <ButtonLink
            href="#contact"
            className="hidden px-5 py-2.5 xl:inline-flex"
            data-testid="header-quote"
          >
            Request a quote
          </ButtonLink>

          <button
            ref={toggleRef}
            id="menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-panel"
            aria-label="Open menu"
            className="rounded-lg p-2.5 text-ink-600 transition-colors hover:bg-ink-100 xl:hidden dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <nav
        aria-label="Catalogue navigation"
        className="hidden border-t border-ink-100 lg:block dark:border-gray-800"
      >
        <ul className="container mx-auto flex h-12 items-center gap-8 px-4 lg:px-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-nav-link
                className="text-sm font-semibold text-ink-600 transition-colors hover:text-primary-700 dark:text-gray-300 dark:hover:text-primary-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div
          id="mobile-panel"
          className="border-t border-ink-100 bg-white px-4 py-4 xl:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <nav aria-label="Menu">
            <label htmlFor="mobile-search" className="sr-only">
              Search the catalogue
            </label>
            <input
              id="mobile-search"
              type="search"
              placeholder="Search the catalogue…"
              className="h-11 w-full rounded-lg border border-ink-200 bg-ink-50 px-3 text-sm text-ink-800 placeholder:text-ink-400 focus:border-primary-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            />
            <ul className="mt-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-semibold text-ink-600 dark:text-gray-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 w-full py-3 text-base"
            >
              Request a quote
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  )
}
