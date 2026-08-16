import { useState } from 'react'
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { navLinks } from '../data'

interface HeaderProps {
  cartCount: number
  onSearchClick: () => void
  onCartClick: () => void
}

/** Fixed header (top 40px, height 84px): Mannequin wordmark, centered nav,
 *  search / cart (count badge) / account icons, mobile hamburger. */
export function Header({ cartCount, onSearchClick, onCartClick }: HeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-10 z-40 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur">
      <div className="mx-auto flex h-[84px] max-w-[1700px] items-center justify-between px-6 lg:px-16">
        <a href="#home" className="text-[24px] font-bold uppercase tracking-[4px] text-ink-soft">
          Mannequin
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-[14px] font-medium uppercase tracking-wide text-ink-soft transition-colors hover:text-brand"
            >
              {link}
              {link === 'Features' && (
                <span
                  aria-hidden="true"
                  className="absolute -top-2 right-0 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white"
                >
                  hot
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-ink-soft">
          <button
            type="button"
            aria-label="Search"
            onClick={onSearchClick}
            className="transition-colors hover:text-brand"
          >
            <Search className="h-[26px] w-[26px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${cartCount} items`}
            onClick={onCartClick}
            className="relative transition-colors hover:text-brand"
          >
            <ShoppingCart className="h-[26px] w-[26px]" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand px-1 text-[11px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </button>
          <a
            href="#"
            aria-label="My account"
            className="hidden transition-colors hover:text-brand sm:block"
          >
            <User className="h-[26px] w-[26px]" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Wishlist"
            className="hidden transition-colors hover:text-brand sm:block"
          >
            <Heart className="h-[26px] w-[26px]" aria-hidden="true" />
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="p-1 transition-colors hover:text-brand lg:hidden"
          >
            {open ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <Menu className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-6 pb-6 lg:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setOpen(false)}
                className="border-b border-gray-100 py-3 text-[14px] font-medium uppercase tracking-wide text-ink-soft"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
