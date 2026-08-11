import { useEffect, useState } from 'react'
import { ChefHat, ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuOpenLabel,
  navLabel,
  navSections,
  openSearchLabel,
  siteName,
  tagline,
} from '../data'
import { SearchOverlay } from './SearchOverlay'

/* White header (reference `header.header-section`): serif-italic wordmark
   logo with a small uppercase tagline + chef-hat icon, centered nav with
   the active link in pink (2px underline grows on hover), Pages dropdown,
   search trigger right, and a hamburger + slide-down menu on narrow
   viewports. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    if (!dropdownOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [dropdownOpen])

  const underline =
    'relative after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 hover:after:scale-x-100'

  return (
    <header className="bg-paper pt-[65px] pb-[30px]">
      <div className="mx-auto grid max-w-[1170px] grid-cols-[1fr_auto_1fr] items-center px-4">
        <a href="#home" className="flex items-center gap-2">
          <ChefHat className="h-8 w-8 text-brand" aria-hidden="true" />
          <span className="text-center">
            <span
              data-logo-wordmark
              className="block font-logo text-[28px] font-bold text-ink italic"
            >
              {siteName}
            </span>
            <span className="block text-[11px] font-bold tracking-[0.3em] text-meta uppercase">
              {tagline}
            </span>
          </span>
        </a>

        <nav aria-label={navLabel}>
          <ul className="flex items-center gap-[35px]">
            {navSections.map((item) =>
              item.children ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen((open) => !open)}
                    className={cn(
                      'flex items-center gap-1 text-[20px] font-bold text-ink',
                      underline,
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute top-full left-0 z-[950] w-44 bg-paper py-2 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-[15px] text-ink transition-colors hover:text-brand"
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
                    aria-current={item.active ? 'page' : undefined}
                    className={cn(
                      'text-[20px] font-bold text-ink',
                      underline,
                      item.active && 'text-brand',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-4">
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
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-ink lg:hidden"
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
        <nav
          aria-label={`${navLabel} (mobile)`}
          className="bg-paper px-4 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)] lg:hidden"
        >
          <ul>
            {navSections.map((item) => (
              <li key={item.label} className="border-b border-divider">
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'block py-3 text-[20px] font-bold text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
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
                          className="block py-1.5 text-[15px] text-meta transition-colors hover:text-brand"
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
