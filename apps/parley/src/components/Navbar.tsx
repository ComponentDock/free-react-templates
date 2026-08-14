import { useState } from 'react'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { brand, navLinks, phoneHref, topBar } from '../data'

/** Header (source: .topper top contact bar + .ftco-navbar-light SOLID teal
 *  navbar): white top bar with address / phone / email contact items, then a
 *  solid #00bdaa teal bar with the "Parley — Consulting Agency" brand, the
 *  seven links Home · About · Team · Case Studies · Services · Blog ·
 *  Contact, a Search input, and a hamburger toggler below lg. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const topBarItems = [
    { icon: MapPin, text: topBar.address, href: undefined },
    { icon: Phone, text: topBar.phone, href: phoneHref },
    { icon: Mail, text: topBar.email, href: `mailto:${topBar.email}` },
  ] as const

  return (
    <header>
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-4 py-2 text-[13px] text-gray-600 lg:justify-start">
          {topBarItems.map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href ?? undefined}
              className="inline-flex items-center gap-2 hover:text-brand"
            >
              <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              <span>{text}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-brand">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-baseline gap-2" aria-label={brand.name}>
            <span className="text-2xl font-black text-white">{brand.name}</span>
            <span className="text-sm font-medium text-white/85">{brand.tagline}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] text-white transition-colors hover:text-white/70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <form role="search" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="nav-search" className="sr-only">
                Search
              </label>
              <input
                id="nav-search"
                type="text"
                placeholder="Search"
                className="hidden w-44 rounded-full border-0 bg-white/95 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 md:block"
              />
            </form>
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="px-4 pb-5 lg:hidden">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-t border-white/15 py-3 text-[15px] text-white transition-colors hover:text-white/70"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
