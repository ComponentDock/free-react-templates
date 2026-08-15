import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchInputLabel,
  searchLabel,
  searchOverlayLabel,
  searchSubmitLabel,
  siteName,
  socialItems,
} from '../data'
import { BrandIcon } from './BrandIcon'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault()
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex h-[92px] max-w-[1200px] items-center justify-between px-5">
          <a
            href="#home-section"
            className="flex h-[85px] w-[85px] items-center justify-center bg-white"
            aria-label={`${siteName} — home`}
          >
            <span className="flex flex-col items-center justify-center text-[13px] font-black uppercase leading-[1.1] tracking-tight text-black">
              <span>Iron</span>
              <span className="text-brand">Pulse</span>
            </span>
          </a>

          <nav className="hidden items-center lg:flex" aria-label={navLabel}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-5 text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={searchLabel}
              onClick={() => setSearchOpen(true)}
              className="hidden items-center text-white transition-colors hover:text-brand lg:flex"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex items-center text-white transition-colors hover:text-brand lg:hidden"
            >
              {menuOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            aria-label={mobileNavLabel}
            className="border-t border-white/10 bg-black/90 px-6 py-4 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Fixed vertical social strip on the right edge */}
      <div className="fixed right-0 top-0 z-30 hidden h-screen w-[60px] flex-col items-center justify-center gap-4 bg-black/90 md:flex">
        {socialItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-strip text-white transition-colors hover:bg-brand"
          >
            <BrandIcon
              name={item.name.toLowerCase() as 'facebook' | 'twitter' | 'pinterest' | 'behance'}
              className="h-4 w-4"
            />
          </a>
        ))}
      </div>

      {searchOpen && (
        <div
          role="dialog"
          aria-label={searchOverlayLabel}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-search"
        >
          <button
            type="button"
            aria-label={searchCloseLabel}
            onClick={() => setSearchOpen(false)}
            className="absolute right-8 top-8 text-white transition-colors hover:text-brand"
          >
            <X className="h-8 w-8" aria-hidden="true" />
          </button>
          <form onSubmit={submitSearch} className="w-full max-w-[560px] px-6" role="search">
            <input
              type="search"
              aria-label={searchInputLabel}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search…"
              className="w-full border-b-2 border-white/40 bg-transparent pb-3 text-2xl text-white placeholder-white/50 outline-none focus:border-white"
            />
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-brand px-10 py-4 text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-dark"
              >
                {searchSubmitLabel}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
