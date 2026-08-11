import { useState } from 'react'
import { Menu, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { asideOpenLabel, navHover, navLabel, navLinks, searchOpenLabel, siteName } from '../data'
import { AsideDrawer } from './AsideDrawer'
import { SearchOverlay } from './SearchOverlay'

/* Reference `header#header` → `#nav-fixed`: fixed white 70px bar with a
   hairline inset bottom border; brand wordmark left, category nav links with
   hairline dividers and per-category hover colors, aside + search toggles
   right. The search overlay and off-canvas drawer render from here. */
export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [asideOpen, setAsideOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-[90] border-b border-line bg-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-heading text-2xl font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand"
        >
          {siteName}
        </a>
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex h-[70px] items-stretch">
            {navLinks.map((link) => (
              <li key={link.label} className="flex">
                <a
                  href={link.href}
                  className={cn(
                    'flex items-center px-5 text-sm font-semibold capitalize text-ink shadow-[inset_-1px_0_0_0_#dfe3eb] transition-colors',
                    navHover(link.categoryId),
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label={asideOpenLabel}
            aria-controls="nav-aside"
            aria-expanded={asideOpen}
            onClick={() => setAsideOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={searchOpenLabel}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {asideOpen && <AsideDrawer open onClose={() => setAsideOpen(false)} />}
    </header>
  )
}
