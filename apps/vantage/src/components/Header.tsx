import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Vantage home" className="flex items-baseline">
          <span className="font-display text-[26px] font-bold uppercase text-ink-900">Vantage</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-medium uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-400',
                link.label === 'Home' && 'text-brand-400',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded text-ink-900 transition-colors hover:text-brand-400"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close mobile menu' : 'Open mobile menu'}
            className="flex h-10 w-10 items-center justify-center rounded text-ink-900 transition-colors hover:bg-lavender-50 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line-100 bg-white lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'border-b border-line-100 py-4 text-sm font-medium uppercase tracking-wide text-ink-900 transition-colors hover:text-brand-400',
                  link.label === 'Home' && 'text-brand-400',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
