import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems, type NavChild } from '../data'

interface MobileLinksProps {
  items: NavChild[]
  depth?: number
  onSelect: () => void
}

function MobileLinks({ items, depth = 0, onSelect }: MobileLinksProps) {
  return (
    <ul className={cn('space-y-1', depth > 0 && 'pl-5')}>
      {items.map((item) => (
        <li key={`${depth}-${item.label}`}>
          <a
            href={item.href}
            onClick={onSelect}
            className="block py-1.5 text-sm text-ink transition-colors hover:text-brand"
          >
            {item.label}
          </a>
          {item.children ? (
            <MobileLinks items={item.children} depth={depth + 1} onSelect={onSelect} />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

/* Absolute navigation over the hero (not sticky, per the reference) with a
   hover/focus dropdown and a 300px slide-in mobile panel. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a href="#home" className="font-display text-2xl font-bold text-white">
          Flint
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm text-white/90 transition-colors hover:text-white"
              >
                {item.label}
                {item.children ? <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" /> : null}
              </a>
              {item.children ? (
                <div className="invisible absolute left-0 top-full w-48 rounded bg-white p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="space-y-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-3 py-1.5 text-sm text-ink transition-colors hover:text-brand"
                        >
                          {child.label}
                        </a>
                        {child.children ? (
                          <ul className="pl-3">
                            {child.children.map((sub) => (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  className="block px-3 py-1 text-[13px] text-muted transition-colors hover:text-brand"
                                >
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="text-white transition-colors hover:text-white/80 lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          data-testid="mobile-menu"
          className="fixed inset-y-0 right-0 z-40 w-[300px] overflow-y-auto bg-white px-5 pb-32 pt-5 shadow-xl lg:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Close navigation"
              onClick={close}
              className="text-ink transition-colors hover:text-brand"
            >
              <X aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-2">
            <MobileLinks items={navItems} onSelect={close} />
          </nav>
        </div>
      ) : null}
    </header>
  )
}
