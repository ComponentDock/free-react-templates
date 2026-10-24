import { useEffect, useState, type FormEvent } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Wordmark } from './Wordmark'
import {
  menuToggle,
  navLeft,
  navRight,
  searchClose,
  searchHeading,
  searchPlaceholder,
  searchSubmit,
} from '../data'

const linkClass = 'text-[13px] font-medium uppercase text-white transition-colors hover:text-brand'

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!searchOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [searchOpen])

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!query.trim()) return
    setQuery('')
    setSearchOpen(false)
  }

  return (
    <header
      id="top"
      className="absolute inset-x-0 top-0 z-50 h-[125px] bg-[rgba(0,0,0,0.5)] md:h-[142px]"
    >
      <div className="relative mx-auto grid h-full max-w-[1170px] grid-cols-2 items-center gap-4 px-4 md:grid-cols-[1fr_auto_1fr] md:gap-[30px] md:pt-[12px]">
        <nav
          aria-label="Primary"
          className="order-2 hidden items-center justify-end gap-[20px] md:order-none md:flex"
        >
          {navLeft.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <Wordmark className="order-1 justify-self-start md:order-none md:justify-self-center" />

        <div className="order-3 flex items-center justify-end gap-[20px] md:gap-[35px]">
          <nav aria-label="Secondary" className="hidden items-center gap-[20px] md:flex">
            {navRight.map((link) => (
              <a key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className="hidden text-white transition-colors hover:text-brand md:inline-flex"
          >
            <Search className="h-[15px] w-[15px]" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuToggle}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-white/50 text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full bg-ink px-6 pb-8 pt-2 md:hidden">
          <ul className="flex flex-col">
            {[...navLeft, ...navRight].map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  className={cn(linkClass, 'block py-[10px] font-bold')}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-search px-6"
        >
          <button
            type="button"
            aria-label={searchClose}
            onClick={() => setSearchOpen(false)}
            className="absolute right-6 top-6 text-white transition-colors hover:text-brand sm:right-10 sm:top-10"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>

          <h2 className="mb-[30px] text-[26px] font-bold uppercase tracking-[4px] text-white sm:text-[40px]">
            {searchHeading}
          </h2>

          <form onSubmit={handleSearch} className="flex w-full max-w-[600px] flex-col gap-[15px] sm:flex-row">
            <label htmlFor="site-search" className="sr-only">
              Search keywords
            </label>
            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-[60px] flex-1 border-2 border-white bg-transparent px-[22px] text-[13px] uppercase italic tracking-[1px] text-white placeholder:text-white/60 focus:outline-none"
            />
            <button
              type="submit"
              className="h-[60px] shrink-0 bg-brand px-[35px] text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-brand-deep"
            >
              {searchSubmit}
            </button>
          </form>
        </div>
      )}
    </header>
  )
}
