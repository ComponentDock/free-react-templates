import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data'
import { cn } from '@free-react-templates/ui'

/**
 * Fixed header + fullscreen off-canvas navigation overlay. The hamburger
 * toggle opens a black fullscreen overlay with the brand, a background
 * photo, and numbered links (01–05); the active link gets a pink underline.
 */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-10 py-6">
        <a
          href="#home"
          className="font-heading text-[30px] font-bold tracking-[2px] text-white uppercase"
        >
          {brand.name}
          <span className="mt-1 block text-[11px] font-light tracking-[2px] text-white/80 normal-case">
            {brand.tagline}
          </span>
        </a>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-70"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </header>

      {open && (
        <nav
          aria-label="Menu"
          className="fixed inset-0 z-[1002] flex flex-col items-center justify-center bg-ink text-center"
        >
          <img
            src="https://picsum.photos/seed/glamour-nav-bg/900/1200"
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-1/2 object-cover opacity-40 lg:block"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-10 right-10 flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-70"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <a href="#home" className="mb-4 font-heading text-3xl font-bold text-white uppercase">
            {brand.name}
            <span className="block text-sm font-light text-white/80">{brand.tagline}</span>
          </a>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.number}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'group relative inline-block px-2 font-heading text-2xl font-bold tracking-wide text-white uppercase transition-colors hover:text-brand',
                    link.active && 'text-brand',
                  )}
                >
                  <span className="mr-2 text-sm font-light text-white/50">{link.number}</span>
                  {link.label}
                  {link.active && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-full bg-brand"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
