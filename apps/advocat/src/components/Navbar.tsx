import { useState } from 'react'
import { Scale, Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data'

/** Responsive navbar with navigation links and brand logo. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur" id="top">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 text-white">
          <Scale className="h-6 w-6 text-brand" />
          <span className="font-heading text-xl font-semibold">{brand.name}</span>
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="border-t border-white/10 bg-ink px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-sm font-medium text-white/70 transition-colors hover:text-brand"
                onClick={() => setOpen(false)}
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
