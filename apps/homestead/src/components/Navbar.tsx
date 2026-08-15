import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, navLinks } from '../data'

/** Transparent navbar floating over the hero (absolute, top offset). */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-5 z-30">
      <div className="mx-auto flex max-w-[1250px] items-center justify-between px-4">
        <a
          href="#home"
          className="text-2xl font-semibold tracking-tight text-ink"
          aria-label="Homestead home"
        >
          {brandName}
          <span className="text-gold">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={index === 0 ? 'true' : undefined}
              className={cn(
                'px-5 py-2 text-[15px] text-ink transition-colors hover:text-brand',
                index === 0 && 'text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="homestead-mobile-menu"
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
          id="homestead-mobile-menu"
          aria-label="Mobile navigation"
          className="mt-4 bg-black px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-1 text-[15px] text-white transition-colors hover:text-brand',
                    index === 0 && 'text-brand',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
