import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/**
 * Navbar — dark navy (#0d1128) bar with six white uppercase links
 * (hover/active orange), a search input with an icon button on the
 * right, and a hamburger toggle opening the same links on mobile.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <button
          type="button"
          className="text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-block px-3 py-2 text-sm font-medium uppercase text-white transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <label htmlFor="site-search" className="sr-only">
            Search site
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search"
            className="hidden w-36 rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary md:block"
          />
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-colors hover:text-primary"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-navy lg:hidden">
          <ul className="px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'block border-b border-white/10 py-3 text-sm font-medium uppercase text-white transition-colors hover:text-primary',
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
