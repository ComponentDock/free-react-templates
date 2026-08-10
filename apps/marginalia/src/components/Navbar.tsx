import { useEffect, useState } from 'react'
import { Menu, Moon, Search, Sun, X } from 'lucide-react'
import { navLinks, searchPlaceholder, darkStorageKey } from '../data'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(darkStorageKey) === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(darkStorageKey, dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20">
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setSearchOpen(true)}
          className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>

        <a
          href="#home"
          className="absolute left-1/2 -translate-x-1/2 font-sans text-lg font-light tracking-[0.35em] text-white sm:text-xl"
        >
          Marginalia
        </a>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((current) => !current)}
            className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
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
            className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
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
        <div className="border-t border-white/10 bg-charcoal px-4 py-4 sm:px-6">
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <Search className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search"
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-white/80 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-charcoal lg:hidden">
          <ul className="flex flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={index === 0 ? '#home' : `#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 py-3 text-xs uppercase tracking-[0.15rem] text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
