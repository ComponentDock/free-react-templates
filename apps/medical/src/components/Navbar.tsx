import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Features', 'Doctors', 'Departments', 'Blog', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = (active?: boolean) =>
    cn(
      'text-sm font-medium transition-colors hover:text-brand',
      active ? 'text-brand' : 'text-white/80',
    )

  return (
    <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#" className="text-lg font-bold text-white">
          Medical
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                className={linkClass(link === 'Home')}
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={link === 'Home' ? '#home' : `#${link.toLowerCase()}`}
                className={cn(linkClass(), 'block py-2')}
                onClick={() => setMobileOpen(false)}
              >
                {link.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
