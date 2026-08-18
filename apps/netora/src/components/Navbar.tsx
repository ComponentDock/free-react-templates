import { useState } from 'react'
import { ChevronDown, Headphones, Lock, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, phoneHref, phoneNumber } from '../data'
import { socialLinks } from './BrandIcons'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top announcement bar */}
      <div className="border-b border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <p className="truncate text-xs text-body md:text-sm">
            Now Hiring: Are you a driven and motivated 1st Line IT Support Engineer?
          </p>
          <div className="hidden items-center gap-4 md:flex">
            <ul className="flex items-center gap-3 text-body">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} aria-label={label} className="transition-colors hover:text-brand">
                    <Icon className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="relative">
              <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-body"
              />
              <input
                type="search"
                placeholder="Search or enter website name"
                aria-label="Search"
                className="w-56 rounded-full border border-hairline bg-white py-1.5 pl-9 pr-3 text-xs text-navy outline-none transition-colors placeholder:text-body/70 focus:border-brand"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center bg-brand text-white">
            <Lock aria-hidden="true" className="size-5" />
          </span>
          <span className="font-display text-2xl font-bold tracking-wide text-navy-deep">
            NETORA
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    aria-haspopup="true"
                    onClick={() => setBlogOpen((v) => !v)}
                    className="flex items-center gap-1 text-sm font-medium text-navy transition-colors hover:text-brand"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', blogOpen && 'rotate-180')}
                    />
                  </button>
                  {blogOpen && (
                    <ul className="absolute left-0 top-full w-44 border border-hairline bg-white py-2 shadow-lg">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            className="block px-4 py-2 text-sm text-body transition-colors hover:bg-section hover:text-brand"
                            onClick={() => setBlogOpen(false)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-navy transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden border-2 border-brand px-8 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white xl:block"
          >
            Free Quote
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <span className="flex size-11 items-center justify-center bg-section text-brand">
              <Headphones aria-hidden="true" className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-body">Have any Question?</p>
              <a href={phoneHref} className="text-sm font-medium text-navy hover:text-brand">
                Call: {phoneNumber}
              </a>
            </div>
          </div>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center border border-hairline text-navy lg:hidden"
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-hairline bg-white lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    aria-expanded={mobileBlogOpen}
                    onClick={() => setMobileBlogOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-navy"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('size-4 transition-transform', mobileBlogOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileBlogOpen && (
                    <ul className="pl-4">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-body hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-navy hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
