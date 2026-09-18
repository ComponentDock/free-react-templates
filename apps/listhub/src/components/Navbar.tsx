import { useState } from 'react'
import { Search, Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Search */}
        <form
          className="hidden items-center gap-2 rounded-md border border-border-light bg-bg-light px-3 py-2 md:flex"
          role="search"
        >
          <Search className="h-4 w-4 text-text-muted" aria-hidden="true" />
          <input
            type="text"
            placeholder="What are you finding?"
            className="bg-transparent text-sm text-text-dark outline-none placeholder:text-text-muted"
            aria-label="Search"
          />
        </form>

        {/* Logo */}
        <a href="/" className="text-xl font-bold text-heading" aria-label="Listhub home">
          Listhub
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          <a href="#" className="text-sm font-medium text-text-dark hover:text-brand">
            Home
          </a>
          <a href="#" className="text-sm font-medium text-text-dark hover:text-brand">
            Explore
          </a>

          {/* Pages dropdown */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-text-dark hover:text-brand"
              onClick={() => setPagesOpen(!pagesOpen)}
              aria-expanded={pagesOpen}
              aria-haspopup="true"
            >
              Pages <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {pagesOpen && (
              <ul className="absolute left-0 top-full z-10 mt-1 w-40 rounded-md border border-border-light bg-white py-1 shadow-lg">
                {['Blog', 'Blog Details', 'Elements', 'Contact', 'Details'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-bg-light"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="#"
            className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-hover"
          >
            Add Listing
          </a>
          <a href="#" className="text-sm font-medium text-text-dark hover:text-brand">
            My Account
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-border-light bg-white px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-3 py-3">
            <li>
              <a href="#" className="block text-sm font-medium text-text-dark hover:text-brand">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm font-medium text-text-dark hover:text-brand">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm font-medium text-text-dark hover:text-brand">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm font-medium text-text-dark hover:text-brand">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md bg-brand px-4 py-2 text-center text-sm font-medium text-white hover:bg-brand-hover"
              >
                Add Listing
              </a>
            </li>
            <li>
              <a href="#" className="block text-sm font-medium text-text-dark hover:text-brand">
                My Account
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
