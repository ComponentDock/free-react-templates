import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TopBar } from './TopBar'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Department', href: '#departments' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <TopBar />
      <nav className="bg-white shadow-sm" aria-label="Primary">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="font-heading text-2xl font-bold text-sky-400">
            Vitala
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-gray-700 transition-colors hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              aria-label="Search"
              className="text-gray-500 transition-colors hover:text-sky-400"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-gray-700 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        <div id="mobile-menu" className={cn('md:hidden', open ? 'block' : 'hidden')}>
          <ul className="space-y-1 px-4 pb-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-gray-700 hover:bg-sky-50 hover:text-sky-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
