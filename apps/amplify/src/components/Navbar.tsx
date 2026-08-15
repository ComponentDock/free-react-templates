import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-tint/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1250px] items-center justify-between px-4">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight text-ink"
          aria-label="Amplify home"
        >
          Amplify<span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-[50px] bg-white px-8 text-base font-semibold text-brand ring-1 ring-brand/40 transition-all hover:bg-brand hover:text-white hover:shadow-[0_6px_50px_8px_rgba(21,131,233,0.15)]"
          >
            Get A Quote
          </a>
          <a href="#" className="text-sm font-medium text-ink transition-colors hover:text-brand">
            Login / Register
          </a>
          <button
            type="button"
            aria-label="Open search"
            className="text-ink transition-colors hover:text-brand"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="amplify-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="text-ink lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav
          id="amplify-mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-tint/60 bg-white px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={cn('mt-4 flex flex-wrap items-center gap-4')}>
            <a
              href="#contact"
              className="inline-flex h-[50px] min-w-[160px] items-center justify-center rounded-[50px] bg-white px-8 text-base font-semibold text-brand ring-1 ring-brand/40 transition-all hover:bg-brand hover:text-white"
            >
              Get A Quote
            </a>
            <a href="#" className="text-sm font-medium text-ink transition-colors hover:text-brand">
              Login / Register
            </a>
            <button
              type="button"
              aria-label="Open search"
              className="text-ink transition-colors hover:text-brand"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
