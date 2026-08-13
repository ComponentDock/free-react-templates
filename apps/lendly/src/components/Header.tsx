import { useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { brand, contact, dropdownItems, navLinks } from '../data'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/70">
      <div className="mx-auto flex max-w-[1176px] items-stretch justify-between px-4">
        <a
          href="#top"
          className="flex items-center py-6 text-2xl font-bold uppercase tracking-wide text-white"
        >
          {brand}
        </a>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex h-full items-stretch">
            {navLinks.map((link) =>
              link === 'Pages' ? (
                <li
                  key={link}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    className="flex h-full items-center gap-1 px-5 text-base font-semibold text-white hover:text-brand"
                  >
                    {link}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute left-0 top-full w-[220px] bg-white p-5 shadow-[2px_7px_20px_rgba(0,0,0,0.15)]">
                      {dropdownItems.map((item) => (
                        <li key={item}>
                          <a
                            href="#apply"
                            className="block px-5 py-1.5 text-base text-black hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link}>
                  <a
                    href={link === 'Home' ? '#top' : `#${link.toLowerCase().replace(' ', '-')}`}
                    aria-current={link === 'Home' ? 'true' : undefined}
                    className="flex h-full items-center px-5 text-base font-semibold text-white hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
        <div className="flex items-stretch">
          <a
            href={'tel:' + contact.phone.replace(/[^\d+]/g, '')}
            className="relative flex items-center bg-graphite py-6 pl-14 pr-8 text-base font-bold text-white"
          >
            <span className="absolute left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand">
              <Phone className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            {contact.callLabel}
          </a>
          <div className="hidden min-w-[236px] items-center justify-center bg-brand px-5 py-6 text-base font-bold text-white lg:flex">
            {contact.phone}
          </div>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center px-4 text-white lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-ink lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={link === 'Home' ? '#top' : `#${link.toLowerCase().replace(' ', '-')}`}
                  className="block py-3 text-base font-semibold text-white hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
