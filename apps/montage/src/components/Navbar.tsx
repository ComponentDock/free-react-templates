import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  searchPlaceholder,
  searchSubmitLabel,
} from '../data'

/* Dark navbar (reference `.classy-navbar`): Home / Videos / Pages ▾ /
   Features ▾ / Music / Contact with the active item in brand pink, a
   search field on the right, and a hamburger menu on small screens. */
export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuery('')
  }

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const linkClass = (active?: boolean) =>
    cn(
      'flex items-center gap-1 px-3 py-6 font-display text-sm font-bold uppercase tracking-wide transition-colors',
      active ? 'bg-brand text-white' : 'text-white hover:bg-brand/20',
    )

  return (
    <nav aria-label={navLabel} className="relative z-40 bg-coal">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <ul className="hidden items-stretch lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() => toggleMenu(item.label)}
                    className={linkClass(false)}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>
                  {openMenu === item.label && (
                    <ul className="absolute left-0 top-full w-44 bg-smoke py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            className="block px-4 py-2 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand hover:text-white"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={linkClass(item.active)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <form
          role="search"
          aria-label={searchLabel}
          onSubmit={submitSearch}
          className="flex items-center gap-2 py-3 lg:py-0"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label={searchPlaceholder}
            placeholder={searchPlaceholder}
            className="w-28 bg-white/10 px-3 py-2 font-display text-xs text-white outline-none placeholder:text-white/60 sm:w-44"
          />
          <button
            type="submit"
            aria-label={searchSubmitLabel}
            className="text-white transition-colors hover:text-brand"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-coal lg:hidden">
          <nav aria-label={mobileNavLabel} className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        aria-expanded={openMenu === item.label}
                        onClick={() => toggleMenu(item.label)}
                        className="flex w-full items-center justify-between py-3 font-display text-sm font-bold uppercase tracking-wide text-white"
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      </button>
                      {openMenu === item.label && (
                        <ul className="flex flex-col pl-4">
                          {item.children.map((child) => (
                            <li key={child}>
                              <a
                                href="#"
                                className="block py-2 font-display text-sm uppercase tracking-wide text-white/80 hover:text-brand"
                              >
                                {child}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      aria-current={item.active ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block py-3 font-display text-sm font-bold uppercase tracking-wide',
                        item.active ? 'text-brand' : 'text-white hover:text-brand',
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </nav>
  )
}
