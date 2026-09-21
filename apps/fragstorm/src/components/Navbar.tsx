import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* Navbar recreated from the source template's nav-options: a red (#9e0303)
   bar with hamburger left, search icon, and nav links; collapses to a
   mobile menu on small screens. */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav aria-label="Main" className="bg-nav sticky top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
          className="bg-nav-hover skew-x-[-15deg] px-7 py-3.5 text-text-primary transition-colors hover:bg-brand"
        >
          {mobileOpen ? (
            <X className="h-4 w-4 -skew-x-[15deg]" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4 -skew-x-[15deg]" aria-hidden="true" />
          )}
        </button>

        {/* Search */}
        <button
          type="button"
          onClick={() => setSearchOpen((v) => !v)}
          aria-label="Toggle search"
          className="px-4 py-3.5 text-text-primary transition-colors hover:text-brand"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
        </button>

        {/* Desktop nav links */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-block px-4 py-3.5 text-xs font-medium uppercase tracking-wider text-text-primary transition-colors hover:bg-nav-item hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen ? (
        <div className="border-t border-white/10 bg-nav-dark px-4 py-4">
          <div className="mx-auto max-w-7xl">
            <input
              type="search"
              placeholder="Search articles..."
              aria-label="Search articles"
              className="w-full rounded bg-body-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
      ) : null}

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-nav-dark px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-sm font-medium uppercase tracking-wider text-text-primary transition-colors hover:bg-nav-item hover:text-brand',
                  'sm:inline-block',
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
