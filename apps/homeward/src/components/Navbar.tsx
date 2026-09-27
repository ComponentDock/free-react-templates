import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Listings', href: '#listings' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="text-xl font-bold tracking-tight text-heading">
          Home<span className="text-accent">ward</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-body transition-colors hover:text-heading"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#submit"
            className="hidden rounded bg-accent px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark lg:inline-block"
          >
            Submit Listing
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 text-body lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-body transition-colors hover:text-heading"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#submit"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded bg-accent px-5 py-2 text-center text-sm font-semibold uppercase tracking-wide text-white"
          >
            Submit Listing
          </a>
        </div>
      )}
    </nav>
  )
}
