import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Navbar — transparent and absolute over the hero (reference
 *  `.site-navbar`): club wordmark left, uppercase white links right with a
 *  red underline on the active item, and a hamburger that toggles the
 *  slide-in mobile menu. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
        <a
          href="#home"
          className="text-2xl font-black uppercase tracking-widest text-white transition-colors hover:text-brand"
        >
          Striker
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                aria-current={label === 'Home' ? 'page' : undefined}
                className={cn(
                  'border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-brand hover:text-brand',
                  label === 'Home' && 'border-brand',
                )}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="bg-page/95 px-6 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={label === 'Home' ? 'page' : undefined}
                  className={cn(
                    'block border-b border-white/10 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-brand',
                    label === 'Home' && 'text-brand',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
