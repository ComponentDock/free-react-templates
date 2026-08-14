import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { BRAND } from '../data'

interface TopBarProps {
  mobileOpen: boolean
  onToggleMenu: () => void
}

/* site-navbar-top — the store's utility row: search input left, bordered
   uppercase logo center, account / wishlist / cart-with-count icons right
   (the count badge is a static "2" in the original), plus the mobile-only
   hamburger toggle. */
export function TopBar({ mobileOpen, onToggleMenu }: TopBarProps) {
  return (
    <div className="border-b border-[#f3f3f4] px-4 py-5 md:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center">
        <form
          role="search"
          className="relative hidden w-full max-w-[220px] sm:block"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-body"
          />
          <label htmlFor="site-search" className="sr-only">
            Search
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="Search"
            className="w-full border-b border-transparent bg-transparent pb-1 pl-6 text-[14px] text-ink outline-none transition-colors placeholder:text-body focus:border-brand"
          />
        </form>

        <a
          href="#home"
          className="mx-auto inline-block border-2 border-ink px-[10px] py-1 text-[20px] font-bold uppercase tracking-[0.2em] text-ink"
        >
          {BRAND}
        </a>

        <div className="flex items-center justify-end gap-4 sm:gap-5">
          <a
            href="#contact"
            aria-label="Account"
            className="hidden text-ink transition-colors hover:text-brand sm:inline-flex"
          >
            <User aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="#catalogue"
            aria-label="Wishlist"
            className="hidden text-ink transition-colors hover:text-brand sm:inline-flex"
          >
            <Heart aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="#shop"
            aria-label="Cart"
            className="relative inline-flex text-ink transition-colors hover:text-brand"
          >
            <ShoppingCart aria-hidden="true" className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[12px] text-white">
              2
            </span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={onToggleMenu}
            className="cursor-pointer p-1 text-ink lg:hidden"
          >
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
