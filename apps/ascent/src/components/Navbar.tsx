import { useState } from 'react'
import { Menu, Rocket, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-wide">
          <Rocket className="h-6 w-6 text-brand" aria-hidden="true" />
          <span className="text-white">Ascent</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-base text-white transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden bg-brand px-5 py-3 text-sm text-white transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Say Hello
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Menu"
          className="rounded p-2 text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn('bg-ink px-4 pb-8 pt-2 lg:hidden', mobileOpen ? 'block' : 'hidden')}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-white/10 py-3 text-base text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="mt-4 inline-block bg-brand px-5 py-3 text-sm text-white"
        >
          Say Hello
        </a>
      </div>
    </header>
  )
}
