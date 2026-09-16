import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  {
    label: 'Ministries',
    href: '#ministries',
    children: [
      { label: 'Children', href: '#children' },
      { label: 'Students', href: '#students' },
      { label: 'Care Ministry', href: '#care' },
      { label: 'Missions', href: '#missions' },
      { label: 'Request Prayer', href: '#prayer' },
    ],
  },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 z-50 w-full bg-transparent" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#home"
          className="font-heading text-sm font-normal uppercase tracking-[0.2em] text-white"
        >
          NAVE
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-6 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </a>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 min-w-[13em] rounded border border-transparent bg-white shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-800 transition-colors hover:bg-brand hover:text-white"
                        >
                          {child.label}
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
                  className="px-4 py-6 text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-dark-border bg-black px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-3 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.children && (
                <ul className="pl-4">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block py-2 text-xs uppercase tracking-[0.15em] text-white/60 hover:text-brand"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
