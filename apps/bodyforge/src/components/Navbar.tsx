import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 mx-auto my-0 w-[90%] max-w-7xl rounded-md bg-white px-6 py-4 shadow-sm lg:px-10"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-wide text-heading"
        >
          BodyForge
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-heading transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded bg-brand px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Book Now
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded bg-brand text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <ul className="mt-4 flex flex-col gap-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block text-sm font-semibold uppercase tracking-wide text-heading transition-colors hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block rounded bg-brand px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
