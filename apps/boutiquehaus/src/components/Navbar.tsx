import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Category', href: '#category' },
  { label: 'Men', href: '#men' },
  { label: 'Women', href: '#women' },
  { label: 'Latest', href: '#latest' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home-header" className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-mist sm:px-6">
          <div className="flex items-center gap-4">
            <a href="tel:+12312-3-1209" className="hover:text-brand">
              +12312-3-1209
            </a>
            <a href="mailto:support@boutiquehaus.com" className="hover:text-brand">
              support@boutiquehaus.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand">
              login
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Primary"
      >
        <a href="#home" className="text-2xl font-bold uppercase tracking-wide text-ink">
          Boutique<span className="text-brand">Haus</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand"
            >
              Pages
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-1 w-48 rounded border border-gray-100 bg-white py-2 shadow-lg group-hover:visible">
              {['Category', 'Single', 'Cart', 'Checkout', 'Login'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-sm text-mist transition-colors hover:bg-gray-50 hover:text-brand"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center text-mist transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-mist lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-mist transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
