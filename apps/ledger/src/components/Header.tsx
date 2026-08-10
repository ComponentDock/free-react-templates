import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems, searchPlaceholder, siteName, socialLabels, socialNames } from '../data'
import { BrandIcon } from './BrandIcon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-[33px]">
        <a href="#" className="font-display text-2xl font-bold text-ink">
          {siteName}
        </a>

        <nav
          aria-label="Main"
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        >
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href="#"
                  className={cn(
                    'inline-flex items-center gap-1 px-5 py-[7px] font-display text-[13px] font-semibold uppercase text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />}
                </a>
                {item.dropdown && (
                  <div className="invisible absolute top-full left-0 z-30 min-w-[160px] bg-dropdown opacity-0 shadow-[0_10px_30px_0_rgba(0,0,0,0.08)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.dropdown.map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="block px-5 py-2 text-[13px] text-ink transition-colors hover:text-brand"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center md:flex">
            <label htmlFor="ledger-search" className="sr-only">
              Search
            </label>
            <input
              id="ledger-search"
              type="search"
              placeholder={searchPlaceholder}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
              className={cn(
                'h-9 rounded-[10px] border-2 border-brand-tint bg-dropdown px-3 text-[13px] text-ink outline-none transition-all duration-300',
                searchOpen ? 'w-44' : 'w-0 border-transparent px-0',
              )}
            />
            <Search className="pointer-events-none -ml-7 h-4 w-4 text-ink" aria-hidden="true" />
          </div>
          <ul className="hidden items-center gap-3 lg:flex">
            {socialNames.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  aria-label={socialLabels[name]}
                  className="text-ink transition-colors hover:text-brand"
                >
                  <BrandIcon name={name} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full right-0 left-0 z-40 border-t border-line bg-white px-4 py-6 lg:hidden">
          <ul className="flex flex-col items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                <a
                  href="#"
                  onClick={closeMenu}
                  className={cn(
                    'block py-2 font-display text-[13px] font-semibold uppercase text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
                {item.dropdown &&
                  item.dropdown.map((label) => (
                    <a
                      key={label}
                      href="#"
                      onClick={closeMenu}
                      className="block py-1.5 text-[13px] text-meta transition-colors hover:text-brand"
                    >
                      {label}
                    </a>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
