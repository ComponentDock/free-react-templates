import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#service' },
  { label: 'Plan', href: '#plan' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-bold text-ink">
          Rankly<span className="text-brand">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-mist hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-3 text-sm font-medium text-mist hover:text-brand transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
