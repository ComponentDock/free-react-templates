import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — transparent over the hero, turns fixed white with a shadow on
   scroll. Brand left, 8 anchor links right; mobile collapses into a
   slide-down panel with a hamburger toggle. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-white py-2 shadow-[0_0_10px_rgba(0,0,0,0.1)]' : 'bg-transparent py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <a
          href="#home-section"
          className={cn(
            'text-2xl font-extrabold uppercase tracking-wide transition-colors',
            scrolled ? 'text-black' : 'text-white',
          )}
        >
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-[13px] font-bold uppercase tracking-wider transition-colors',
                scrolled
                  ? link.active
                    ? 'text-brand'
                    : 'text-black hover:text-brand'
                  : link.active
                    ? 'text-brand'
                    : 'text-white/90 hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn('lg:hidden', scrolled ? 'text-black' : 'text-white')}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="mt-2 border-t border-gray-200 bg-white px-4 py-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block py-2 text-[13px] font-bold uppercase tracking-wider',
                link.active ? 'text-brand' : 'text-black hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
