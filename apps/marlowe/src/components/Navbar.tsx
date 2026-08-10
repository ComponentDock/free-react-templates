import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  dropdownLinks,
  navLinks,
  searchPlaceholder,
  siteName,
  socialLabels,
  socialLinks,
} from '../data'
import { BrandIcon } from './BrandIcon'

const withDropdown: Record<string, readonly string[]> = {
  Lifestyle: dropdownLinks.Lifestyle,
  Fashion: dropdownLinks.Fashion,
}

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3 text-ink">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#"
              aria-label={socialLabels[name]}
              className="text-ink transition-colors hover:text-brand"
            >
              <BrandIcon name={name} className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-ink">
          {siteName}
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav aria-label="Main" className="hidden border-t border-line lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6">
          {navLinks.map((link) => {
            const dropdown = withDropdown[link]
            return (
              <li key={link} className="group relative">
                <a
                  href="#"
                  className="flex items-center gap-1 py-4 text-xs font-bold tracking-widest text-ink uppercase transition-colors hover:text-brand"
                >
                  {link}
                  {dropdown && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
                </a>
                {dropdown && (
                  <div className="invisible absolute top-full left-0 z-30 w-48 border border-line bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {dropdown.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-brand hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>

      {searchOpen && (
        <div
          role="search"
          aria-label="Search overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-night"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-brand"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="w-full max-w-xl px-6">
            <label htmlFor="nav-search" className="sr-only">
              Search
            </label>
            <input
              id="nav-search"
              type="search"
              placeholder={searchPlaceholder}
              autoFocus
              className="h-12 w-full border-b-2 border-white/40 bg-transparent text-lg text-white placeholder-white/50 outline-none focus:border-brand"
            />
          </div>
        </div>
      )}

      {menuOpen && (
        <aside
          aria-label="Menu"
          className="fixed top-0 right-0 z-50 h-full w-[360px] max-w-full overflow-y-auto bg-night p-8"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="mb-8 flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-brand"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={cn(
                    'text-sm font-bold tracking-widest text-white uppercase transition-colors hover:text-brand',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8 text-white">
            {socialLinks.map((name) => (
              <a
                key={name}
                href="#"
                aria-label={socialLabels[name]}
                className="text-white transition-colors hover:text-brand"
              >
                <BrandIcon name={name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </aside>
      )}
    </header>
  )
}
