import { Search } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <nav className="w-full border-b border-border-light bg-white">
      <div
        data-testid="navbar-inner"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3"
      >
        {/* Brand */}
        <a href="/" className="text-xl font-bold text-brand-blue">
          Brand
        </a>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-medium text-nav-text transition-colors hover:text-brand-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div
          data-testid="search-wrapper"
          className="flex items-center gap-2 rounded-full border border-search-border px-4 py-2"
        >
          <Search className="h-4 w-4 text-search-placeholder" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="w-32 bg-transparent text-sm text-gray-700 outline-none placeholder:text-search-placeholder sm:w-48"
          />
        </div>
      </div>
    </nav>
  )
}
