import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

/** Sticky top navigation (reference `.site-navbar.js-sticky-header`): purple
 *  "Equity" brand, dark section links, and a hamburger toggle that expands a
 *  stacked mobile menu. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <a href="#home" className="font-heading text-2xl font-extrabold text-primary-600">
          Equity
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-semibold text-[#25262a] transition-colors hover:text-primary-600"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded text-[#25262a] lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-gray-200 bg-white px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gray-100 py-3 text-sm font-semibold text-[#25262a] transition-colors hover:text-primary-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
