import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  brandName,
  headerSocials,
  menuCloseLabel,
  menuOpenLabel,
  pagesSubmenu,
  pagesSubmenuLabel,
  pagesToggleLabel,
  topNavLinks,
} from '../data'
import { BrandIcon } from './BrandIcon'

const navLinkClasses =
  'inline-block px-2.5 text-[13px] uppercase tracking-wide text-ink transition-colors hover:text-accent'

/** Transparent header over the hero: logo, uppercase nav with a "Pages"
 *  dropdown, social icons on the right, off-canvas mobile menu. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-[1999]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 lg:px-6">
        <a
          href="#top"
          className="text-xl font-bold uppercase tracking-wide text-ink transition-colors hover:text-accent"
        >
          {brandName}
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {topNavLinks.map((link) => (
              <li key={link} className="flex">
                <a
                  href="#top"
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className={cn(navLinkClasses, link === 'Home' && 'text-accent')}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="relative flex">
              <button
                type="button"
                onClick={() => setPagesOpen((value) => !value)}
                aria-expanded={pagesOpen}
                aria-haspopup="true"
                aria-label={pagesToggleLabel}
                className={cn(navLinkClasses, 'flex items-center gap-1')}
              >
                {pagesSubmenuLabel}
                <ChevronDown
                  className={cn('h-3.5 w-3.5 transition-transform', pagesOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>
              <ul
                className={cn(
                  'absolute left-2.5 top-full z-50 mt-1 w-40 border border-line bg-white py-2 shadow-lg',
                  pagesOpen ? 'block' : 'hidden',
                )}
              >
                {pagesSubmenu.map((item) => (
                  <li key={item}>
                    <a
                      href="#top"
                      className="block px-4 py-2 text-[13px] uppercase tracking-wide text-ink transition-colors hover:text-accent"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="ml-5 flex items-center gap-3 border-l border-line pl-5">
            {headerSocials.map((social) => (
              <BrandIcon key={social.name} name={social.name} label={social.label} />
            ))}
          </div>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="rounded p-2 text-ink transition-colors hover:text-accent lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label={menuCloseLabel}
              className="mb-6 self-end rounded p-1 text-ink transition-colors hover:text-accent"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <ul className="space-y-1">
              {topNavLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block rounded px-3 py-2.5 text-sm uppercase tracking-wide text-ink transition-colors hover:bg-soft hover:text-accent',
                      link === 'Home' && 'text-accent',
                    )}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setMobilePagesOpen((value) => !value)}
                  aria-expanded={mobilePagesOpen}
                  aria-label={pagesToggleLabel}
                  className="flex w-full items-center justify-between rounded px-3 py-2.5 text-sm uppercase tracking-wide text-ink transition-colors hover:bg-soft hover:text-accent"
                >
                  {pagesSubmenuLabel}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', mobilePagesOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {mobilePagesOpen ? (
                  <ul className="mt-1 space-y-1 pl-4">
                    {pagesSubmenu.map((item) => (
                      <li key={item}>
                        <a
                          href="#top"
                          onClick={() => setMenuOpen(false)}
                          className="block rounded px-3 py-2 text-sm uppercase tracking-wide text-ink transition-colors hover:bg-soft hover:text-accent"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
              <li className="flex items-center gap-3 px-3 pt-3">
                {headerSocials.map((social) => (
                  <BrandIcon key={social.name} name={social.name} label={social.label} />
                ))}
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
