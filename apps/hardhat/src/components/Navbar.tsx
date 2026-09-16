import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold tracking-wider text-navy">
          Hardhat
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ButtonLink
            href="#contact"
            className="hidden rounded bg-brand px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            Contact Now
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded text-gray-700 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-2 block rounded bg-brand px-6 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Contact Now
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
