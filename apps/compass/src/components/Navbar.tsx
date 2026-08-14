import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/* Transparent navbar over the hero; turns white with a shadow once the page
 * is scrolled (source .site-navbar.js-sticky-header). Mobile gets a
 * slide-in menu toggled by the hamburger. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-testid="navbar"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 py-5">
        <a href="#home" className="text-2xl font-bold text-ink">
          Compass<span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.active ? 'true' : undefined}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                link.active ? 'text-brand' : 'text-ink hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-72 bg-white p-6 shadow-xl transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <nav aria-label="Mobile navigation" className="mt-14 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={link.active ? 'true' : undefined}
              className={cn(
                'rounded-full px-5 py-2 text-base font-medium transition-colors',
                link.active ? 'text-brand' : 'text-ink hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
