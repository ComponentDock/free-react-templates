import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'
import {
  categoriesSubmenu,
  contactEmail,
  homeMenu,
  navLinks,
  searchPlaceholder,
  siteName,
  tagline,
  welcomeText,
} from '../data'

const navHrefs: Record<(typeof navLinks)[number], string> = {
  Home: '#top',
  Featured: '#blog',
  About: '#about',
  Categories: '#categories',
  Contact: '#footer',
}

const linkClass =
  'inline-flex h-[60px] items-center px-[25px] text-[0.95rem] font-medium uppercase tracking-[1px] text-ink transition-colors hover:bg-[#eeeeee] hover:text-brand'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header id="top" className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
      <div className="hidden border-b border-rule md:block">
        <div className="mx-auto flex h-[45px] max-w-6xl items-center justify-between px-4">
          <div className="flex items-center text-[0.9rem] italic text-ink">
            <span className="px-4">{welcomeText}</span>
            <a
              href={`mailto:${contactEmail}`}
              className="border-l border-rule px-6 transition-colors hover:text-brand"
            >
              {contactEmail}
            </a>
          </div>
          <div className="flex items-center">
            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="flex h-[45px] items-center border-x border-rule bg-white pl-4"
            >
              <label htmlFor="header-search" className="sr-only">
                {searchPlaceholder}
              </label>
              <input
                id="header-search"
                type="search"
                placeholder={searchPlaceholder}
                className="w-[140px] bg-transparent text-sm outline-none"
              />
              <button
                type="submit"
                aria-label={searchPlaceholder}
                className="px-3 text-muted transition-colors hover:text-brand"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <SocialLinks className="gap-1 px-6 text-muted" itemClassName="px-2" />
          </div>
        </div>
      </div>

      <div className="border-b border-rule py-6 text-center">
        <a href="#top" className="inline-block">
          <span className="block font-script text-[2.6rem] leading-none text-ink">
            {siteName}
          </span>
          <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.4em] text-muted">
            {tagline}
          </span>
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl items-center px-4">
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="mr-auto py-4 text-ink md:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <nav aria-label="Main navigation" className="mx-auto hidden md:block">
          <ul className="flex items-stretch">
            <li className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((open) => !open)}
                className={cn(linkClass, 'gap-2')}
              >
                Home
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {dropdownOpen && (
                <ul
                  aria-label="Home submenu"
                  className="absolute left-0 top-full z-30 min-w-[200px] bg-white text-left shadow-[0_3px_10px_rgba(0,0,0,0.25)]"
                >
                  {homeMenu.map((item) => (
                    <li key={item.label} className="border-t border-rule">
                      <a
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 text-[0.95rem] uppercase tracking-[1px] text-ink transition-colors hover:bg-[#f2f3f4] hover:text-brand"
                      >
                        {item.label}
                      </a>
                      {item.label === 'Categories' && (
                        <ul className="bg-[#fafafa]">
                          {categoriesSubmenu.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={() => setDropdownOpen(false)}
                                className="block px-8 py-2 text-[0.85rem] uppercase tracking-[1px] text-muted transition-colors hover:text-brand"
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
            </li>
            {navLinks
              .filter((label) => label !== 'Home')
              .map((label) => (
                <li key={label}>
                  <a href={navHrefs[label]} className={linkClass}>
                    {label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-rule px-4 pb-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((label) => (
              <li key={label}>
                <a
                  href={navHrefs[label]}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-rule py-3 text-[0.95rem] uppercase tracking-[1px] text-ink"
                >
                  {label}
                </a>
              </li>
            ))}
            {categoriesSubmenu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 pl-4 text-[0.85rem] uppercase tracking-[1px] text-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
