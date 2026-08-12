import { useState } from 'react'
import { ChevronDown, Menu, Search, Truck, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND_NAME, DELIVERY_SUBMENU, NAV_LINKS } from '../data'

const navLinkClass =
  'px-0.5 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-brand'

/**
 * Header — sticky white bar (source `header.main_menu`): "Cargoly" text logo
 * with violet truck icon, centered uppercase nav with a Delivery dropdown,
 * a search icon, and a mobile hamburger menu.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [deliveryOpen, setDeliveryOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
        <a
          href="#"
          aria-label={BRAND_NAME}
          className="flex items-center gap-2 font-display text-2xl font-bold text-ink"
        >
          <Truck className="h-6 w-6 text-brand" aria-hidden="true" />
          {BRAND_NAME}
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link === 'Delivery' ? (
                <li
                  key={link}
                  className="relative"
                  onMouseEnter={() => setDeliveryOpen(true)}
                  onMouseLeave={() => setDeliveryOpen(false)}
                  onFocus={() => setDeliveryOpen(true)}
                  onBlur={() => setDeliveryOpen(false)}
                >
                  <a href="#" className={cn(navLinkClass, 'inline-flex items-center gap-1')}>
                    {link}
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </a>
                  {deliveryOpen ? (
                    <ul className="absolute left-0 top-full z-30 mt-2 min-w-[160px] bg-white py-2 shadow-lg">
                      {DELIVERY_SUBMENU.map((subLink) => (
                        <li key={subLink}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors duration-300 hover:text-brand"
                          >
                            {subLink}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={link}>
                  <a href="#" className={navLinkClass}>
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Search" className="text-ink transition-colors hover:text-brand">
            <Search className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-line bg-white px-4 pb-4 pt-2 lg:hidden">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
