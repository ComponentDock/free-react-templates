import { useState } from 'react'
import { ChevronDown, Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { brand, cartCount, navItems } from '../data'

/** White storefront bar: boxed wordmark, centered uppercase menu, icon
 *  controls with a pink cart badge, and a collapsed mobile menu + search
 *  field that both toggle from the icon cluster. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-6 px-4 py-3 md:px-8">
        <a
          href="#home"
          className="border-2 border-ink px-[10px] py-2 text-xl leading-none tracking-[0.2em] text-black uppercase"
        >
          {brand.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[15px] tracking-[0.05em] text-ink uppercase transition-colors hover:text-brand"
                >
                  {item.label}
                  {index === 0 && <ChevronDown className="h-3 w-3" aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
            className="text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>

          <a
            href="#popular"
            aria-label="Wishlist"
            className="hidden text-ink transition-colors hover:text-brand sm:block"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href="#popular"
            aria-label="Shopping bag"
            className="relative text-ink transition-colors hover:text-brand"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] leading-4 font-normal text-white">
              {cartCount}
            </span>
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="drapely-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-line bg-white">
          <div className="mx-auto flex w-full max-w-[1200px] items-center gap-3 px-4 py-3 md:px-8">
            <Search className="h-4 w-4 text-body" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search products"
              className="h-10 w-full border border-line px-3 text-sm text-ink focus:border-brand focus:outline-none"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="text-ink transition-colors hover:text-brand"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {menuOpen && (
        <nav
          id="drapely-mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto w-full max-w-[1200px] px-4 py-2 md:px-8">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-line last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm tracking-[0.05em] text-ink uppercase transition-colors hover:text-brand"
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
