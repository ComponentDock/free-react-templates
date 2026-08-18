import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { dropdownItems, navLinks, phoneNumber } from '../data'

/**
 * Transparent-over-hero navbar (reference: site-nav) that turns solid on
 * scroll. Desktop links render inline; the Dropdown item opens a submenu on
 * click; a hamburger opens a full mobile menu (conditional render so the
 * closed panel is truly absent, not just hidden).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || mobileOpen
  const linkClass = solid
    ? 'text-sm font-normal text-black/70 transition-colors hover:text-ink'
    : 'text-sm font-normal text-white/50 transition-colors hover:text-white'

  return (
    <header
      data-navbar
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-colors',
        solid ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a
          href="#home"
          className={cn(
            'font-heading text-2xl font-bold tracking-wide transition-colors',
            solid ? 'text-ink' : 'text-white',
          )}
        >
          CONCIERGE
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === 'Dropdown' ? (
              <div key={link.label} className="relative">
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((open) => !open)}
                  className={cn(linkClass, 'flex items-center gap-1 uppercase')}
                >
                  Dropdown
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {dropdownOpen && (
                  <ul
                    data-dropdown-menu
                    className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white p-2 shadow-lg"
                  >
                    {dropdownItems.map((item) => (
                      <li key={item}>
                        <a
                          href="#dropdown"
                          className="block rounded px-3 py-2 text-sm text-black/70 hover:bg-black/5 hover:text-ink"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a key={link.label} href={link.href} className={cn(linkClass, 'uppercase')}>
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center lg:flex">
          <a
            href={`tel:${phoneNumber}`}
            className={cn(
              linkClass,
              'flex items-center gap-2',
              solid ? 'text-black/70 hover:text-ink' : 'text-white/50 hover:text-white',
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {phoneNumber}
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:hidden',
            solid ? 'text-ink' : 'text-white',
          )}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          data-mobile-menu
          className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col">
            {navLinks.map((link) =>
              link.label === 'Dropdown' ? (
                <li key={link.label}>
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium uppercase text-ink"
                  >
                    Dropdown
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {dropdownOpen && (
                    <ul className="pl-4">
                      {dropdownItems.map((item) => (
                        <li key={item}>
                          <a
                            href="#dropdown"
                            className="block py-2 text-sm text-black/70 hover:text-ink"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium uppercase text-ink hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
