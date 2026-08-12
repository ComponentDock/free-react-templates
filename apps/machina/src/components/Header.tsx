import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND_NAME, NAV_LINKS, PAGES_DROPDOWN } from '../data'
import { SearchOverlay } from './SearchOverlay'

const navLinkClass =
  'px-0.5 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-brand'

/** In-page anchor targets for the single-page layout (source nav links). */
const navHrefs: Record<string, string> = {
  Home: '#home',
  About: '#about',
  Services: '#services',
  Project: '#projects',
  Blog: '#blog',
  Pages: '#pages',
  Contact: '#contact',
}

/**
 * Header — sticky white bar (source `div.header-bottom.header-sticky`):
 * "Machina" text logo with a red square mark, uppercase links with a Pages
 * dropdown (hover/focus), a search icon opening the full-screen search
 * overlay, and a mobile hamburger menu.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
        <a href="#home" aria-label={BRAND_NAME} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center bg-brand font-display text-lg font-black text-white">
            M
          </span>
          <span className="font-display text-2xl font-bold text-ink">{BRAND_NAME}</span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link === 'Pages' ? (
                <li
                  key={link}
                  className="relative"
                  onMouseEnter={() => setPagesOpen(true)}
                  onMouseLeave={() => setPagesOpen(false)}
                  onFocus={() => setPagesOpen(true)}
                  onBlur={() => setPagesOpen(false)}
                >
                  <a
                    href={navHrefs[link]}
                    aria-expanded={pagesOpen}
                    className={cn(navLinkClass, 'inline-flex items-center gap-1')}
                  >
                    {link}
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </a>
                  {pagesOpen ? (
                    <ul className="absolute left-0 top-full z-30 mt-2 min-w-[180px] bg-white py-2 shadow-lg">
                      {PAGES_DROPDOWN.map((subLink) => (
                        <li key={subLink}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-brand"
                          >
                            {subLink}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={link}>
                  <a href={navHrefs[link]} className={navLinkClass}>
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className="text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-line bg-white px-4 pb-4 pt-2 lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={navHrefs[link]}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
