import { useState, type FormEvent } from 'react'
import { BookOpen, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* Header (source: header.header_area — absolute transparent bar over the
   hero; nav links navy #002347, hover/active gold #fdc632). The search
   icon toggles a "Search Here" bar; on narrow viewports a hamburger opens
   a stacked navy panel with white links. */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchOpen(false)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-[99]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-[15px] py-[25px]">
        {/* Wordmark (source: a.navbar-brand — navy wordmark + gold book). */}
        <a href="#home" className="flex items-center gap-2 text-[24px] font-semibold text-primary">
          <BookOpen className="h-6 w-6 text-accent" aria-hidden="true" />
          Quad
        </a>

        {/* Desktop nav (source: ul.navbar-nav, centered six links). */}
        <nav aria-label="Main">
          <ul className="hidden items-center gap-[45px] lg:flex">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'true' : undefined}
                  className={cn(
                    'font-heading text-[14px] font-medium text-primary transition-colors hover:text-accent',
                    index === 0 && 'text-accent',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions: search toggle + mobile hamburger. */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
            className="rounded-md p-2 text-primary transition-colors hover:text-accent"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-md p-2 text-primary lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Search bar (source: div.search_input, toggled by the search icon). */}
      {searchOpen && (
        <div className="bg-white px-[15px] py-4 shadow-md">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-[1140px] gap-3">
            <input
              type="search"
              placeholder="Search Here"
              aria-label="Search Here"
              className="w-full border border-primary/20 px-4 py-2 text-[14px] text-primary outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-primary px-6 text-[13px] font-medium uppercase text-accent transition-colors hover:bg-accent hover:text-primary"
            >
              Search
            </button>
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="px-2 text-primary transition-colors hover:text-accent"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu (source: collapsed navbar — white stacked links). */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-primary px-[15px] py-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded px-4 py-2 text-[14px] text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
