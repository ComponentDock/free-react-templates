import { useState } from 'react'
import { Church, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'
import { CountdownBar } from './CountdownBar'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white">
      <CountdownBar />
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 font-semibold uppercase tracking-widest text-heading"
        >
          <Church className="h-6 w-6 text-brand" aria-hidden="true" />
          Synod
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium uppercase tracking-wide text-heading transition-colors hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center text-heading transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" />
          </button>
          <a
            href="#donate"
            className="hidden rounded bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand/90 sm:inline-block"
          >
            Donate
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center text-heading lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('bg-white lg:hidden', mobileOpen ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 py-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium uppercase tracking-wide text-heading"
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
