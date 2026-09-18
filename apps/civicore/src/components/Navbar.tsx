import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Categories', href: '#categories' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Blog', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold text-ink">
          Civicore
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase text-mist transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a href="#login" className="text-sm font-semibold text-brand hover:text-brand-dark">
            Login
          </a>
          <a
            href="#signup"
            className="rounded-[3px] bg-brand px-6 py-2 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Sign Up
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="space-y-1 px-4 pb-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-semibold uppercase text-mist hover:bg-paper hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#login" className="block px-2 py-2 text-sm font-semibold text-brand">
              Login
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="block rounded-[3px] bg-brand px-2 py-2 text-center text-sm font-semibold uppercase text-white"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
