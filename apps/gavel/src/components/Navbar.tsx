import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

/** Dark sticky navbar: "Gavel" brand with tagline, anchor links on desktop,
 *  and a "Menu" hamburger switch on narrow viewports. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="leading-tight">
          <span className="text-xl font-bold text-white">Gavel</span>
          <span className="block text-xs font-medium text-brand">A Law Firm</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="gavel-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="rounded p-2 text-white hover:text-brand lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="gavel-mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 bg-ink px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-white/80 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
