import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchOpenLabel,
  siteName,
} from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-2xl font-bold uppercase tracking-wider text-ink">
          {siteName}
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label={navLabel} className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={searchOpenLabel}
              onClick={() => setSearchOpen(true)}
              className="text-ink transition-colors hover:text-muted"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={menuOpenLabel}
              onClick={() => setOpen(true)}
              className="text-ink transition-colors hover:text-muted lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <span className="text-2xl font-bold uppercase tracking-wider text-ink">{siteName}</span>
            <button
              type="button"
              aria-label={menuCloseLabel}
              onClick={() => setOpen(false)}
              className="text-ink transition-colors hover:text-muted"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={mobileNavLabel} className="flex flex-col px-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-gray-100 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:text-muted"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 px-4 backdrop-blur-sm">
          <button
            type="button"
            aria-label={searchCloseLabel}
            onClick={() => setSearchOpen(false)}
            className="absolute right-6 top-6 text-ink transition-colors hover:text-muted"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <div className="flex w-full max-w-xl items-center gap-3 border-b-2 border-ink pb-2">
            <Search className="h-5 w-5 text-muted" aria-hidden="true" />
            <span className="text-sm font-semibold uppercase tracking-wider text-muted">
              Search
            </span>
          </div>
        </div>
      )}
    </header>
  )
}
