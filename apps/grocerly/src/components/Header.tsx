import { useState } from 'react'
import { ChevronDown, Globe, Heart, Menu, ShoppingBag, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { cart, navLinks, socialLabels, socials, topBar } from '../data'
import { BrandIcon } from './BrandIcon'

/** Two-row reference header: light top bar (email + free-shipping left,
 *  language + Login + social right) and a white mid row (wordmark, centered
 *  nav with a Pages dropdown, cart with wishlist/bag counts + item total).
 *  The nav collapses into an aria-expanded hamburger offcanvas on mobile. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  return (
    <header>
      {/* Row 1 — top bar */}
      <div className="bg-topbar">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-1.5 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span>{topBar.email}</span>
            <span aria-hidden="true" className="text-line">
              |
            </span>
            <span>{topBar.shipping}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                type="button"
                aria-label="Choose language"
                aria-expanded={languageOpen}
                onClick={() => setLanguageOpen((open) => !open)}
                className="flex items-center gap-1 uppercase hover:text-brand"
              >
                <Globe aria-hidden="true" className="h-3.5 w-3.5" />
                {topBar.languages[0]}
                <ChevronDown aria-hidden="true" className="h-3 w-3" />
              </button>
              {languageOpen && (
                <ul className="absolute right-0 top-full z-50 w-32 bg-white py-1 shadow-md">
                  {topBar.languages.map((language) => (
                    <li key={language}>
                      <a
                        href="#"
                        onClick={(event) => {
                          event.preventDefault()
                          setLanguageOpen(false)
                        }}
                        className="block px-3 py-1.5 uppercase hover:text-brand"
                      >
                        {language}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="uppercase hover:text-brand"
            >
              <span className="flex items-center gap-1">
                <User aria-hidden="true" className="h-3.5 w-3.5" />
                Login
              </span>
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              {socials.map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={socialLabels[name]}
                  onClick={(event) => event.preventDefault()}
                  className="hover:text-brand"
                >
                  <BrandIcon name={name} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 — mid row */}
      <div className="relative bg-white">
        <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-4 py-4">
          <a
            href="#home"
            onClick={(event) => event.preventDefault()}
            className="text-2xl font-extrabold uppercase text-brand"
          >
            Grocerly
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-ink lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-7 w-7" />
            ) : (
              <Menu aria-hidden="true" className="h-7 w-7" />
            )}
          </button>

          <nav
            aria-label="Main navigation"
            className={cn(
              'absolute left-0 right-0 top-full z-40 bg-white shadow-md lg:static lg:flex lg:flex-1 lg:justify-center lg:bg-transparent lg:p-0 lg:shadow-none',
              menuOpen ? 'block' : 'hidden lg:flex',
            )}
          >
            <ul className="flex flex-col lg:flex-row">
              {navLinks.map((link) => (
                <li key={link.label} className="group relative">
                  <a
                    href={link.href}
                    aria-current={link.active ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      if (link.label === 'Pages') setPagesOpen((open) => !open)
                      else setMenuOpen(false)
                    }}
                    className={cn(
                      'block px-5 py-3 text-sm font-bold uppercase text-ink transition-colors hover:text-brand lg:py-[30px]',
                      link.active && 'text-brand',
                    )}
                  >
                    <span className="flex items-center gap-1">
                      {link.label}
                      {link.children.length > 0 && (
                        <ChevronDown aria-hidden="true" className="h-3 w-3" />
                      )}
                    </span>
                  </a>
                  {link.children.length > 0 && (
                    <ul
                      className={cn(
                        'bg-white shadow-md lg:absolute lg:left-0 lg:top-full lg:w-[200px]',
                        pagesOpen || menuOpen
                          ? 'block'
                          : 'hidden lg:group-hover:block lg:group-focus-within:block',
                      )}
                    >
                      {link.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#"
                            onClick={(event) => {
                              event.preventDefault()
                              setMenuOpen(false)
                              setPagesOpen(false)
                            }}
                            className="block px-4 py-2.5 text-sm text-muted transition-colors hover:bg-topbar hover:text-brand"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 text-sm font-bold text-ink">
            <a
              href="#"
              aria-label="Wishlist"
              onClick={(event) => event.preventDefault()}
              className="relative hover:text-brand"
            >
              <Heart aria-hidden="true" className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                {cart.wishlist}
              </span>
            </a>
            <a
              href="#"
              aria-label="Shopping bag"
              onClick={(event) => event.preventDefault()}
              className="relative hover:text-brand"
            >
              <ShoppingBag aria-hidden="true" className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                {cart.bag}
              </span>
            </a>
            <span className="hidden text-xs font-bold uppercase text-muted sm:block">
              {cart.itemTotal}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
