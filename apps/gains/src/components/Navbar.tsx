import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS, PAGES_DROPDOWN } from '../data'

/**
 * Navbar — dark header over the hero: brand wordmark left, uppercase nav
 * links (Home / About / Courses / Blog / Pages▾ / Contact) with a Pages
 * dropdown, and a gradient pill "Get started" CTA on the right. On narrow
 * viewports a hamburger toggles a white mobile panel.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
    setPagesOpen(false)
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full bg-night/40">
      <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        <a href="#home" aria-label={`${BRAND} home`} className="py-5">
          <span className="inline-flex items-center gap-2 text-3xl font-bold uppercase tracking-wide text-white">
            <span className="text-brand">G</span>ains
          </span>
        </a>

        <nav aria-label="Main" className="mx-auto hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-block px-5 py-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((v) => !v)}
                className="inline-flex items-center gap-1 px-5 py-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="absolute left-0 top-full w-44 border-t-2 border-brand bg-white py-2 shadow-lg">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#trainers"
                        onClick={closeMenu}
                        className="block px-5 py-2.5 text-sm text-ink transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <a
          href="#subscribe"
          className="ml-auto hidden rounded-full border-2 border-brand bg-gradient-to-r from-brand to-brand-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-right lg:inline-block"
          style={{ backgroundSize: '200% auto' }}
        >
          Get started
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v)
            setPagesOpen(false)
          }}
          className="ml-auto p-3 text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => setPagesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="pl-4">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href="#trainers"
                        onClick={closeMenu}
                        className="block py-2 text-sm text-ink transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <a
            href="#subscribe"
            onClick={closeMenu}
            className="mt-3 inline-block rounded-full border-2 border-brand bg-gradient-to-r from-brand to-brand-2 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get started
          </a>
        </div>
      )}
    </header>
  )
}
