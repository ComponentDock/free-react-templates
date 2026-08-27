import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Services', 'Case Study', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md" role="navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-2xl text-dark tracking-tight">
          Tally
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-700 hover:text-brand transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Search + hamburger */}
        <div className="flex items-center gap-3">
          <form role="search" className="hidden md:flex items-center">
            <input
              type="search"
              role="searchbox"
              aria-label="Search"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Submit search"
              className="ml-2 text-gray-500 hover:text-brand"
            >
              <Search size={18} />
            </button>
          </form>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-gray-700 hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <form role="search" className="mt-3 flex items-center">
            <input
              type="search"
              role="searchbox"
              aria-label="Search mobile"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="border border-gray-300 rounded-full px-4 py-1.5 text-sm flex-1 focus:outline-none focus:border-brand"
            />
            <button
              type="submit"
              aria-label="Submit mobile search"
              className="ml-2 text-gray-500 hover:text-brand"
            >
              <Search size={18} />
            </button>
          </form>
        </div>
      )}
    </nav>
  )
}
