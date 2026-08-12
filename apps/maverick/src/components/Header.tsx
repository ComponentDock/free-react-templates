import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Header recreated from the ColorLib "Clark" navbar: transparent over the
   black hero, turning fixed with a black background + soft shadow once the
   page is scrolled; links get the amber underline on hover/active. */

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'bg-black shadow-[0_0_10px_0_rgba(0,0,0,0.1)]' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#home-section" className="text-2xl font-black tracking-wide text-white">
          {BRAND.toUpperCase()}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'group relative px-5 py-2 text-[16px] text-white transition-colors hover:text-white',
                link.active ? 'text-white' : 'text-white/90',
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-brand transition-all duration-300',
                  link.active ? 'w-6' : 'w-0 group-hover:w-6',
                )}
              />
            </a>
          ))}
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
        className={cn('bg-black px-6 pb-6 lg:hidden', open ? 'block' : 'hidden')}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
