import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Department', href: '#departments' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-800 bg-topbar text-white"
      data-testid="navbar"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold uppercase tracking-wider">
          Medvista<span className="text-coral">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="hidden rounded border-2 border-coral px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand lg:inline-block"
          >
            Appointment
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-gray-300 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-gray-800 bg-topbar px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointment"
            className="mt-2 block rounded border-2 border-coral px-6 py-2 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand"
          >
            Appointment
          </a>
        </nav>
      )}
    </header>
  )
}
