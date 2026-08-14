import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { NAV_LINKS } from '../data'

/* Header (source: nav.navbar — fixed transparent dark bar over the hero that
   switches to a light scrolled variant; brand first word in the red primary,
   pill "Get Started" CTA, mobile hamburger collapse). */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      data-variant={scrolled ? 'solid' : 'transparent'}
      aria-label="Main"
      className={cn(
        'fixed inset-x-0 top-0 z-50 px-6 py-5 transition-all duration-300',
        scrolled ? 'bg-white shadow-[0_10px_30px_0_rgba(0,0,0,0.08)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" className="font-display text-2xl font-bold">
          <span className="text-brand">Stay</span>
          <span className={scrolled ? 'text-ink' : 'text-white'}>Haven</span>
        </a>

        {/* Desktop menu (source: ul.navbar-nav — white anchor links). */}
        <ul className="hidden items-center lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block px-4 py-2 text-[15px] transition-colors hover:text-brand',
                  scrolled ? 'text-ink' : 'text-white',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA (source: li.cta-btn — pill highlight). */}
        <a
          href="#booking"
          className={cn(
            'hidden rounded-full border px-5 py-2 text-[15px] transition-colors hover:border-brand hover:bg-brand hover:text-white lg:inline-block',
            scrolled
              ? 'border-ink text-ink hover:border-brand'
              : 'border-white text-white hover:border-brand',
          )}
        >
          Get Started
        </a>

        {/* Mobile burger toggle. */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={cn('rounded-md p-2 lg:hidden', scrolled ? 'text-ink' : 'text-white')}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu panel (source: collapsed stacked list on dark). */}
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-ink px-6 py-4 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded px-4 py-2 text-[15px] text-white transition-colors hover:bg-white/10 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full border border-white/60 px-5 py-2 text-center text-[15px] text-white transition-colors hover:bg-brand hover:border-brand"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  )
}
