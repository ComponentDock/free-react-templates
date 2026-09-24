import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import {
  siteName,
  navItems,
  appointmentLabel,
  navLabel,
  mobileNavLabel,
  menuTriggerLabel,
  menuCloseLabel,
} from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav aria-label={navLabel} className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-2 text-heading">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Heart aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="font-heading text-2xl font-bold">{siteName}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex" role="list">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  item.active ? 'text-brand' : 'text-heading'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#appointment"
          className="hidden rounded bg-brand px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover lg:inline-block"
        >
          {appointmentLabel}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={mobileOpen}
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="space-y-2" role="list" aria-label={mobileNavLabel}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-brand ${
                    item.active ? 'text-brand' : 'text-heading'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            className="mt-3 block rounded bg-brand px-6 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            onClick={() => setMobileOpen(false)}
          >
            {appointmentLabel}
          </a>
        </div>
      )}
    </nav>
  )
}
