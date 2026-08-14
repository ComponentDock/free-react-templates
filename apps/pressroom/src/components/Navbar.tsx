import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'
import { SearchModal } from './SearchModal'

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-brand shadow-[0_0_36px_0_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-5 py-4 text-[15px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-black/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          className="p-4 text-white lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-expanded={searchOpen}
            aria-label="Search"
            className="p-4 text-white transition-colors hover:bg-black/10"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-white/20 bg-brand lg:hidden">
          <ul className="px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block border-b border-white/10 py-3 text-sm font-medium uppercase tracking-wide',
                    'text-white transition-colors last:border-0 hover:bg-black/10',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
