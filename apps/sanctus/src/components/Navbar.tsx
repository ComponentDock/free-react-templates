import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, sermonDropdown, siteName } from '../data'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between px-6 py-5 lg:px-12"
      >
        <a
          href="#home"
          className="text-2xl font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {siteName}
        </a>
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <a
                href={link.href}
                aria-current={link.active ? 'page' : undefined}
                className={cn(
                  'inline-flex items-center gap-1 px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                  link.active ? 'font-semibold text-white' : 'text-white/70 hover:text-white',
                )}
              >
                {link.label}
                {link.dropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </a>
              {link.dropdown && dropdownOpen && (
                <ul className="absolute left-0 top-full min-w-48 rounded-sm bg-white py-2 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.1)]">
                  {sermonDropdown.map((item) =>
                    'children' in item ? (
                      <li key={item.label}>
                        <span className="block px-4 py-2 text-sm font-medium text-black">
                          {item.label}
                        </span>
                        <ul className="pb-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block px-4 py-1.5 pl-8 text-sm text-black transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-black transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          {item.label}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((value) => !value)}
          className="text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {menuOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>
      <div
        className={cn(
          'overflow-hidden bg-white transition-all duration-300 lg:hidden',
          menuOpen ? 'max-h-[420px]' : 'max-h-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="px-6 pb-4 pt-2">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-black transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
