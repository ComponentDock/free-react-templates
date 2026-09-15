import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Sermons', 'Events', 'Blog', 'Contact'] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="relative bg-white shadow-sm">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <a href="#home" className="font-heading text-2xl font-bold text-brand">
          Grace<span className="text-ink">craft</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-6 font-nav text-sm font-semibold uppercase tracking-wide text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-ink transition-colors hover:text-brand"
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {searchOpen && (
        <div className="border-t bg-white px-4 py-3">
          <form className="mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="flex-1 rounded border px-3 py-2 text-sm"
            />
            <button type="submit" className="bg-brand px-4 py-2 text-sm text-white rounded">
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t bg-white px-4 py-4 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-4 font-nav text-sm font-semibold uppercase tracking-wide text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
