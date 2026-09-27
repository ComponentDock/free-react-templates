import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#home" className="text-2xl font-bold tracking-tight text-white">
          Dwell<span className="text-crimson-400">point</span>
        </a>

        {/* Desktop nav — only rendered when menu is closed, visible via CSS media query */}
        {!open && (
          <ul className="hidden items-center gap-8 md:flex" data-testid="desktop-nav">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 md:block"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-white md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {open && (
        <ul className="space-y-2 bg-gray-900 px-4 pb-4 pt-2 md:hidden" data-testid="mobile-nav">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
