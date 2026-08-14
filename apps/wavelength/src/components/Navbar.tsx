import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1">
        <a href="#home" className="text-2xl font-bold text-white">
          Wavelength<span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-2.5 tracking-[0.05em] text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-white lg:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <a href="#home" className="text-2xl font-bold text-black">
              Wavelength<span className="text-brand">.</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-black"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="px-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-lg text-black transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
