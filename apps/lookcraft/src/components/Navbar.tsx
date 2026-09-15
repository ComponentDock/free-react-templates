import { useState, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Artists', href: '#artists' },
  { label: 'Shop', href: '#shop' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-2xl font-bold text-white">
          LookCraft
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-accent-red"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-white/20 bg-navy px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobile}
                className="block py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-accent-red"
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
