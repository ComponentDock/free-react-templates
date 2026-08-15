import { useState } from 'react'
import { Compass, Menu, Phone, Plane, Search, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  closeSearchLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  phoneNumber,
  searchDialogLabel,
  searchFormLabel,
  searchInputLabel,
  searchInputPlaceholder,
  searchSubmitLabel,
  searchTriggerLabel,
  socials,
} from '../data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-6 py-6 lg:px-24 lg:py-7">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2">
          <Compass className="h-8 w-8 text-teal" aria-hidden="true" />
          <span className="font-sans text-2xl font-medium text-navy">{brandName}</span>
        </a>

        <nav aria-label={navLabel} className="hidden items-center lg:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="font-sans text-base capitalize text-navy transition-colors hover:text-teal"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="absolute left-0 top-full hidden min-w-40 bg-white p-2 shadow-lg group-hover:block">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-3 py-2 font-sans text-sm capitalize text-navy transition-colors hover:text-teal"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <p className="flex items-center gap-2 font-sans text-base text-navy">
            <Phone className="h-4 w-4 text-coral" aria-hidden="true" />
            {phoneNumber}
          </p>
          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center text-navy transition-colors hover:text-teal"
                >
                  {social.type === 'brand' ? (
                    <BrandIcon name={social.name} label={social.label} className="h-4 w-4" />
                  ) : (
                    <Plane className="h-4 w-4" aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={searchTriggerLabel}
            onClick={() => setSearchOpen(true)}
            className="flex h-8 w-8 items-center justify-center text-navy transition-colors hover:text-teal"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center text-navy lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label={mobileNavLabel} className="mt-4 bg-white px-6 pb-6 shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-soft last:border-0">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 font-sans text-base capitalize text-navy transition-colors hover:text-teal"
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={closeMenu}
                          className="block py-2 font-sans text-sm capitalize text-navy transition-colors hover:text-teal"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={searchDialogLabel}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setSearchOpen(false)
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4"
        >
          <div className="w-full max-w-xl rounded-md bg-white p-6">
            <form aria-label={searchFormLabel} onSubmit={handleSearchSubmit} className="flex gap-2">
              <label htmlFor="wayfarer-search-input" className="sr-only">
                {searchInputLabel}
              </label>
              <input
                id="wayfarer-search-input"
                type="search"
                placeholder={searchInputPlaceholder}
                className="h-[50px] flex-1 rounded-md border border-field-line bg-white px-4 font-sans text-base text-navy outline-none placeholder:text-placeholder focus:border-swiper-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-coral px-8 font-sans text-base capitalize text-white transition-colors hover:bg-teal"
              >
                {searchSubmitLabel}
              </button>
            </form>
            <button
              type="button"
              aria-label={closeSearchLabel}
              onClick={() => setSearchOpen(false)}
              className="mt-4 flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-coral"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
