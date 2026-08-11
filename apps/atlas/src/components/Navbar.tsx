import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuOpenLabel,
  navLabel,
  navSections,
  openSearchLabel,
  siteName,
} from '../data'
import { SearchOverlay } from './SearchOverlay'

/* Fixed transparent header over the hero (reference `header.header-area`:
   top 20px offset, 55px navbar with a 1px white bottom border, white logo
   text, 500-weight white nav links, Pages dropdown, search trigger, and a
   white hamburger on narrow viewports). */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 z-[300] mt-5 w-full">
      <nav
        aria-label={navLabel}
        className="flex h-[55px] items-center justify-between border-b border-white px-4 md:px-10"
      >
        <a
          href="#"
          className="font-heading text-[26px] font-bold tracking-wide text-white uppercase"
        >
          {siteName}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navSections.map((item) =>
            item.children ? (
              <li key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="flex items-center gap-1 font-heading text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-44 bg-paper py-2 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'font-heading text-sm font-medium text-white/80 transition-colors hover:text-white',
                    item.current && 'text-white',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={openSearchLabel}
            onClick={() => setSearchOpen(true)}
            className="text-white transition-colors hover:text-white/70"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={navLabel}
          className="bg-paper px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:hidden"
        >
          <ul>
            {navSections.map((item) => (
              <li key={item.label} className="border-b border-divider">
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'block py-3 font-heading text-sm font-medium text-ink transition-colors hover:text-brand',
                    item.current && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block py-1.5 text-sm text-text-muted transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
