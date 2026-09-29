import { useState } from 'react'
import { Search } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function Navbar() {
  const [query, setQuery] = useState('')

  return (
    <nav
      data-testid="custom-navbar"
      className="border-b border-border-navbar bg-white"
      style={{ boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)' }}
    >
      <div className="mx-auto max-w-[1140px] px-4">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col items-center py-5 md:flex-row md:items-center md:py-0">
          {/* Left side: Brand + Search */}
          <div className="flex w-full flex-col items-center md:w-3/4 md:flex-row md:items-center">
            {/* Brand */}
            <h3 className="m-0 p-0 pr-0 pb-4 text-center text-xl font-medium md:mr-12 md:pb-0 md:text-left">
              <a href="/" className="text-brand-blue transition-colors hover:text-brand-hover">
                Brand
              </a>
            </h3>

            {/* Search form */}
            <form className="relative w-full" onSubmit={handleSubmit} data-testid="search-form">
              <span
                className="absolute left-[15px] top-1/2 -translate-y-1/2 text-icon-color"
                aria-hidden="true"
              >
                <Search className="h-4 w-4" />
              </span>
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search"
                className="w-full rounded-[30px] border border-input-border bg-white py-2 pl-[35px] pr-3 text-sm text-text-body transition-all placeholder:text-placeholder-text focus:border-input-focus focus:outline-none focus:shadow-none"
              />
            </form>
          </div>

          {/* Right side: Nav links */}
          <div className="mt-4 text-center md:mt-0 md:w-1/4 md:text-left">
            <ul className="m-0 inline-flex list-none p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block py-[25px] pl-5 font-medium text-brand-blue transition-colors hover:text-brand-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
