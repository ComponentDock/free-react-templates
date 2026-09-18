import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — dark overlay over hero, transparent bg with white brand and
   links. Mobile: slide-in drawer with hamburger toggle. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home-section" className="text-2xl font-bold text-white">
          {BRAND}
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                link.active ? 'text-white' : 'text-white/70 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-section"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Request a Quote
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="bg-dark px-6 pb-8 pt-2 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block py-3 text-sm font-medium',
                link.active ? 'text-white' : 'text-white/70',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Request a Quote
          </a>
        </nav>
      )}
    </header>
  )
}
