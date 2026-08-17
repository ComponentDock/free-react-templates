import { Heart, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { navbarCta, navLinks } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={cn('sticky top-0 z-40 transition-colors', scrolled ? 'bg-brand-deep' : 'bg-brand')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'true' : undefined}
              className="px-2 py-1 text-[15px] font-medium text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:ml-auto">
          <a
            href="#donate"
            className="relative inline-flex items-center gap-2 px-10 py-4 text-[13px] font-medium uppercase tracking-wide text-ink"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-white [transform:skewX(-35deg)]"
            />
            <Heart aria-hidden="true" className="relative h-4 w-4" />
            <span className="relative">{navbarCta}</span>
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex items-center gap-2 rounded p-2 text-white lg:hidden"
          >
            <span className="text-[13px] font-medium uppercase tracking-wide">Menu</span>
            {mobileOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/20 bg-brand px-4 pb-6 pt-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-3 text-[15px] font-medium text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center gap-2 bg-white px-8 py-3 text-[13px] font-medium uppercase text-ink"
          >
            <Heart aria-hidden="true" className="h-4 w-4" />
            {navbarCta}
          </a>
        </div>
      )}
    </nav>
  )
}
