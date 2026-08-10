import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, brandTagline, menuToggleLabel, navLinks, searchLabel } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6">
        <a href="#home" className="flex flex-col justify-center leading-none">
          <span className="font-display text-3xl font-bold text-ink">{brandName}</span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.35em] text-muted uppercase">
            {brandTagline}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-600 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <button
            type="button"
            aria-label={searchLabel}
            className="text-gray-600 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={menuToggleLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="text-gray-600 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('border-t border-line bg-white lg:hidden', !open && 'hidden')}
      >
        <ul className="flex flex-col px-4 py-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-gray-600 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
