import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'
import { cn } from '@free-react-templates/ui'

/** Navbar — transparent over the hero; solid #222222 when scrolled.
    Desktop row of six links; mobile hamburger opens a collapsible panel
    with the same links. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-40 w-full transition-colors',
        scrolled ? 'bg-dark shadow-lg' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="font-display text-2xl text-white">
          {BRAND}
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center lg:flex">
          {NAV_LINKS.map((label, index) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className={cn(
                'border-b-2 border-transparent px-6 py-2 text-sm font-medium transition-colors hover:border-brand hover:text-white',
                index === 0 ? 'text-white' : 'text-white/70',
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile panel (rendered only while open) */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-dark px-6 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-white/80 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
