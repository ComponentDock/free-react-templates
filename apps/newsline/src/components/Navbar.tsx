import { useState } from 'react'
import { ChevronDown, Menu, Play, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

/* Red main navbar (reference `.vizew-main-menu`): logo left, uppercase
   links right; Home active with a white underline; Pages/Features open
   dropdowns; hamburger menu on small screens. */
export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = (label: string) => {
    setOpenMenu((current) => (current === label ? null : label))
  }

  const linkClass = (active?: boolean) =>
    cn(
      'flex items-center gap-1 px-4 py-6 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors',
      active
        ? 'border-b-[3px] border-white'
        : 'border-b-[3px] border-transparent hover:bg-white/10',
    )

  return (
    <nav aria-label={navLabel} className="sticky top-0 z-40 bg-brand">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          aria-label={`${siteName} — home`}
          className="flex items-center gap-2 py-5 text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white">
            <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl font-bold uppercase tracking-wide">
            {siteName}
          </span>
        </a>

        <ul className="hidden items-stretch lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onClick={() => toggleMenu(item.label)}
                    className={linkClass(false)}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>
                  {openMenu === item.label && (
                    <ul className="absolute left-0 top-full w-52 bg-ink py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            className="block px-4 py-2 font-display text-sm uppercase tracking-wide text-white transition-colors hover:bg-brand"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={linkClass(item.active)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand lg:hidden">
          <nav aria-label={mobileNavLabel} className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        aria-expanded={openMenu === item.label}
                        onClick={() => toggleMenu(item.label)}
                        className="flex w-full items-center justify-between py-3 font-display text-sm font-bold uppercase tracking-wide text-white"
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      </button>
                      {openMenu === item.label && (
                        <ul className="flex flex-col pl-4">
                          {item.children.map((child) => (
                            <li key={child}>
                              <a
                                href="#"
                                className="block py-2 font-display text-sm uppercase tracking-wide text-white/80 hover:text-white"
                              >
                                {child}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      aria-current={item.active ? 'page' : undefined}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block py-3 font-display text-sm font-bold uppercase tracking-wide',
                        item.active ? 'text-white underline' : 'text-white/80 hover:text-white',
                      )}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </nav>
  )
}
