import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  brandName,
  dropdownItems,
  dropdownLabel,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchCloseLabel,
  searchOpenLabel,
  searchPlaceholder,
} from '../data'

/** White header: wordmark, expanding search form, uppercase desktop nav
    (with a GUIDES & ANALYTICS dropdown) and a mobile hamburger menu
    (reference: header .logo / .src-btn / .main-menu / .menu-nav-icon). */
export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a href="#top" className="py-7 text-2xl font-extrabold uppercase tracking-wide text-ink">
          {brandName}
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#section"
                  className="inline-block px-[15px] text-[13px] font-bold uppercase text-ink transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((value) => !value)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1 px-[15px] text-[13px] font-bold uppercase text-ink transition-colors hover:text-accent"
              >
                {dropdownLabel}
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen ? (
                <ul className="absolute top-full left-0 z-20 w-44 border border-softedge bg-white py-1 shadow-lg">
                  {dropdownItems.map((item) => (
                    <li key={item}>
                      <a
                        href="#section"
                        onClick={() => setDropdownOpen(false)}
                        className="block border-b border-softedge px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-white hover:text-accent"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen((value) => !value)}
            aria-expanded={searchOpen}
            aria-label={searchOpen ? searchCloseLabel : searchOpenLabel}
            className="p-3 text-ink transition-colors hover:text-accent"
          >
            {searchOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Search className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            className="p-3 text-ink transition-colors hover:text-accent lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {searchOpen ? (
        <div className="mx-auto max-w-7xl px-4 pb-6">
          <form role="search" className="relative">
            <label htmlFor="search-input" className="sr-only">
              {searchPlaceholder}
            </label>
            <input
              id="search-input"
              type="search"
              placeholder={searchPlaceholder}
              className="h-[45px] w-full border border-subline px-5 pr-12 text-sm text-ink outline-none transition-colors placeholder:text-ash focus:border-accent"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute top-0 right-0 flex h-[45px] w-[45px] items-center justify-center text-ink transition-colors hover:text-accent"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}

      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-separator lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#section"
                  onClick={() => setMenuOpen(false)}
                  className="block border-t border-separator px-4 py-3 text-[13px] font-bold uppercase text-ink transition-colors hover:text-accent"
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="border-t border-separator">
              <p className="px-4 py-3 text-[13px] font-bold uppercase text-ink">{dropdownLabel}</p>
              <ul>
                {dropdownItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#section"
                      onClick={() => setMenuOpen(false)}
                      className="block border-t border-separator px-8 py-3 text-xs font-semibold text-meta transition-colors hover:text-accent"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
