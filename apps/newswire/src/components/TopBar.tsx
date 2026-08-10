import { useState, type FormEvent } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  menuCloseLabel,
  menuOpenLabel,
  navLinks,
  searchLabel,
  siteSearchPlaceholder,
  socials,
} from '../data'

/** Top bar: site logo, social icons, pill search form + mobile menu toggle. */
export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 lg:px-6">
        <a href="#top" className="text-2xl font-bold text-ink transition-colors hover:text-accent">
          {brandName}
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? menuCloseLabel : menuOpenLabel}
          className="ml-auto rounded p-2 text-ink transition-colors hover:text-accent lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <ul className="flex items-center gap-1">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:text-accent"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSearch} className="flex items-center gap-2" role="search">
            <label htmlFor="site-search" className="sr-only">
              {searchLabel}
            </label>
            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={siteSearchPlaceholder}
              className="h-12 w-56 rounded-full border border-line bg-white px-5 text-sm text-ink placeholder:text-body focus:border-accent focus:outline-none"
            />
            <Button
              type="submit"
              size="lg"
              aria-label={searchLabel}
              className="h-12 w-12 shrink-0 rounded-full bg-ink px-0 hover:bg-accent"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>

      {menuOpen ? (
        <nav aria-label="Mobile" className="border-t border-line bg-white lg:hidden">
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block rounded px-3 py-2.5 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:bg-soft hover:text-accent',
                    link === 'Home' ? 'text-accent' : '',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  )
}
