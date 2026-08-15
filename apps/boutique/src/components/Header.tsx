import { useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import {
  cartCount,
  cartLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
} from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-8 pt-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home-section" className="text-2xl font-bold uppercase tracking-wide text-white">
          {siteName}
        </a>
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-1 pt-2 text-sm font-semibold uppercase text-white transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <a href="#products-section" aria-label={cartLabel} className="relative text-white">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-ink">
              {cartCount}
            </span>
          </a>
          <form role="search" className="hidden items-center lg:flex">
            <label htmlFor="boutique-search" className="sr-only">
              {searchLabel}
            </label>
            <input
              id="boutique-search"
              type="search"
              placeholder={searchLabel}
              className="w-0 border-0 border-b border-transparent bg-transparent p-0 text-sm text-white outline-none transition-all placeholder:text-white/70 focus:w-32 focus:border-white"
            />
            <Search className="ml-2 h-5 w-5 text-white" aria-hidden="true" />
          </form>
          <button
            type="button"
            aria-label={open ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={mobileNavLabel}
          className="absolute inset-x-0 top-full mt-3 bg-footerbar/95 p-6 backdrop-blur lg:hidden"
        >
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold uppercase text-white transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
