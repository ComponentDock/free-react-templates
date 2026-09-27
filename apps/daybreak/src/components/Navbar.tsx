import { useState } from 'react'
import { Search, X } from 'lucide-react'

const navLinks = ['Home', 'About', 'Portfolio', 'Blog', 'Contact'] as const

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-[1330px] items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#"
          className="font-display text-2xl font-bold tracking-wide text-ink dark:text-white"
        >
          Daybreak
        </a>

        <nav aria-label="Main navigation" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-display text-sm font-medium text-smoke transition-colors hover:text-ink dark:text-gray-400 dark:hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setSearchOpen((prev) => !prev)}
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            className="text-smoke transition-colors hover:text-ink dark:text-gray-400 dark:hover:text-white"
          >
            {searchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {searchOpen && (
        <div className="border-t border-gray-100 bg-gray-50 py-4 dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-[1330px] px-4 sm:px-6">
            <label htmlFor="site-search" className="sr-only">
              Search
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search …"
              className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-sm text-ink placeholder:text-gray-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
        </div>
      )}
    </header>
  )
}
