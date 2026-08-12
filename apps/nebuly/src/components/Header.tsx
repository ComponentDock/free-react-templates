import { useEffect, useState } from 'react'
import { Cloud, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Header — fixed navbar, transparent over the royal-blue hero with white
   links and an outlined green CTA; on scroll it turns solid white with
   dark links and a filled brand-indigo CTA. Mobile menu: hamburger ->
   dropdown panel with the same links; Escape closes it. */

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
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

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home-section"
          className={cn(
            'flex items-center gap-2 text-2xl font-bold transition-colors',
            solid ? 'text-navy' : 'text-white',
          )}
        >
          <Cloud
            className={cn('h-7 w-7', solid ? 'text-brand' : 'text-accent')}
            aria-hidden="true"
          />
          {BRAND}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'page' : undefined}
              className={cn(
                'text-[16px] font-medium transition-colors',
                solid ? 'text-gray-600 hover:text-brand' : 'text-white/90 hover:text-accent',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact-section"
          className={cn(
            'hidden rounded-md px-5 py-[10px] text-[16px] font-medium transition-colors lg:inline-block',
            solid
              ? 'bg-brand text-white hover:bg-branddark'
              : 'border border-accent text-white hover:bg-accent hover:text-white',
          )}
        >
          Get started
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex h-10 w-10 items-center justify-center lg:hidden',
            solid ? 'text-navy' : 'text-white',
          )}
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
        className={cn('bg-white px-6 pb-6 shadow-md lg:hidden', open ? 'block' : 'hidden')}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 text-[16px] text-gray-700 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-section"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md bg-brand px-5 py-[10px] text-center text-[16px] font-medium text-white"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  )
}
