import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Navbar (reference `.main_menu`): light #f8f8f8 bar with a 1px top
 *  border, the CARGOMATE wordmark, uppercase Roboto Condensed links (Home
 *  active, Pages and Blog with hover dropdowns), and a hamburger toggler
 *  that collapses the menu on narrow viewports. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-t border-[rgba(221,221,221,0.38)] bg-mist">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="py-5 font-heading text-2xl font-bold tracking-wide text-navy">
          <span className="text-brand">C</span>ARGOMATE
        </a>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href, current, submenu }) => (
            <li key={label} className={cn(submenu && 'group relative')}>
              <a
                href={href}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'mr-11 inline-flex items-center gap-1 font-heading text-[13px] font-bold tracking-[0.5px] text-navy uppercase transition-colors hover:text-brand',
                  current && 'text-brand',
                )}
              >
                {label}
                {submenu ? <ChevronDown className="h-3 w-3" aria-hidden="true" /> : null}
              </a>
              {submenu ? (
                <ul className="invisible absolute top-full left-0 z-50 min-w-44 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {submenu.map((item) => (
                    <li key={item}>
                      <a
                        href={href}
                        className="block px-5 py-2.5 font-heading text-xs font-bold tracking-wide text-navy uppercase transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-mist px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href, current, submenu }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'block border-b border-line py-3 font-heading text-[13px] font-bold tracking-wide text-navy uppercase transition-colors hover:text-brand',
                    current && 'text-brand',
                  )}
                >
                  {label}
                </a>
                {submenu ? (
                  <ul className="pl-4">
                    {submenu.map((item) => (
                      <li key={item}>
                        <a
                          href={href}
                          onClick={() => setOpen(false)}
                          className="block border-b border-line py-2.5 text-xs font-bold tracking-wide text-navy/70 uppercase transition-colors hover:text-brand"
                        >
                          {item}
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
    </header>
  )
}
