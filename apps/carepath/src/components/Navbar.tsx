import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Department', href: '#services' },
  { label: 'Doctors', href: '#team' },
  {
    label: 'Blog',
    href: '#blog',
    children: [
      { label: 'Blog', href: '#blog' },
      { label: 'Blog Details', href: '#' },
      { label: 'Element', href: '#' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav
      className="relative z-50 bg-white shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold font-serif text-heading">
          CarePath
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-heading"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setDropdownOpen(true)}
              onMouseLeave={() => item.children && setDropdownOpen(false)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-heading hover:text-brand transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </a>
              {item.children && dropdownOpen && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded border border-border bg-white py-2 shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-2 text-sm text-body-text hover:bg-light-bg hover:text-brand transition-colors"
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

        <a
          href="#appointment"
          className="hidden lg:inline-block bg-brand px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-dark transition-colors"
        >
          Make an Appointment
        </a>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-heading hover:text-brand border-b border-border"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="mt-3 block bg-brand px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-brand-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Make an Appointment
          </a>
        </div>
      )}
    </nav>
  )
}
