import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, menuToggleLabel, navLinks, pagesDropdown, searchLabel } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white">
      {/* Script wordmark row (original logo is an image asset — recreated as
          styled text, never copied) */}
      <div className="py-[34px] text-center">
        <a
          href="#"
          className="font-script text-[44px] leading-none text-heading transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {brandName}
        </a>
      </div>

      {/* Magenta nav bar */}
      <nav aria-label="Primary" className="bg-primary">
        <div className="mx-auto flex h-[60px] max-w-7xl items-stretch justify-between px-4 sm:px-6">
          <ul className="hidden items-stretch lg:flex">
            {navLinks.map((link) => (
              <li key={link} className="group relative flex items-stretch">
                {link === 'Pages' ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={false}
                      className="flex items-center gap-1.5 px-5 text-xs font-medium tracking-wide text-white uppercase transition-colors group-hover:bg-hover-pink focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                    >
                      {link}
                      <ChevronDown className="h-3 w-3" aria-hidden="true" />
                    </button>
                    <ul className="invisible absolute top-full left-0 z-50 min-w-44 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {pagesDropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block px-5 py-2.5 text-xs text-heading transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href="#"
                    aria-current={link === 'Home' ? 'page' : undefined}
                    className={cn(
                      'flex items-center px-5 text-xs font-medium tracking-wide text-white uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white',
                      link === 'Home' ? 'bg-hover-pink' : 'hover:bg-hover-pink',
                    )}
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={searchLabel}
              className="p-2 text-white transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={menuToggleLabel}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
              className="p-2 text-white transition-colors hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('bg-primary lg:hidden', !open && 'hidden')}
      >
        <ul className="flex flex-col border-t border-white/20">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className={cn(
                  'block px-5 py-3 text-xs font-medium tracking-wide text-white uppercase transition-colors hover:bg-hover-pink',
                  link === 'Home' && 'bg-hover-pink',
                )}
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
