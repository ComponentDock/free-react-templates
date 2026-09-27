import { useState } from 'react'
import { Search, Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      {/* Top bar */}
      <div className="bg-tan-500 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <a href="mailto:contact@sundale.com" className="text-sm">
            <Mail className="mr-1 inline h-3 w-3" />
            contact@sundale.com
          </a>
          <a href="tel:+15551234567" className="flex items-center gap-1 text-sm">
            <Phone className="h-3 w-3" />
            +1 555 123 4567
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-30 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="text-2xl font-bold tracking-tight text-tan-500">
            Sun<span className="text-gray-800">dial</span>
          </a>

          {/* Desktop nav */}
          {!open && (
            <ul className="hidden items-center gap-8 md:flex" data-testid="desktop-nav">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm font-semibold uppercase tracking-wide text-gray-600 transition-colors hover:text-tan-500"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-3">
            <button
              aria-label="Search"
              className="hidden rounded-full p-2 text-gray-500 transition-colors hover:bg-tan-50 hover:text-tan-500 md:block"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              aria-label="Toggle menu"
              className="rounded-md p-2 text-gray-700 md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <ul
            className="space-y-2 border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden"
            data-testid="mobile-nav"
          >
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 text-sm font-semibold uppercase tracking-wide text-gray-600 transition-colors hover:text-tan-500"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
