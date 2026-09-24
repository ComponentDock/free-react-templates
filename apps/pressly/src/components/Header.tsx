import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks } from '../data'
import { SocialIcons } from './SocialIcons'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [pageOpen, setPageOpen] = useState(false)

  return (
    <header>
      {/* Top header bar */}
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Social icons left */}
          <div className="hidden items-center gap-3 md:flex">
            <SocialIcons />
          </div>

          {/* Logo center */}
          <a href="#top" className="text-3xl font-bold tracking-tight text-heading">
            {brandName}
          </a>

          {/* Controls right */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="text-body transition-colors hover:text-accent"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setPageOpen(!pageOpen)}
                aria-expanded={pageOpen}
                className="text-sm font-medium text-body transition-colors hover:text-accent"
              >
                Page
              </button>
              {pageOpen && (
                <ul className="absolute right-0 top-full z-20 mt-1 w-32 border border-gray-200 bg-white py-1 shadow-lg">
                  <li>
                    <a
                      href="#top"
                      className="block px-4 py-2 text-sm text-body hover:bg-gray-50 hover:text-accent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#top"
                      className="block px-4 py-2 text-sm text-body hover:bg-gray-50 hover:text-accent"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <button
              type="button"
              className="rounded bg-accent px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Sign in
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
              className="text-body md:hidden"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky nav bar */}
      <nav aria-label="Main" className={cn('sticky top-0 z-30 bg-accent', mobileOpen ? '' : '')}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <ul className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  className="inline-block px-4 py-3 text-sm font-medium text-white transition-colors hover:text-white/80"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle inside nav */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
            className="py-3 text-white md:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav aria-label="Mobile" className="border-t border-white/20 md:hidden">
            <ul>
              {navLinks.map((link) => (
                <li key={link} className="border-t border-white/20">
                  <a
                    href="#top"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white transition-colors hover:text-white/80"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </nav>
    </header>
  )
}
