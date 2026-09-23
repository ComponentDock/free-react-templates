import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Find Jobs', href: '#jobs' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#"
          className="text-2xl font-bold text-navy"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          JobScout
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden gap-3 lg:flex">
          <a
            href="#"
            className="rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Register
          </a>
          <a
            href="#"
            className="rounded border border-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-navy" />
          ) : (
            <Menu className="h-6 w-6 text-navy" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm font-medium text-navy transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3">
            <a
              href="#"
              className="rounded bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white"
            >
              Register
            </a>
            <a
              href="#"
              className="rounded border border-brand px-6 py-3 text-sm font-semibold uppercase tracking-wider text-brand"
            >
              Login
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
