import { useEffect, useState } from 'react'
import { Cloud, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Header recreated from the ColorLib "Cloud83" header: a semi-transparent
   dark bar (rgba(0,0,0,0.63)) with a 2px brand-green bottom border, brand
   + cloud icon on the left, five nav links, and "Support 24/7" plus square
   Login (soft blue) and Register (brand green) buttons on the right. */

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={cn(
        'absolute left-0 right-0 top-0 z-50 border-b-2 border-brand bg-black/63',
        open && 'bg-darkbar',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#home-section" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Cloud className="h-7 w-7 text-brand" aria-hidden="true" />
          {BRAND}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Header actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="text-[16px] text-white/80">Support 24/7</span>
          <a
            href="#contact-section"
            className="min-w-[110px] bg-softblue px-5 py-[10px] text-center text-[16px] text-white transition-opacity hover:opacity-90"
          >
            Login
          </a>
          <a
            href="#contact-section"
            className="min-w-[110px] bg-brand px-5 py-[10px] text-center text-[16px] text-white transition-opacity hover:opacity-90"
          >
            Register
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn('bg-darkbar px-6 pb-6 lg:hidden', open ? 'block' : 'hidden')}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-[16px] text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
