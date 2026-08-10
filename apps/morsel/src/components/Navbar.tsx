import { Search } from 'lucide-react'
import { navLinks, searchPlaceholder } from '../data'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-semibold text-ink">
          Morsel
        </a>

        <nav aria-label="Primary">
          <ul className="hidden items-stretch md:flex">
            {navLinks.map((link) => (
              <li key={link} className="border-r border-gray-200 last:border-r-0">
                <a
                  href={`#${link.toLowerCase()}`}
                  className="flex h-20 items-center px-6 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:bg-gray-100 hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="search"
            placeholder={searchPlaceholder}
            className="h-11 w-40 rounded-full bg-input-bg px-5 text-sm text-ink shadow-[0_0_1px_#bbb] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 sm:w-56"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center text-gray-500 transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
