import { useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import {
  brandEnd,
  brandStart,
  cartLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  userLabel,
} from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-herobg bg-paper">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5 lg:px-10">
        <a href="#home-section" className="font-sans text-3xl font-bold text-ink">
          <span className="text-black">{brandStart}</span>
          <span className="text-brand">{brandEnd}</span>
        </a>
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  className="block px-5 py-2 font-sans text-base font-semibold text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
                {item.badge && (
                  <span className="absolute -top-1 right-2 rounded-lg bg-badge px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    {item.badge}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <a
            href="#search-section"
            aria-label={searchLabel}
            className="text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#account-section"
            aria-label={userLabel}
            className="text-ink transition-colors hover:text-brand"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#cart-section"
            aria-label={cartLabel}
            className="text-ink transition-colors hover:text-brand"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={open ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label={mobileNavLabel}
          className="border-t border-herobg bg-paper px-6 pb-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-herobg last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 py-3 font-sans text-base font-semibold text-ink transition-colors hover:text-brand"
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-lg bg-badge px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
