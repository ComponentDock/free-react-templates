import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4">
        <a href="#home" className="text-2xl font-bold text-white" aria-label="Netrise home">
          Netrise
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium text-white/90 transition-colors hover:text-white',
                index === 0 && 'text-white',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-white p-1"
          >
            <span className="rounded-full bg-[linear-gradient(45deg,#fb83b5,#9a51ff)] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              Get started
            </span>
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="netrise-mobile-menu"
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
          id="netrise-mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-navy px-4 pb-4 lg:hidden"
        >
          <ul className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm font-medium text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-[linear-gradient(45deg,#fb83b5,#9a51ff)] px-6 py-2.5 text-sm font-semibold text-white"
              >
                Get started
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
