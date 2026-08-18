import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

const SCROLL_THRESHOLD = 10

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-colors duration-300',
        scrolled ? 'bg-brand shadow-md' : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Swatch home">
          <span className="text-2xl font-bold tracking-wide text-white">Swatch</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  'block px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                  scrolled
                    ? link.label === 'Home'
                      ? 'bg-brand-soft text-white'
                      : 'text-white hover:bg-white/10'
                    : 'text-white hover:text-white/80',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded text-white transition-colors hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="bg-brand lg:hidden">
          <ul className="space-y-1 px-4 pb-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-soft"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
