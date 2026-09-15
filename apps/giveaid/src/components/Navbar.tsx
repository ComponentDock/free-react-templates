import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home', active: true },
  {
    label: 'Adoption',
    href: '#adoption',
    dropdown: [
      { label: 'Adoption', href: '#adoption' },
      { label: 'Waiting Children', href: '#children' },
      { label: 'How to Adopt', href: '#steps' },
    ],
  },
  { label: 'Success Stories', href: '#stories', active: false },
  { label: 'About', href: '#about', active: false },
  { label: 'Contact', href: '#contact', active: false },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-2xl font-bold text-brand">
          GiveAid
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-sm font-semibold text-text-gray hover:text-brand"
                >
                  {link.label}
                </a>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full z-10 mt-1 rounded-lg border bg-white py-2 shadow-lg">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block whitespace-nowrap px-4 py-2 text-sm text-text-gray hover:bg-brand hover:text-white"
                        >
                          {item.label}
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
                  className={`text-sm font-semibold ${
                    link.active ? 'text-brand' : 'text-text-gray hover:text-brand'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
      {open && (
        <ul className="border-t px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <li key={link.label} className="py-2">
              <a
                href={link.href}
                className={`block text-sm font-semibold ${
                  link.active ? 'text-brand' : 'text-text-gray hover:text-brand'
                }`}
              >
                {link.label}
              </a>
              {link.dropdown && (
                <ul className="ml-4 mt-1">
                  {link.dropdown.map((item) => (
                    <li key={item.label} className="py-1">
                      <a href={item.href} className="block text-sm text-text-gray hover:text-brand">
                        {item.label}
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
