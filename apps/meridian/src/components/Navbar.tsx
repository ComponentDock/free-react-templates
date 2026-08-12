import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Navbar recreated from the source's site-navbar: an absolute transparent
   bar over the white hero with the wordmark and five plain text links; on
   scroll it sticks with a white background and soft shadow and the logo
   turns brand green. Mobile: hamburger toggler opening a slide-in menu.
   The source has no call-to-action button — none is added. */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a
          href="#home"
          aria-label="Meridian home"
          className={cn(
            'text-2xl font-bold uppercase tracking-wide transition-colors',
            scrolled ? 'text-brand' : 'text-black',
          )}
        >
          {BRAND}
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? 'page' : undefined}
              className={cn(
                'text-sm font-medium transition-colors hover:text-black',
                i === 0 ? 'text-black' : 'text-black/70',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
          className="rounded p-2 text-black transition-colors hover:bg-black/5 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Dismiss mobile menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/40"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex w-72 flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold uppercase tracking-wide text-black">{BRAND}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close mobile menu"
                className="rounded p-1 text-black transition-colors hover:bg-black/5"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-black/70 transition-colors hover:bg-black/5 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
