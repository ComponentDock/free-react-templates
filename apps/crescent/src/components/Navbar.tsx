import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Sermons', href: '#sermons' },
  { label: 'Events', href: '#events' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="py-4 text-xl font-bold tracking-wide text-brand-dark">
          CRESCENT
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-4 py-6 text-xs font-bold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            className="p-2 text-brand-dark transition-colors hover:text-brand"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <a
            href="#donate"
            className="rounded-[3px] bg-brand px-7 py-2.5 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Donate Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="p-2 text-brand-dark md:hidden"
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
                className="block py-3 text-sm font-bold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
