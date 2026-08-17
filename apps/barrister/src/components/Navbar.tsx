import { useEffect, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — absolute over the hero, transparent with white branding and
   links. Desktop menu shows a hover/click dropdown under "Attorneys"
   (with a nested submenu under "Dropdown"); mobile collapses into a
   solid white slide-in drawer with a hamburger toggle. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [submenu, setSubmenu] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
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
                onMouseLeave={() => {
                  setDropdown(false)
                  setSubmenu(false)
                }}
              >
                <a
                  href={link.href}
                  aria-expanded={dropdown}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white',
                    dropdown && 'text-white',
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                {dropdown && (
                  <div className="absolute left-0 top-full w-56 bg-white py-2 shadow-lg">
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
                            className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-black/70 transition-colors hover:bg-surface hover:text-black"
                          >
                            {child.label}
                            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                        ) : (
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm text-black/70 transition-colors hover:bg-surface hover:text-black"
                          >
                            {child.label}
                          </a>
                        )}
                        {child.children && submenu && (
                          <div className="absolute left-full top-0 w-48 bg-white py-2 shadow-lg">
                            {child.children.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2 text-sm text-black/70 transition-colors hover:bg-surface hover:text-black"
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
                className={cn(
                  'text-sm font-medium transition-colors',
                  link.active ? 'text-white' : 'text-white/70 hover:text-white',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="bg-white px-6 pb-8 pt-2 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block py-3 text-sm font-medium',
                  link.active ? 'text-brand' : 'text-black/80',
                )}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="mb-2 ml-4 border-l border-edge pl-4">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-black/60"
                      >
                        {child.label}
                      </a>
                      {child.children && (
                        <ul className="ml-4 border-l border-edge pl-4">
                          {child.children.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-sm text-black/50"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  )
}