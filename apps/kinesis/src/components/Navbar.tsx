import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/* Transparent navbar overlaid on the hero (solid #030513 on mobile).
   Desktop links uppercase with a red active state; mobile toggle opens a
   dark drop-down panel with the same links plus the CTA. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-10 z-40">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <a href="#home" className="text-xl font-bold uppercase tracking-wide text-white">
          Kinesis <span className="text-primary">Crossfit</span> &amp; Fitness
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'relative px-4 py-4 text-xs font-bold uppercase tracking-[2px] text-white transition-colors hover:text-primary',
                  link.active &&
                    'text-primary after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:bg-primary',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="relative bg-primary px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue before:absolute before:-left-3 before:top-0 before:h-full before:w-10 before:bg-primary before:[transform:skew(-25deg)] before:transition-colors hover:before:bg-blue"
          >
            <span className="relative z-10">Become A Member</span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-white md:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-0 top-full bg-ink px-5 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-wide text-white">Menu</p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block py-2 text-xs font-bold uppercase tracking-[2px] text-white transition-colors hover:text-primary',
                    link.active && 'text-primary',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-white"
          >
            Become A Member
          </a>
        </div>
      )}
    </header>
  )
}
