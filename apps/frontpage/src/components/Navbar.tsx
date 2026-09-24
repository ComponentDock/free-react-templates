import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Category', href: '#category' },
  { label: 'About', href: '#about' },
  { label: 'Latest News', href: '#latest' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-xl font-bold tracking-tight text-heading">
          Front<span className="text-brand">Page</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-body transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <button type="button" aria-label="Search" className="ml-2 text-body hover:text-brand">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile right side: search + toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button type="button" aria-label="Search" className="text-body hover:text-brand">
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-heading"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div id="mobile-menu" className={cn('md:hidden', open ? 'block' : 'hidden')}>
        <ul className="space-y-1 border-t px-4 pb-4 pt-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-body hover:bg-section-gray hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
