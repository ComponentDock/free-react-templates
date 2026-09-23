import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Categories', href: '#categories' },
  { label: 'Pages', href: '#pages' },
  { label: 'Log in', href: '#login' },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-lg transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-brand-dark"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-brand text-white font-bold text-sm">
            J
          </span>
          JobGrid
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#post"
            className="hidden rounded border-2 border-brand px-5 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white sm:inline-block"
          >
            Post a Job
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 lg:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-gray-100 px-4 pb-4 pt-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#post"
            className="mt-2 rounded border-2 border-brand px-5 py-2 text-center text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Post a Job
          </a>
        </nav>
      </div>
    </header>
  )
}
