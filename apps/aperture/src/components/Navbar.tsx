import { useState } from 'react'
import { Camera, ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  aboutDropdownLabel,
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchModelLabel,
  searchOpenLabel,
  searchPlaceholder,
  searchSubmitLabel,
  siteName,
} from '../data'

/** Green underline bar behind the label (6px, #0ECE91), grown on hover/active —
    matches `.main__menu ul li>a:after` (height 6px, z-index -1, width 0 → 100%). */
const underlineBar =
  "after:absolute after:bottom-2 after:left-0 after:-z-10 after:h-1.5 after:w-full after:bg-brand after:content-[''] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_50px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-7 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-ink">
          <Camera className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="font-display text-xl uppercase tracking-wide">{siteName}</span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label={navLabel} className="hidden items-center lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-label={aboutDropdownLabel}
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((value) => !value)}
                    className={cn(
                      'relative flex items-center gap-1 px-2 py-1 font-display text-sm uppercase tracking-wide text-muted transition-colors hover:text-ink',
                      underlineBar,
                    )}
                  >
                    {item.label}
                    <ChevronDown aria-hidden="true" className="h-3 w-3" />
                  </button>
                  {aboutOpen && (
                    <div className="absolute left-0 top-full z-50 mt-6 w-44 bg-white p-2 shadow-[0_9px_50px_rgba(0,0,0,0.1)]">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-3 py-2 text-sm text-ink transition-colors hover:bg-black/5 hover:text-brand"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'relative px-2 py-1 font-display text-sm uppercase tracking-wide transition-colors',
                    item.active ? 'text-ink' : 'text-muted hover:text-ink',
                    underlineBar,
                    item.active && 'after:scale-x-100',
                  )}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-5">
            <button
              type="button"
              aria-label={searchOpenLabel}
              onClick={() => setSearchOpen(true)}
              className="text-ink transition-colors hover:text-brand"
            >
              <Search className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={menuOpenLabel}
              onClick={() => setOpen(true)}
              className="text-ink transition-colors hover:text-brand lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between px-4 py-7 sm:px-6">
            <span className="flex items-center gap-2 text-ink">
              <Camera className="h-6 w-6 text-brand" aria-hidden="true" />
              <span className="font-display text-xl uppercase tracking-wide">{siteName}</span>
            </span>
            <button
              type="button"
              aria-label={menuCloseLabel}
              onClick={() => setOpen(false)}
              className="text-ink transition-colors hover:text-brand"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={mobileNavLabel} className="flex flex-col px-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 font-display text-sm uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 px-4 backdrop-blur">
          <button
            type="button"
            aria-label={searchCloseLabel}
            onClick={closeSearch}
            className="absolute right-6 top-6 text-ink transition-colors hover:text-brand"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <form
            role="search"
            aria-label={searchModelLabel}
            onSubmit={submitSearch}
            className="flex w-full max-w-xl items-center gap-3 border-b-2 border-ink pb-2"
          >
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent font-display text-lg uppercase text-ink outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              aria-label={searchSubmitLabel}
              className="shrink-0 text-ink transition-colors hover:text-brand"
            >
              <Search className="h-6 w-6" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </header>
  )
}
