import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export function Header() {
  const [pagesOpen, setPagesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_15px_60px_rgba(3,18,59,0.07)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="#top" className="flex items-center" aria-label="Drayage home">
          <span className="-skew-x-[30deg] bg-brand px-5 py-2 font-display text-xl uppercase tracking-[3px] text-white">
            <span className="inline-block skew-x-[30deg]">
              <span className="font-bold">Dray</span>
              <span className="font-light">age</span>
            </span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) =>
            'dropdown' in link ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-expanded={pagesOpen}
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center gap-1 font-display text-sm font-medium uppercase tracking-[1.5px] text-navy transition-colors hover:text-brand"
                >
                  {link.label}
                  <ChevronDown aria-hidden="true" className="h-4 w-4" />
                </button>
                {pagesOpen && (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-44 border-t-2 border-brand bg-white py-2 shadow-lg">
                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a
                          href={link.href}
                          className="block px-4 py-2 font-body text-sm text-body transition-colors hover:bg-navy hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-display text-sm font-medium uppercase tracking-[1.5px] transition-colors hover:text-brand ${
                  link.label === 'Home' ? 'text-brand' : 'text-navy'
                }`}
              >
                {link.label}
              </a>
            ),
          )}
        </nav>
        <button
          type="button"
          aria-label="Toggle search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-navy transition-colors hover:text-brand"
        >
          <Search aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
      {searchOpen && (
        <div className="border-t border-divider bg-white px-4 py-3">
          <div className="mx-auto max-w-6xl">
            <label htmlFor="site-search" className="sr-only">
              Search the site
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search..."
              className="w-full max-w-md border border-divider px-4 py-2 font-body text-sm text-ink outline-none focus:border-brand"
            />
          </div>
        </div>
      )}
    </header>
  )
}
