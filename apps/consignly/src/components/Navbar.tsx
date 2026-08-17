import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — transparent bar over the hero with the brand left, the desktop
   menu right (Dropdown gets a panel with a nested submenu), and a 300px
   off-canvas menu sliding in from the right on narrow viewports. */
export function Navbar() {
  const [dropdown, setDropdown] = useState(false)
  const [submenu, setSubmenu] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!dropdown && !mobileOpen) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdown(false)
        setSubmenu(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dropdown, mobileOpen])

  useEffect(() => {
    if (!dropdown && !mobileOpen) return
    function onMouseDown(event: MouseEvent) {
      const nav = navRef.current
      if (nav && !nav.contains(event.target as Node)) {
        setDropdown(false)
        setSubmenu(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [dropdown, mobileOpen])

  return (
    <div ref={navRef} className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <a href="#home" className="font-display text-2xl font-bold text-white">
          {BRAND}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  setDropdown(true)
                  setSubmenu(false)
                }}
                onMouseLeave={() => {
                  setDropdown(false)
                  setSubmenu(false)
                }}
              >
                <button
                  type="button"
                  aria-expanded={dropdown}
                  onClick={() => setDropdown((value) => !value)}
                  className={cn(
                    'flex items-center gap-1 px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:text-white',
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
                  <div className="absolute left-0 top-full min-w-[180px] bg-white py-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,.1)]">
                    {link.children.map((child) => (
                      <div
                        key={child.label}
                        className="relative"
                        onMouseEnter={() => {
                          if (child.children) setSubmenu(true)
                        }}
                        onMouseLeave={() => setSubmenu(false)}
                      >
                        {child.children ? (
                          <button
                            type="button"
                            aria-expanded={submenu}
                            onClick={() => setSubmenu((value) => !value)}
                            className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-brand"
                          >
                            {child.label}
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        ) : (
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-brand"
                          >
                            {child.label}
                          </a>
                        )}
                        {child.children && submenu && (
                          <div className="absolute left-full top-0 w-48 bg-white py-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,.1)]">
                            {child.children.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-brand"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
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
                  'px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:text-white',
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
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            role="dialog"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-[300px] flex-col overflow-y-auto bg-white p-6 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold text-brand"
              >
                {BRAND}
                <span className="text-accent">.</span>
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="text-ink"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-semibold text-ink"
                  >
                    {link.label}
                  </a>
                  {link.children?.map((child) => (
                    <div key={child.label} className="ml-4 mt-2">
                      <a
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm font-medium text-muted"
                      >
                        {child.label}
                      </a>
                      {child.children?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="ml-4 mt-1 block text-sm text-muted/80"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
