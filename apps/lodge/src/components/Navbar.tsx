import { useState } from 'react'
import { Menu, X, MapPin, ChevronDown } from 'lucide-react'
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  {
    label: 'Facilities',
    href: '#facilities',
    children: [
      { label: 'Junior Suite', href: '#rooms' },
      { label: 'Double Room', href: '#rooms' },
      { label: 'Senior Suite', href: '#rooms' },
      { label: 'Single Room', href: '#rooms' },
    ],
  },
  { label: 'News', href: '#guestbook' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="relative z-50 bg-lodge-900 text-white">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Lodge
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider hover:text-gold-500 transition-colors"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </a>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 w-48 rounded bg-lodge-800 py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-lodge-700 hover:text-gold-500 transition-colors"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider hover:text-gold-500 transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Address — desktop */}
        <div className="hidden items-center gap-2 text-sm text-lodge-300 lg:flex">
          <MapPin className="h-4 w-4" />
          <span>1525 Boring Lane, Los Angeles, CA</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-lodge-700 bg-lodge-800 px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-semibold uppercase tracking-wider hover:text-gold-500 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2 text-sm text-lodge-300">
            <MapPin className="h-4 w-4" />
            <span>1525 Boring Lane, Los Angeles, CA</span>
          </div>
        </nav>
      )}
    </header>
  )
}
