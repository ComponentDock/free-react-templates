import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — transparent and absolutely positioned over the hero with the
   brand left, five links, a Dropdown submenu, and a mobile offcanvas panel
   for small screens. */
export function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!dropdown && !mobileOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdown(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dropdown, mobileOpen])

  useEffect(() => {
    if (!dropdown && !mobileOpen) return
    function onMouseDown(event: MouseEvent) {
      const header = document.querySelector('header')!
      if (!header.contains(event.target as Node)) {
        setDropdown(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [dropdown, mobileOpen])

  useEffect(() => {
    if (mobileOpen) closeRef.current?.focus()
  }, [mobileOpen])

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <a href="#home-section" className="font-display text-2xl font-bold text-white">
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <button
                  type="button"
                  aria-expanded={dropdown}
                  onClick={() => setDropdown((value) => !value)}
                  className={cn(
                    'flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white',
                    dropdown && 'text-white',
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn('h-3.5 w-3.5 transition-transform', dropdown && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {dropdown && (
                  <div className="absolute left-1/2 top-full w-56 -translate-x-1/2 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-black/70 transition-colors hover:bg-light hover:text-black"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.active ? 'true' : undefined}
                className={cn(
                  'text-sm text-white/70 transition-colors hover:text-white',
                  link.active && 'text-white',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
          className="text-white lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-overlay"
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileOpen(false)}
        >
          <div
            role="dialog"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 h-full w-72 overflow-y-auto bg-white p-6 shadow-xl"
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 text-ink"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <a
              href="#home-section"
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-bold text-ink"
            >
              {BRAND}
              <span className="text-brand">.</span>
            </a>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-black/80"
                  >
                    {link.label}
                  </a>
                  {link.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="ml-4 mt-2 block text-sm text-black/60"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
