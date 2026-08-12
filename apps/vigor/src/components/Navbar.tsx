import { useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { BRAND, MEGA_COLUMNS, NAV_LINKS, PAGES_DROPDOWN, PHONE } from '../data'

function sectionHref(label: string): string {
  if (label === 'Home') return '#home'
  if (label === 'About Us') return '#about'
  if (label === 'Services') return '#services'
  if (label === 'News') return '#newsletter'
  if (label === 'Contact') return '#contact'
  return '#'
}

/**
 * Navbar — absolute over the hero: brand logo left in a thin green-bordered
 * box, centered white uppercase links (Home / Pages▾ / Mega Menu▾ / About Us
 * / News / Contact) with a Pages dropdown and a 4-column mega menu, and a
 * green gradient phone CTA on the right. On narrow viewports a hamburger
 * toggles a mobile menu with black link text.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)

  // The mobile panel shares dropdown state with the desktop nav; closing it
  // resets the dropdowns so the desktop mega menu / dropdowns do not stay
  // open underneath after a mobile interaction.
  const closeMenu = () => {
    setOpen(false)
    setPagesOpen(false)
    setMegaOpen(false)
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center px-4 lg:px-8">
        <a href="#home" aria-label={`${BRAND} home`} className="py-6">
          <span className="inline-block border-2 border-brand px-4 py-2 text-xl font-extrabold uppercase tracking-wide text-white">
            {BRAND}
          </span>
        </a>

        <nav aria-label="Main" className="mx-auto hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={sectionHref(label)}
                  className="inline-block px-5 py-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-light"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => {
                  setPagesOpen((v) => !v)
                  setMegaOpen(false)
                }}
                className="inline-flex items-center gap-1 px-5 py-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-light"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="absolute left-0 top-full w-44 border-t-2 border-brand bg-white py-2 shadow-lg">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href={sectionHref(item)}
                        className="block px-5 py-2.5 text-sm text-ink transition-colors hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="relative">
              <button
                type="button"
                aria-expanded={megaOpen}
                onClick={() => {
                  setMegaOpen((v) => !v)
                  setPagesOpen(false)
                }}
                className="inline-flex items-center gap-1 px-5 py-8 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-brand-light"
              >
                Mega Menu <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {megaOpen && (
                <div className="absolute left-1/2 top-full grid w-[640px] -translate-x-1/2 grid-cols-4 gap-6 border-t-2 border-brand bg-white p-6 shadow-lg">
                  {MEGA_COLUMNS.map((column, columnIndex) => (
                    <ul key={columnIndex}>
                      {column.map((item) => (
                        <li key={item}>
                          <a
                            href={sectionHref(item)}
                            className="block py-1.5 text-sm text-ink transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>

        <a
          href={'tel:' + PHONE.replace(/[^\d+]/g, '')}
          className="ml-auto hidden items-center gap-2 bg-gradient-to-r from-brand-light to-brand px-7 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-white lg:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          {PHONE}
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v)
            setPagesOpen(false)
            setMegaOpen(false)
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
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={sectionHref(label)}
                  onClick={closeMenu}
                  className="block py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={pagesOpen}
                onClick={() => {
                  setPagesOpen((v) => !v)
                  setMegaOpen(false)
                }}
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                Pages <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="pl-4">
                  {PAGES_DROPDOWN.map((item) => (
                    <li key={item}>
                      <a
                        href={sectionHref(item)}
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
            <li>
              <button
                type="button"
                aria-expanded={megaOpen}
                onClick={() => {
                  setMegaOpen((v) => !v)
                  setPagesOpen(false)
                }}
                className="flex w-full items-center justify-between py-2.5 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand"
              >
                Mega Menu <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              {megaOpen && (
                <div className="pl-4">
                  {MEGA_COLUMNS.map((column, columnIndex) => (
                    <ul key={columnIndex}>
                      {column.map((item) => (
                        <li key={item}>
                          <a
                            href={sectionHref(item)}
                            onClick={closeMenu}
                            className="block py-2 text-sm text-ink transition-colors hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          </ul>
          <a
            href={'tel:' + PHONE.replace(/[^\d+]/g, '')}
            onClick={closeMenu}
            className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-brand-light to-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
