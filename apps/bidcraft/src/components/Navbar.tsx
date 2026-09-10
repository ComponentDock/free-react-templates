import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Buy', href: '#auctions' },
  { label: 'Sell', href: '#auctions' },
  {
    label: 'Services',
    href: '#how',
    children: [
      { label: 'Sell Items', href: '#how' },
      { label: 'Buy Items', href: '#how' },
      { label: 'Submit a Bid', href: '#how' },
    ],
  },
  { label: 'Blog', href: '#testimonials' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#footer' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header id="nav" className="fixed top-0 z-50 w-full bg-ink/80 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wide">
          Bidcraft
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            'children' in link ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-primary-400"
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </a>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full z-50 mt-1 min-w-[200px] border-t-2 border-primary-400 bg-white py-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-5 py-2 text-sm text-ink transition-colors hover:bg-gray-100 hover:text-primary-400"
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
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary-400"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#cta"
            className="text-sm font-medium text-white transition-colors hover:text-primary-400"
          >
            Sign In / Register
          </a>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-gray-700 bg-ink px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm text-white transition-colors hover:text-primary-400"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#cta" className="mt-2 block py-2 text-sm font-medium text-primary-400">
            Sign In / Register
          </a>
        </nav>
      )}
    </header>
  )
}
