import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
] as const

const blogDropdown = [
  { label: 'Blog', href: '#blog' },
  { label: 'Single Post', href: '#blog-single' },
]

const pagesDropdown = [{ label: 'Elements', href: '#elements' }]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" aria-label="Feast home">
            <span className="font-sans text-2xl font-bold text-navy">Feast</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            ))}

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setBlogOpen(!blogOpen)
                  setPagesOpen(false)
                }}
                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-primary-500"
                aria-expanded={blogOpen}
              >
                Blog <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </button>
              {blogOpen && (
                <ul className="absolute left-0 top-full z-10 mt-2 w-40 rounded-lg border bg-white py-2 shadow-lg">
                  {blogDropdown.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setBlogOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setPagesOpen(!pagesOpen)
                  setBlogOpen(false)
                }}
                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-primary-500"
                aria-expanded={pagesOpen}
              >
                Pages <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </button>
              {pagesOpen && (
                <ul className="absolute left-0 top-full z-10 mt-2 w-40 rounded-lg border bg-white py-2 shadow-lg">
                  {pagesDropdown.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setPagesOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a
              href="#contact"
              className="text-sm font-semibold uppercase tracking-wide text-gray-700 transition-colors hover:text-primary-500"
            >
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              Custom Order
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="border-t pb-4 lg:hidden" aria-label="Mobile navigation">
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-2 py-2 text-sm font-semibold text-gray-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block px-2 py-2 text-sm font-semibold text-gray-700"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" className="w-full border-navy text-navy">
                Custom Order
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
