import { useState } from 'react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, shopDropdown } from '../data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  return (
    <div className="relative z-40 bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-6 px-4 md:h-[104px]">
        <a href="#" className="flex flex-col leading-none" aria-label="Vogue online store">
          <span className="font-display text-2xl font-semibold uppercase tracking-wide text-brand md:text-3xl">
            Vogue
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-secondary">
            Online Store
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === 'Shop' ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <a
                    href={link.href}
                    aria-expanded={shopOpen}
                    className="text-base font-medium text-brand transition-colors hover:text-brand"
                  >
                    Shop
                  </a>
                  {shopOpen && (
                    <ul className="absolute left-0 top-full w-48 border border-lightgrey bg-white py-2 shadow-lg">
                      {shopDropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block px-5 py-2 text-sm text-brand transition-colors hover:bg-lightgrey/40"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      'text-base font-medium text-brand underline decoration-2 underline-offset-8 transition-colors',
                      link.label === 'Home'
                        ? 'decoration-brand'
                        : 'decoration-transparent hover:decoration-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-5 text-brand">
          <a
            href="#"
            aria-label="Search"
            className="hidden transition-colors hover:text-accent sm:block"
          >
            <Search className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Account"
            className="hidden transition-colors hover:text-accent sm:block"
          >
            <User className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Shopping cart, 2 items"
            className="relative transition-colors hover:text-accent"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-lightgrey text-[11px] font-semibold text-brand">
              2
            </span>
          </a>
          <div className="hidden items-center gap-2 text-sm font-medium text-brand md:flex">
            <a href="#" className="transition-colors hover:text-accent">
              Register
            </a>
            <span className="text-secondary">|</span>
            <a href="#" className="transition-colors hover:text-accent">
              Sign in
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="transition-colors hover:text-accent lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-lightgrey bg-white lg:hidden">
          <ul className="px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-base font-medium text-brand"
                >
                  {link.label}
                </a>
                {link.label === 'Shop' && (
                  <ul className="pl-4">
                    {shopDropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1.5 text-sm text-secondary"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="flex items-center gap-2 py-2 text-sm font-medium text-brand">
              <a href="#">Register</a>
              <span className="text-secondary">|</span>
              <a href="#">Sign in</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
