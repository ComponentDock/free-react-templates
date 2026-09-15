import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, siteName } from '../data'
import { ButtonLink } from '@free-react-templates/ui'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-2xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {siteName}
        </a>
        <ButtonLink
          href="#donate"
          className="hidden rounded-[2px] bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:inline-block"
        >
          send donation
        </ButtonLink>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? 'page' : undefined}
                  className={cn(
                    'px-4 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
                    link.active ? 'font-semibold text-brand' : 'text-ink/70 hover:text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={cn(
          'overflow-hidden bg-white transition-all duration-300 lg:hidden',
          menuOpen ? 'max-h-[400px]' : 'max-h-0',
        )}
      >
        <nav aria-label="Mobile navigation" className="px-6 pb-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-ink transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
