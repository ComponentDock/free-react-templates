import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a href="#home-section" className="text-2xl font-black uppercase tracking-wide text-ink">
          {siteName}
        </a>

        {/* Desktop nav. */}
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'relative py-2 text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:text-brand',
                    item.active &&
                      'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-brand',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu trigger. */}
        <button
          type="button"
          aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile full-screen dark panel. */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="absolute inset-x-0 top-20 z-50 flex h-[calc(100vh-5rem)] flex-col bg-ink px-6 pb-8 pt-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10">
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
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
