import { useState, type FormEvent } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  menuToggleLabel,
  mobileMenuLabel,
  navLinks,
  searchLabel,
  searchPlaceholder,
  socialLabels,
  socialLinks,
} from '../data'

const sectionHref = (label: string): string => `#${label.toLowerCase()}`

export function Header() {
  const [open, setOpen] = useState(false)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <header className="bg-white shadow-[0_3px_10px_2px_rgba(0,0,0,0.15)]">
      {/* Top bar: search form left, social icons right */}
      <div className="border-b border-chips">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <form role="search" onSubmit={handleSearch} className="flex items-center gap-1">
            <input
              type="search"
              placeholder={searchPlaceholder}
              aria-label={searchLabel}
              className="h-8 w-44 border-0 bg-transparent text-sm text-ink outline-none placeholder:text-meta sm:w-56"
            />
            <button
              type="submit"
              aria-label={searchLabel}
              className="text-primary transition-colors hover:text-ink"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <div className="flex items-center gap-4">
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
      </div>

      {/* Centered wordmark logo */}
      <div className="mx-auto max-w-6xl px-4 pt-10 text-center sm:px-6">
        <a href="#home" className="inline-block">
          <h1 className="font-serif text-4xl font-light italic text-ink transition-colors hover:text-primary">
            {brandName}
          </h1>
        </a>
      </div>

      {/* Main nav */}
      <nav
        aria-label="Primary"
        className="mx-auto mt-7 hidden max-w-6xl items-center justify-center px-4 pb-3 sm:px-6 lg:flex"
      >
        {navLinks.map((label) => (
          <a
            key={label}
            href={sectionHref(label)}
            className="px-6 py-1 text-[13px] font-medium uppercase tracking-[1px] text-ink transition-colors hover:text-primary"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <div className="flex items-center justify-end px-4 pb-3 pt-4 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={menuToggleLabel}
          className="rounded p-2 text-ink"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      <nav aria-label={mobileMenuLabel} className={cn('lg:hidden', open ? 'block' : 'hidden')}>
        <ul className="space-y-1 border-t border-chips px-4 pb-6 pt-2">
          {navLinks.map((label) => (
            <li key={label}>
              <a
                href={sectionHref(label)}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-[13px] font-medium uppercase tracking-[1px] text-ink hover:bg-soft hover:text-primary"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
