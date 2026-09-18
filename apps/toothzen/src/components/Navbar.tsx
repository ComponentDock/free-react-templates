import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full bg-tooth-dark-blue/90 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="text-xl font-bold text-white">
          Tooth<span className="text-tooth-teal">zen</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-tooth-teal"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#appointment"
              className="rounded bg-tooth-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-tooth-dark-blue"
            >
              Appointment
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="border-t border-white/10 bg-tooth-dark-blue px-4 pb-4 md:hidden"
        >
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block text-sm font-medium text-white/80 transition-colors hover:text-tooth-teal"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#appointment"
                className="block rounded bg-tooth-blue px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-tooth-dark-blue"
                onClick={closeMenu}
              >
                Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
