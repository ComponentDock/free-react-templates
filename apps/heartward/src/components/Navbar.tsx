import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-dark shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="font-heading text-2xl font-bold tracking-wide text-white">
          Heartward
        </a>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'text-sm font-light text-white/60 transition-colors hover:text-primary',
                    link.active && 'text-white',
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
            className="hidden rounded bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 lg:inline-block"
          >
            Donate
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-white lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-white/10 bg-dark lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'block py-3 text-sm font-light text-white/60 transition-colors hover:text-white',
                    link.active && 'text-white',
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
                className="mt-2 block rounded bg-primary px-6 py-2 text-center text-sm font-medium text-white"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
