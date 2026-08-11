import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { menuCloseLabel, menuOpenLabel, openSearchLabel, searchLabel } from '../data'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { SearchOverlay } from './SearchOverlay'

/* White 78px header (reference `header.s-header`, absolute over the gray
   featured section): wordmark left, centered nav, search trigger + mobile
   hamburger right, full-screen search overlay. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 z-50 h-[78px] w-full bg-paper text-center">
      <div className="absolute top-1/2 left-5 -translate-y-1/2 md:left-10">
        <Logo />
      </div>

      <Navbar menuOpen={menuOpen} />

      <div className="absolute top-0 right-4 flex h-full items-center gap-4 md:right-[30px]">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-black transition-colors hover:text-black/50 md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
        <button
          type="button"
          aria-label={openSearchLabel}
          onClick={() => setSearchOpen(true)}
          className="flex items-center gap-2 text-black transition-colors hover:text-black/50"
        >
          <Search className="h-[18px] w-[18px]" aria-hidden="true" />
          <span className="hidden text-xs font-semibold tracking-[2px] uppercase md:inline">
            {searchLabel}
          </span>
        </button>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
