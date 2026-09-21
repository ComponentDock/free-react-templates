import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Navbar recreated from the source template's top bar: dark navy background
   with logo on the left and navigation links on the right. Collapses to a
   mobile menu on small screens. */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <nav aria-label="Main" className="sticky top-0 z-40 bg-navy-deep">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-xl font-bold uppercase tracking-wider text-text-white"
        >
          {BRAND}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-light transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search + hamburger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Toggle search"
            className="p-2 text-text-light transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="p-2 text-text-light transition-colors hover:text-brand md:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen ? (
        <div className="border-t border-border-dark bg-navy px-4 py-4">
          <div className="mx-auto max-w-7xl">
            <input
              type="search"
              placeholder="Search anime..."
              aria-label="Search anime"
              className="w-full rounded bg-navy-deep px-4 py-3 text-sm text-text-white placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand"
            />
          </div>
        </div>
      ) : null}

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="border-t border-border-dark bg-navy-deep px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-2.5 text-sm font-medium text-text-light transition-colors hover:bg-navy-card hover:text-brand',
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
