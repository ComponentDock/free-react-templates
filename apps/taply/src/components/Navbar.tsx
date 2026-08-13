import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Transparent navbar over the gradient hero: Taply brand, five uppercase
 *  anchor links, a Download button, and a mobile toggler (solid white
 *  panel below lg). */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a
          href="#home"
          className="text-xl font-bold uppercase tracking-widest text-white"
          aria-label="Taply"
        >
          Taply
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-medium uppercase tracking-widest text-white/90 transition-colors hover:text-white',
                index === 0 && 'font-bold text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded border border-white/70 px-5 py-2 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:border-white hover:text-white lg:inline-block"
          >
            Download
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-white/10 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-100 py-3 text-xs font-medium uppercase tracking-widest text-brand-purple transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 rounded bg-gradient-to-r from-brand to-brand-2 px-5 py-2 text-center text-xs font-medium uppercase tracking-widest text-white"
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  )
}
