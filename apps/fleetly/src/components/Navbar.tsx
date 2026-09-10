import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, pagesDropdown } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header data-testid="navbar" className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="text-xl font-bold text-text">
          Fleetly
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-current={label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'text-text-light transition-colors hover:text-brand',
                    label === 'Home' && 'font-semibold text-brand',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="relative">
              <button
                type="button"
                onClick={() => setPagesOpen((v) => !v)}
                aria-expanded={pagesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-text-light transition-colors hover:text-brand"
              >
                Pages
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 rounded bg-white py-2 shadow-lg">
                  {pagesDropdown.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="block px-4 py-2 text-sm text-text-light transition-colors hover:bg-bg-alt hover:text-brand"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-text lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'block border-b border-gray-100 py-3 text-text-light transition-colors hover:text-brand',
                    label === 'Home' && 'font-semibold text-brand',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
