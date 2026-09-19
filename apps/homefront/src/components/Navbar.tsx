import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          Homefront
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-white transition hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#signin"
              className="rounded px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Sign-In
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="rounded bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
            >
              Sign-Up
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <ul className="space-y-2 bg-primary px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block py-2 text-sm font-medium text-white transition hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#signin" className="block py-2 text-sm font-medium text-white">
              Sign-In
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="mt-2 block rounded bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            >
              Sign-Up
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
