import { useState } from 'react'
import { Cross, Menu, Phone, X } from 'lucide-react'
import {
  appointmentLabel,
  hotline,
  hotlineLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-heading">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-2 to-brand text-white">
            <Cross aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl font-bold">{siteName}</span>
        </a>

        <nav aria-label={navLabel} className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={cn(
                'text-sm font-medium capitalize text-heading transition-colors hover:text-brand',
                item.active && 'text-brand',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:09856"
            aria-label={hotlineLabel}
            className="flex items-center gap-2 text-sm font-medium text-heading transition-colors hover:text-brand"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            {hotline}
          </a>
          <a
            href="#appointment"
            className="inline-flex h-11 items-center bg-gradient-to-r from-brand-2 to-brand px-7 text-sm font-medium text-white transition-[background-position] duration-300 hover:bg-brand-hover"
          >
            {appointmentLabel}
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center text-heading lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 text-sm font-medium capitalize text-heading transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex h-11 items-center justify-center bg-gradient-to-r from-brand-2 to-brand px-7 text-sm font-medium text-white"
          >
            {appointmentLabel}
          </a>
        </nav>
      )}
    </header>
  )
}
