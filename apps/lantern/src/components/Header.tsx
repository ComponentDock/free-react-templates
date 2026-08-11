import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import {
  navLinks,
  searchLabel,
  searchPlaceholder,
  siteName,
  sportDropdown,
  sportLabel,
} from '../data'

/** Absolute overlay header (white text over the hero): wordmark left, search
    trigger + hamburger right, centered nav with a Sport dropdown sub-menu,
    and a collapsible mobile menu (reference: the overlay header on the
    Quitelight preview). */
export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sportOpen, setSportOpen] = useState(false)

  const linkClasses =
    'block py-4 text-xs font-semibold tracking-[0.2em] text-white/80 transition-colors hover:text-white'

  return (
    <header className="absolute inset-x-0 top-0 z-40 bg-gradient-to-b from-black/60 to-transparent text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold tracking-wide">
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-brand text-sm font-bold text-ink"
          >
            L
          </span>
          {siteName}
        </a>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={searchOpen ? 'Close search' : 'Open search'}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
          >
            {searchOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Search className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6">
          <div className="flex items-center gap-3 border border-white/30 bg-black/30 px-4 py-2.5 transition-colors focus-within:border-brand">
            <Search className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
            <input
              type="search"
              aria-label={searchLabel}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
          </div>
        </div>
      )}

      <nav aria-label="Primary" className="hidden justify-center border-t border-white/20 lg:flex">
        <ul className="flex items-center gap-7">
          {navLinks.map((link) =>
            link === sportLabel ? (
              <li key={link} className="relative">
                <button
                  type="button"
                  aria-expanded={sportOpen}
                  onClick={() => setSportOpen((current) => !current)}
                  className={`flex items-center gap-1 ${linkClasses}`}
                >
                  {link}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${sportOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {sportOpen && (
                  <ul className="absolute left-1/2 top-full z-50 w-40 -translate-x-1/2 bg-white py-2 text-ink shadow-xl">
                    {sportDropdown.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-5 py-2.5 text-xs font-semibold tracking-[0.15em] text-ink/80 transition-colors hover:bg-mist hover:text-ink"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link}>
                <a
                  href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                  className={linkClasses}
                >
                  {link}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-white/20 bg-black/70 backdrop-blur lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link}>
                {link === sportLabel ? (
                  <div className="border-b border-white/10 py-3">
                    <span className="text-xs font-semibold tracking-[0.15rem] text-white">
                      {link}
                    </span>
                    <ul className="mt-2 space-y-1 pl-4">
                      {sportDropdown.map((item) => (
                        <li key={item}>
                          <a
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-xs tracking-[0.15rem] text-white/70 transition-colors hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/10 py-3 text-xs tracking-[0.15rem] text-white/80 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
