import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  categoryLinks,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchLabel,
  siteSearchPlaceholder,
  socials,
} from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-black shadow-[4px_0_20px_-5px_rgba(0,0,0,0.1)]' : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-4 px-4 lg:px-6">
        {/* Left: pill search input (desktop) */}
        <div className="relative hidden w-44 md:block">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-body"
            aria-hidden="true"
          />
          <label htmlFor="site-search" className="sr-only">
            {searchLabel}
          </label>
          <input
            id="site-search"
            type="search"
            placeholder={siteSearchPlaceholder}
            className="h-10 w-full rounded-full border border-line bg-white pl-9 pr-3 text-sm text-ink placeholder:text-body focus:border-accent focus:outline-none"
          />
        </div>

        {/* Center: brand */}
        <a
          href="#top"
          aria-label={brandName}
          className={`mx-auto text-center text-2xl font-bold tracking-tight transition-colors ${
            scrolled ? 'text-white hover:text-accent' : 'text-ink hover:text-accent'
          }`}
        >
          {brandName}
        </a>

        {/* Right: socials + hamburger */}
        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-2 lg:flex">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                    scrolled
                      ? 'text-white hover:bg-accent hover:text-white'
                      : 'text-body hover:bg-accent hover:text-white'
                  }`}
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
            className={`rounded p-2 transition-colors md:hidden ${
              scrolled ? 'text-white hover:text-accent' : 'text-body hover:text-accent'
            }`}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop menu */}
      <nav
        aria-label="Main"
        className={`hidden border-t md:block ${scrolled ? 'border-white/10' : 'border-line'}`}
      >
        <ul className="mx-auto flex max-w-6xl items-center gap-8 px-4 lg:px-6">
          {navLinks.map((link) => (
            <li key={link} className="relative">
              {link === 'Categories' ? (
                <>
                  <button
                    type="button"
                    onClick={() => setCategoriesOpen((value) => !value)}
                    aria-expanded={categoriesOpen}
                    className={`inline-flex items-center gap-1 py-3 text-sm font-medium transition-colors ${
                      scrolled ? 'text-white hover:text-accent' : 'text-ink hover:text-accent'
                    }`}
                  >
                    {link}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {categoriesOpen ? (
                    <ul className="absolute left-0 top-full z-50 w-44 rounded-md border border-line bg-white py-2 shadow-lg">
                      {categoryLinks.map((category) => (
                        <li key={category}>
                          <a
                            href="#top"
                            onClick={() => setCategoriesOpen(false)}
                            className="block px-4 py-2 text-sm text-ink transition-colors hover:bg-soft hover:text-accent"
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              ) : (
                <a
                  href="#top"
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className={`inline-block py-3 text-sm font-medium transition-colors ${
                    scrolled ? 'text-white hover:text-accent' : 'text-ink hover:text-accent'
                  }`}
                >
                  {link}
                </a>
              )}
            </li>
          ))}
          <li className="ml-auto">
            <a
              href="#subscribe"
              className="inline-flex h-10 items-center rounded-full border-2 border-transparent bg-accent px-6 text-sm font-medium text-white transition-all hover:border-accent hover:bg-white hover:text-accent hover:shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]"
            >
              Subscribe
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile off-canvas menu */}
      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-line bg-white px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#top"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-soft hover:text-accent"
            >
              {link}
            </a>
          ))}
          <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-body">
            Categories
          </p>
          <ul className="mt-1">
            {categoryLinks.map((category) => (
              <li key={category}>
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-3 py-2 text-sm text-body transition-colors hover:bg-soft hover:text-accent"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
