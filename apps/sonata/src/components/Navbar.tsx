import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navItems } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-navy-dark">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 lg:px-8"
      >
        <a href="#home" className="text-2xl font-bold tracking-wide">
          <span className="text-brand">Son</span>
          <span className="text-white">ata</span>
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

        {/* Desktop user panel */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#help"
            className="rounded-full border border-white/40 px-5 py-2 text-sm text-white transition-colors hover:border-brand hover:text-brand"
          >
            Help
          </a>
          <a href="#login" className="text-base text-white transition-colors hover:text-brand">
            Login
          </a>
          <a
            href="#signup"
            className="text-base text-brand transition-colors hover:text-brand-dark"
          >
            Create an account
          </a>
        </div>

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
        className={cn('bg-navy-2 px-4 pb-8 pt-2 lg:hidden', mobileOpen ? 'block' : 'hidden')}
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
        <div className="mt-4 flex items-center gap-6">
          <a href="#help" onClick={() => setMobileOpen(false)} className="text-sm text-white">
            Help
          </a>
          <a href="#login" onClick={() => setMobileOpen(false)} className="text-base text-white">
            Login
          </a>
          <a href="#signup" onClick={() => setMobileOpen(false)} className="text-base text-brand">
            Create an account
          </a>
        </div>
      </div>
    </header>
  )
}
