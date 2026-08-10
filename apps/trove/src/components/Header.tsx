import { useState } from 'react'
import { ChevronDown, Search, X } from 'lucide-react'
import { blogDropdown, navLinks, pagesDropdown } from '../data'

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#home" className="font-display text-3xl font-semibold text-brand">
          Trove
        </a>
        <button
          type="button"
          aria-label="Toggle search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center text-indigo-deep transition-colors hover:text-brand"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Main" className="border-t border-gray-100 bg-white">
        <ul className="mx-auto flex max-w-7xl items-center justify-center gap-0 px-4 sm:px-6">
          {navLinks.map((link) => {
            if (link === 'Pages') {
              return (
                <li key={link} className="relative">
                  <button
                    type="button"
                    aria-expanded={pagesOpen}
                    onClick={() => setPagesOpen((current) => !current)}
                    className="flex items-center gap-1 px-4 py-4 text-xs font-medium tracking-widest uppercase text-gray-800 transition-colors hover:text-indigo-deep"
                  >
                    {link}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {pagesOpen && (
                    <ul className="absolute left-0 top-full z-50 w-44 border border-gray-100 bg-white py-2 shadow-lg">
                      {pagesDropdown.map((page) => (
                        <li key={page}>
                          <a
                            href="#home"
                            onClick={() => setPagesOpen(false)}
                            className="block px-4 py-2 text-sm text-muted transition-colors hover:text-indigo-deep"
                          >
                            {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            }
            if (link === 'Blog') {
              return (
                <li key={link} className="relative">
                  <button
                    type="button"
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen((current) => !current)}
                    className="flex items-center gap-1 px-4 py-4 text-xs font-medium tracking-widest uppercase text-gray-800 transition-colors hover:text-indigo-deep"
                  >
                    {link}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {blogOpen && (
                    <ul className="absolute left-0 top-full z-50 w-44 border border-gray-100 bg-white py-2 shadow-lg">
                      {blogDropdown.map((page) => (
                        <li key={page}>
                          <a
                            href="#home"
                            onClick={() => setBlogOpen(false)}
                            className="block px-4 py-2 text-sm text-muted transition-colors hover:text-indigo-deep"
                          >
                            {page}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            }
            return (
              <li key={link}>
                <a
                  href="#home"
                  className="block px-4 py-4 text-xs font-medium tracking-widest uppercase text-gray-800 transition-colors hover:text-indigo-deep"
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {searchOpen && (
        <div className="brand-gradient">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6">
            <input
              type="search"
              aria-label="Search"
              placeholder="Search or enter website name."
              className="w-full border-0 bg-transparent text-sm text-white outline-none placeholder:text-white/80"
            />
            <button
              type="button"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
              className="flex h-8 w-8 shrink-0 items-center justify-center text-white transition-opacity hover:opacity-80"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
