import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  navItems,
  siteName,
  slideMenuId,
  slideMenuLabel,
} from '../data'
import { cn } from '@free-react-templates/ui'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  /* Lock body scroll while the slide-in panel is open. */
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      {/* header-top — light bar with the centered logo and hamburger trigger. */}
      <div className="relative flex items-center justify-between border-b border-hairline bg-white px-4 py-4 sm:px-6">
        <a href="#" className="font-serif text-2xl font-bold tracking-wide text-ink">
          {siteName}
        </a>
        <span className="hidden text-[11px] uppercase tracking-[0.25em] text-meta sm:block">
          Travel &amp; Lifestyle Blog
        </span>
        <button
          type="button"
          aria-label={menuTriggerLabel}
          aria-expanded={menuOpen}
          aria-controls={slideMenuId}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center text-ink transition-colors hover:text-brand"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>

      {/* header-bottom — dark #171717 navigation bar. */}
      <nav aria-label="Main navigation" className="hidden bg-ink lg:block">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-10 px-4 py-3.5">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                className={cn(
                  'text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand',
                  item.active ? 'text-brand' : 'text-white',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fixed left slide-in panel (300px white, centered links, active rust). */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={closeMenu}
            className="absolute inset-0 h-full w-full cursor-default bg-black/40"
            tabIndex={-1}
          />
          <div
            id={slideMenuId}
            role="dialog"
            aria-label={slideMenuLabel}
            aria-modal="true"
            className="absolute inset-y-0 left-0 flex w-72 flex-col bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl font-bold text-ink">{siteName}</span>
              <button
                type="button"
                aria-label={menuCloseLabel}
                onClick={closeMenu}
                className="flex h-8 w-8 items-center justify-center text-ink transition-colors hover:text-brand"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={item.active ? 'page' : undefined}
                    onClick={closeMenu}
                    className={cn(
                      'text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand',
                      item.active ? 'text-brand' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
