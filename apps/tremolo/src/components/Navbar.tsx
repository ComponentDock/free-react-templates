import { useState } from 'react'
import { Menu, X, Utensils } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Menu', href: '#menu' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-wider uppercase text-amber-400"
        >
          <Utensils className="h-6 w-6" />
          Tremolo
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-slate-200 transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#menu"
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-400"
          >
            Order Online
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-amber-400 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('bg-slate-800 md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-slate-200 hover:bg-slate-700 hover:text-amber-400"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="block rounded bg-amber-500 px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-amber-400"
            >
              Order Online
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
