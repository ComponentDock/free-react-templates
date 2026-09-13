import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = ['Home', 'Pages', 'Shop', 'Blog', 'Lookbook', 'Contact'] as const

const dropdownItems: Record<string, string[]> = {
  Home: ['Home Simple', 'Home Carousel', 'Home Fullwidth', 'Home Parallax'],
  Pages: ['Compare', 'Checkout', 'Register', 'Track Order', 'Login'],
  Shop: ['Grid Layout', 'List Layout', 'Product Detail', 'Shopping Cart'],
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-4">
        {/* Mobile hamburger */}
        <button
          className="text-text-heading lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-widest text-text-heading"
        >
          MODISTA
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-text-primary hover:text-brand-red transition-colors"
                aria-haspopup={dropdownItems[link] ? 'true' : undefined}
                aria-expanded={openDropdown === link}
              >
                {link}
                {dropdownItems[link] && <ChevronDown className="h-3 w-3" />}
              </button>
              {dropdownItems[link] && openDropdown === link && (
                <ul className="absolute left-0 top-full z-50 mt-1 w-48 bg-white shadow-lg border border-border-light">
                  {dropdownItems[link].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-gray-50 hover:text-brand-red transition-colors"
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

        {/* Categories placeholder (desktop) */}
        <div className="hidden lg:block">
          <button className="font-heading text-sm font-semibold uppercase tracking-wide text-text-primary hover:text-brand-red transition-colors">
            Categories
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border-light bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <div key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block py-3 font-heading text-sm font-semibold uppercase tracking-wide text-text-primary hover:text-brand-red transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
