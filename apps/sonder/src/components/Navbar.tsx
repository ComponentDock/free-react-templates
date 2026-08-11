import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  dropdowns,
  navLinks,
  searchPlaceholder,
  siteName,
  socialLabels,
  socialLinks,
} from '../data'

type DropdownLabel = (typeof dropdowns)[number]['label']

/** Dark page header: social icons + search top row, centered wordmark,
    uppercase nav with Categories/Blog dropdowns, mobile hamburger menu
    (reference: .s-pageheader--home on the Philosophy preview). */
export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownLabel | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-charcoal text-white [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_14px)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <ul className="hidden items-center gap-5 sm:flex" aria-label="Header social links">
            {socialLinks.map((name) => (
              <li key={name}>
                <a
                  href="#home"
                  aria-label={socialLabels[name]}
                  className="flex h-8 w-8 items-center justify-center text-white/70 transition-colors hover:text-white"
                >
                  <BrandIcon name={name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          <a href="#home" className="font-serif text-2xl tracking-wide text-white sm:text-3xl">
            {siteName}
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white"
            >
              {searchOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Search className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center text-white/80 transition-colors hover:text-white lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
            <Search className="h-5 w-5 shrink-0 text-white/50" aria-hidden="true" />
            <input
              type="search"
              aria-label="Search"
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </div>
        )}

        <nav aria-label="Primary" className="mt-6 hidden justify-center lg:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={index === 0 ? '#home' : `#${link.toLowerCase()}`}
                  className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
            {dropdowns.map((dropdown) => (
              <li key={dropdown.label} className="relative">
                <button
                  type="button"
                  aria-expanded={openDropdown === dropdown.label}
                  onClick={() =>
                    setOpenDropdown((current) =>
                      current === dropdown.label ? null : dropdown.label,
                    )
                  }
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors hover:text-white"
                >
                  {dropdown.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${openDropdown === dropdown.label ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {openDropdown === dropdown.label && (
                  <ul className="absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 border border-white/10 bg-charcoal py-2 shadow-xl">
                    {dropdown.items.map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-charcoal lg:hidden">
          <ul className="flex flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={index === 0 ? '#home' : `#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-white/10 py-3 text-xs uppercase tracking-[0.15rem] text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
            {dropdowns.map((dropdown) => (
              <li key={dropdown.label} className="border-b border-white/10 py-3">
                <span className="text-xs font-semibold uppercase tracking-[0.15rem] text-white">
                  {dropdown.label}
                </span>
                <ul className="mt-2 space-y-1 pl-4">
                  {dropdown.items.map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1.5 text-xs uppercase tracking-[0.15rem] text-white/70 transition-colors hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
