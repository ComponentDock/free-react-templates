import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Projects', 'Models', 'Casting', 'Blog', 'Contact']

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm" data-testid="header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-heading" data-testid="logo">
          Vizier
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex" data-testid="nav-desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold uppercase tracking-wide text-heading transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Search + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="text-heading hover:text-primary">
            <Search size={20} />
          </button>
          <button
            aria-label="Toggle menu"
            className="text-heading hover:text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={cn(
          'absolute left-0 right-0 top-full bg-white shadow-md transition-all md:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
        data-testid="nav-mobile"
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold uppercase text-heading hover:text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
