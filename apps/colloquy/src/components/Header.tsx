import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import {
  buyTicketsLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
  tagline,
} from '../data'
import { BrandIcon } from './BrandIcon'

const socials = ['pinterest', 'facebook', 'twitter', 'dribbble', 'behance', 'linkedin']

function Logo() {
  return (
    <a href="#home-section" className="inline-flex flex-col items-start gap-1">
      <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-[34px] font-medium leading-none text-transparent">
        {siteName}
      </span>
      <span className="text-xs text-ink/70">{tagline}</span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-[127px] max-w-7xl items-center justify-between px-4">
        <Logo />
        <ul className="hidden items-center gap-[18px] lg:flex">
          {socials.map((name) => (
            <li key={name}>
              <a
                href="#contact-section"
                aria-label={name}
                className="text-ink/70 transition-colors hover:text-brand"
              >
                <BrandIcon name={name} />
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-label={open ? menuCloseLabel : menuTriggerLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <nav aria-label={navLabel}>
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block px-4 py-5 text-sm font-medium text-ink transition-colors hover:text-brand ${
                      index === 0 ? 'bg-gradient-to-r from-brand to-brand-light text-white' : ''
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <form role="search" className="flex items-center">
              <label htmlFor="header-search" className="sr-only">
                {searchLabel}
              </label>
              <input
                id="header-search"
                type="search"
                placeholder={searchLabel}
                className="w-0 border-0 bg-transparent p-0 text-sm text-ink outline-none transition-all focus:w-36 focus:border-b focus:border-border"
              />
              <Search className="ml-2 h-5 w-5 text-ink/70" aria-hidden="true" />
            </form>
            <a
              href="#pricing-section"
              className="hidden h-[52px] w-[205px] items-center justify-center bg-gradient-to-r from-brand to-brand-light text-sm font-medium text-white lg:flex"
            >
              {buyTicketsLabel}
            </a>
          </div>
        </div>
      </div>

      {open && (
        <nav
          aria-label={mobileNavLabel}
          className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-brand to-brand-light lg:hidden"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="text-2xl font-medium text-white">{siteName}</span>
            <button
              type="button"
              aria-label={menuCloseLabel}
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto px-6 pb-10">
            <p className="mb-3 text-center text-sm text-white/80">Follow us on Social Media</p>
            <ul className="flex items-center justify-center gap-6">
              {socials.map((name) => (
                <li key={name}>
                  <a href="#contact-section" aria-label={name} className="text-white">
                    <BrandIcon name={name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
