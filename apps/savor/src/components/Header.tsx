import { useState, type FormEvent } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  aboutBlurb,
  brandName,
  closeMenuLabel,
  dropdownToggleLabel,
  menuToggleLabel,
  mobileMenuLabel,
  navLinks,
  pagesDropdown,
  pagesDropdownLabel,
  searchLabel,
  searchPlaceholder,
  socialLabels,
  socialLinks,
  subscribeButtonLabel,
} from '../data'

const sectionHref = (label: string): string => `#${label.toLowerCase()}`

export function Header() {
  const [pagesOpen, setPagesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <header className="bg-white">
      {/* Top row: hamburger, nav (with Pages dropdown), search, subscribe */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label={menuToggleLabel}
            className="rounded p-2 text-ink lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {navLinks.map((label) =>
              label === pagesDropdownLabel ? (
                <div key={label} className="relative">
                  <button
                    type="button"
                    onClick={() => setPagesOpen((value) => !value)}
                    aria-expanded={pagesOpen}
                    aria-label={dropdownToggleLabel}
                    className="flex items-center gap-1 px-5 py-2 text-[13px] font-bold uppercase tracking-[1px] text-ink transition-colors hover:text-primary"
                  >
                    {label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {pagesOpen && (
                    <ul className="absolute left-0 top-full z-20 w-52 border border-line bg-white py-2 shadow-lg">
                      {pagesDropdown.map((sub) => (
                        <li key={sub}>
                          <a
                            href="#home"
                            className="block px-5 py-2 text-sm text-body transition-colors hover:text-primary"
                          >
                            {sub}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  key={label}
                  href={sectionHref(label)}
                  className="px-5 py-2 text-[13px] font-bold uppercase tracking-[1px] text-ink transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <form
              role="search"
              onSubmit={handleSearch}
              className="hidden items-center gap-1 sm:flex"
            >
              <input
                type="search"
                placeholder={searchPlaceholder}
                aria-label={searchLabel}
                className="h-9 w-32 border-0 border-b border-line bg-transparent text-sm text-ink outline-none placeholder:text-meta focus:border-primary"
              />
              <button
                type="submit"
                aria-label={searchLabel}
                className="text-ink transition-colors hover:text-primary"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            <a
              href="#subscribe"
              className="hidden bg-primary px-6 py-3 text-[13px] font-extrabold uppercase tracking-[1px] text-white transition-colors hover:bg-ink md:inline-block"
            >
              {subscribeButtonLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Logo row: centered wordmark + social icons */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <a href="#home" className="lg:order-2">
          <h1 className="font-serif text-5xl font-bold italic text-ink transition-colors hover:text-primary">
            {brandName}
          </h1>
        </a>
        <div className="hidden items-center gap-4 lg:flex lg:order-1">
          {socialLinks.map((name) => (
            <a
              key={name}
              href="#home"
              aria-label={socialLabels[name]}
              className="text-meta transition-colors hover:text-primary"
            >
              <BrandIcon name={name} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Slide-in mobile menu */}
      {menuOpen && (
        <nav aria-label={mobileMenuLabel} className="fixed inset-0 z-50 flex bg-black/40 lg:hidden">
          <div className="flex h-full w-72 flex-col overflow-y-auto bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-serif text-3xl font-bold italic text-ink">{brandName}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={closeMenuLabel}
                className="rounded p-1 text-ink"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-6 space-y-1">
              {navLinks.map((label) => (
                <li key={label}>
                  <a
                    href={sectionHref(label)}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded px-3 py-2 text-[13px] font-bold uppercase tracking-[1px] text-ink transition-colors hover:bg-soft hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-line pt-6">
              <p className="font-serif text-xl text-ink">About the author</p>
              <p className="mt-2 text-sm leading-relaxed">{aboutBlurb}</p>
              <div className="mt-4 flex items-center gap-4">
                {socialLinks.map((name) => (
                  <a
                    key={name}
                    href="#home"
                    aria-label={socialLabels[name]}
                    className="text-ink transition-colors hover:text-primary"
                  >
                    <BrandIcon name={name} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#subscribe"
              onClick={() => setMenuOpen(false)}
              className={cn(
                'mt-8 inline-block bg-primary px-6 py-3 text-center text-[13px]',
                'font-extrabold uppercase tracking-[1px] text-white transition-colors hover:bg-ink',
              )}
            >
              {subscribeButtonLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
