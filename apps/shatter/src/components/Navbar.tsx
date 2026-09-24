import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'Archive', 'Category', 'Pages', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')

  return (
    <nav
      className="sticky top-0 z-50 bg-dark text-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg
            className="h-8 w-8 text-brand"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-wider">SHATTER</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">Magazine</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-brand',
                activeLink === link ? 'text-brand' : 'text-white',
              )}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white transition-colors hover:text-brand"
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-white/10 bg-dark px-4 py-3">
          <div className="mx-auto max-w-7xl">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full rounded-sm bg-dark-card px-4 py-2 text-sm text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-brand"
              aria-label="Search articles"
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-dark md:hidden">
          <div className="flex flex-col px-4 py-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveLink(link)
                  setIsOpen(false)
                }}
                className={cn(
                  'py-2 text-left text-sm font-medium transition-colors hover:text-brand',
                  activeLink === link ? 'text-brand' : 'text-white',
                )}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
