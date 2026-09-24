import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

const socialLinks = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Twitter', name: 'twitter' as const },
  { label: 'Instagram', name: 'instagram' as const },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors dark:bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Brand */}
        <a
          href="#"
          className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-ink dark:text-white"
        >
          Byline<span className="text-brand">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: search + social */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-ink transition-colors hover:bg-brand/10 hover:text-brand dark:text-white"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Desktop social icons */}
          <div className="hidden items-center gap-3 lg:flex">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-ink transition-colors hover:text-brand dark:text-white"
              >
                <BrandIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded p-2 text-ink transition-colors hover:bg-brand/10 md:hidden dark:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 md:hidden dark:border-gray-800 dark:bg-gray-900">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-ink transition-colors hover:text-brand dark:text-white"
              >
                <BrandIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
