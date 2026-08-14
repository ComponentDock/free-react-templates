import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Navbar — transparent over the hero, turns solid black on scroll
   (the original dark navbar; solid #000 on scroll and on mobile).
   Brand left, 8 anchor links right; mobile collapses into a slide-down
   panel with a hamburger toggle. */
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

  const linkClasses = (active?: boolean) =>
    cn(
      'text-[13px] font-bold uppercase tracking-wider transition-colors',
      active
        ? 'text-brand'
        : scrolled
          ? 'text-white/90 hover:text-brand'
          : 'max-lg:text-white/90 lg:text-black/80 hover:text-brand',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 max-lg:bg-black transition-colors',
        scrolled ? 'bg-black' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a
          href="#home-section"
          className={cn(
            'text-2xl font-extrabold uppercase tracking-wide transition-colors',
            scrolled ? 'text-white' : 'max-lg:text-white lg:text-black',
          )}
        >
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                linkClasses(link.active),
                link.active && 'underline decoration-brand decoration-2 underline-offset-8',
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
          className="text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="bg-black px-4 pb-6 pt-1 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block py-2 text-[13px] font-bold uppercase tracking-wider',
                link.active ? 'text-brand' : 'text-white/90 hover:text-brand',
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
