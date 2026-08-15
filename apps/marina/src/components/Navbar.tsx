import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <a
          href="#home"
          className="font-heading text-xl font-bold uppercase tracking-[0.05rem] text-white"
        >
          Marina
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'relative py-1 font-heading text-base font-bold uppercase tracking-[0.05rem] text-white transition-opacity hover:opacity-80',
                index === 0 &&
                  'after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-white',
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
          aria-controls="marina-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="text-white lg:hidden"
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
          id="marina-mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-white/20 bg-brand px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 font-heading text-base font-bold uppercase tracking-[0.05rem] text-white hover:opacity-80"
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
