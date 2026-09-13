import { useState } from 'react'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Pages', href: '#pages' },
  { label: 'Shop', href: '#shop' },
  { label: 'Blog', href: '#blog' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border-light bg-white"
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-2xl font-bold uppercase tracking-[0.15em] text-text-heading"
        >
          MODISTA
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                className="flex items-center gap-1 py-2 text-sm font-semibold uppercase tracking-wide text-text-primary transition-colors hover:text-brand-red"
              >
                {link.label}
                {(link.label === 'Home' || link.label === 'Pages' || link.label === 'Shop') && (
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                )}
              </a>
              {link.label === 'Home' && (
                <ul className="absolute left-0 top-full hidden w-48 border border-border-light bg-white py-2 shadow-lg group-hover:block">
                  {['Home Simple', 'Carousel', 'Fullwidth', 'Parallax'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-brand-red"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right: search + hamburger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="text-text-secondary hover:text-brand-red"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center text-text-secondary lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-white px-4 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wide text-text-secondary hover:text-brand-red"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
