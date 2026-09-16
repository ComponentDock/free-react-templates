import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  {
    label: 'Ministries',
    href: '#',
    children: [
      { label: 'Outreach', href: '#' },
      { label: "Men's", href: '#' },
      { label: "Women's", href: '#' },
      { label: "Children's", href: '#' },
      { label: 'Youth', href: '#' },
    ],
  },
  {
    label: 'Sermons',
    href: '#',
    children: [
      { label: 'Daily Sermon', href: '#' },
      { label: 'Music', href: '#' },
      { label: 'Audio', href: '#' },
      { label: 'Video', href: '#' },
    ],
  },
  { label: 'Events', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#"
          className="font-heading text-lg font-medium uppercase tracking-wider text-black"
        >
          Fellowship
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-6 text-sm font-medium text-gray-800 transition-colors hover:text-brand"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </a>
                {dropdownOpen === link.label && (
                  <ul className="absolute top-full left-0 min-w-[13em] rounded border border-gray-100 bg-white shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-brand hover:text-white"
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
                  className="px-4 py-6 text-sm font-medium text-gray-800 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-black md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-3 text-sm font-medium text-gray-800 transition-colors hover:text-brand"
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
                        className="block py-2 text-xs text-gray-500 hover:text-brand"
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
