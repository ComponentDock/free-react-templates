import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Primary"
      className="absolute inset-x-0 top-24 z-30 px-6 lg:top-[95px] lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <button
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((current) => !current)}
          className="flex items-center gap-2 border border-white/40 px-4 py-2 text-sm font-medium uppercase tracking-wide text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {open ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
          Menu
        </button>

        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`block px-6 py-5 text-[15px] font-medium text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  link.label === 'Home' ? 'text-brand' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ButtonLink
          href="#contact"
          className="hidden h-auto rounded-none bg-brand-dark px-10 py-6 text-[13px] font-bold uppercase tracking-[2px] hover:bg-brand lg:block"
        >
          Get Certificate
        </ButtonLink>
      </div>

      {open && (
        <div className="mt-3 bg-white shadow-lg lg:hidden">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-edge/50 px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                    link.label === 'Home' ? 'text-brand' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
