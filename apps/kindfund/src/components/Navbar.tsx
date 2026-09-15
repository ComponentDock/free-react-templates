import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-40 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="font-heading text-2xl text-primary">
          Kindfund
        </a>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'text-sm font-semibold text-ink transition-colors hover:text-primary',
                    link.active && 'text-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#causes"
            className="hidden rounded bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600 lg:inline-block"
          >
            Donate Now
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-ink lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'block py-3 text-sm font-semibold text-ink transition-colors hover:text-primary',
                    link.active && 'text-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#causes"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded bg-primary px-6 py-2 text-center text-sm font-semibold text-white"
              >
                Donate Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
