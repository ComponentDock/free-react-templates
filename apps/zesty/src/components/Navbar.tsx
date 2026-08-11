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

/* White top header (reference `header.header-section`, 65px top / 30px
   bottom padding): bold logo text left, centered nav with a 2px #FC0254
   hover underline, Pages dropdown, search trigger, and a hamburger on
   narrow viewports. */
export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-paper pb-[30px] pt-[65px]">
      <nav
        aria-label={navLabel}
        className="relative mx-auto flex max-w-[1170px] items-center justify-between px-4"
      >
        <a href="#" className="text-[28px] font-bold tracking-wide text-ink uppercase">
          {siteName}
        </a>

        <ul className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 md:flex">
          {navSections.map((item) =>
            item.children ? (
              <li key={item.label} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((open) => !open)}
                  className="relative flex items-center gap-1 py-[5px] text-[20px] font-bold text-ink after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-brand after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
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
                          className="block px-4 py-2 text-[20px] font-bold text-ink transition-colors hover:text-brand"
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
                    'relative py-[5px] text-[20px] font-bold text-ink after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-brand after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100',
                    item.current && 'after:opacity-100',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-6">
          <button
            type="button"
            aria-label={openSearchLabel}
            onClick={() => setSearchOpen(true)}
            className="text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="text-ink md:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label={navLabel}
          className="bg-paper px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)] md:hidden"
        >
          <ul>
            {navSections.map((item) => (
              <li key={item.label} className="border-b border-ink/10">
                <a
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'block py-3 text-[20px] font-bold text-ink transition-colors hover:text-brand',
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
                          className="block py-1.5 text-[16px] text-ink/70 transition-colors hover:text-brand"
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
