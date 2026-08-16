import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1250px] items-center justify-between px-4">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-brand"
          aria-label="Resonance home"
        >
          Resonance
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border-2 border-brand bg-brand px-6 py-2 text-sm font-semibold text-accent transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Download now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="resonance-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="text-brand lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="resonance-mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-brand/10 bg-white px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-brand/80 transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-full border-2 border-brand bg-brand px-6 py-2 text-sm font-semibold text-accent transition-colors hover:bg-brand-dark"
          >
            Download now
          </a>
        </nav>
      )}
    </header>
  )
}
