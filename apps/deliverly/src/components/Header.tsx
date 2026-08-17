import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, dropdownLabel, dropdownLinks, navLinks } from '../data'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6"
      >
        <a href="#home" className="font-serif text-2xl font-bold tracking-wide text-white">
          {brandName}
        </a>

        <div className="hidden items-center lg:flex">
          {navLinks.map((link) =>
            link.label === dropdownLabel ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((value) => !value)}
                  className="flex items-center gap-1 px-[15px] py-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {dropdownLabel}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-white py-2 shadow-lg">
                    {dropdownLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-brand"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.label === 'Home' ? 'true' : undefined}
                className="px-[15px] py-2.5 text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((value) => !value)}
          className="rounded p-2 text-white lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black/10 bg-white px-4 pb-6 pt-2 shadow-xl lg:hidden"
        >
          {navLinks.map((link) =>
            link.label === dropdownLabel ? (
              <div key={link.label}>
                <span className="block px-4 py-2.5 text-sm font-semibold text-neutral-800">
                  {dropdownLabel}
                </span>
                {dropdownLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 pl-8 text-sm text-neutral-600 transition-colors hover:text-brand"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-semibold text-neutral-800 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      )}
    </header>
  )
}
