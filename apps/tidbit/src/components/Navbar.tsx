import { useState, type FormEvent } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  brandName,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchCloseLabel,
  searchFieldLabel,
  searchPlaceholder,
  searchSubmitLabel,
  searchToggleLabel,
} from '../data'

/** White editorial header: logo, bold nav links, search toggle, off-canvas menu. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const searchButtonLabel = searchOpen ? searchCloseLabel : searchToggleLabel

  return (
    <header className="relative z-[1999] w-full bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <a href="#top" className="text-2xl font-bold text-ink transition-colors hover:text-accent">
          {brandName}
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link} className="px-2.5">
                <a
                  href="#top"
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className={cn(
                    'inline-block py-2 font-bold text-ink transition-colors hover:text-accent',
                    link === 'Home' && 'text-accent',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-expanded={searchOpen}
            aria-label={searchButtonLabel}
            className="ml-2 rounded p-2 text-ink transition-colors hover:text-accent"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="rounded p-2 text-ink transition-colors hover:text-accent lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {searchOpen ? (
        <div className="border-t border-gray-200 bg-white">
          <form
            role="search"
            onSubmit={handleSearchSubmit}
            className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3 lg:px-6"
          >
            <label htmlFor="site-search" className="sr-only">
              {searchFieldLabel}
            </label>
            <input
              id="site-search"
              type="search"
              placeholder={searchPlaceholder}
              className="h-10 flex-1 rounded-none border border-gray-300 bg-white px-4 text-sm text-ink placeholder:text-meta focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              aria-label={searchSubmitLabel}
              className="flex h-10 w-10 items-center justify-center bg-accent text-white transition-colors hover:bg-primary-700"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}

      {menuOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={menuCloseLabel}
              className="mb-6 self-end rounded p-1 text-ink transition-colors hover:text-accent"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block rounded px-3 py-2.5 font-bold text-ink transition-colors hover:bg-soft hover:text-accent',
                      link === 'Home' && 'text-accent',
                    )}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
