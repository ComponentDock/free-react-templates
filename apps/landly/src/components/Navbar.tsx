import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { menuToggleLabel, navLinks, siteName } from '../data'

/** Transparent navbar over the hero, white + sticky once the page scrolls. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'fixed bg-white py-3 shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]'
          : 'absolute bg-transparent py-8',
      )}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-6 px-4">
        <a
          href="#top"
          className={cn(
            'text-[1.7rem] uppercase leading-none transition-colors',
            scrolled ? 'text-brand' : 'text-white',
          )}
        >
          {siteName}
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={index === 0 ? 'page' : undefined}
                  className={cn(
                    'text-[15px] transition-colors hover:text-brand',
                    index === 0 ? 'text-brand' : scrolled ? 'text-black' : 'text-white',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={menuToggleLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className={cn('md:hidden', scrolled ? 'text-black' : 'text-white')}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="mx-4 mt-4 bg-white shadow-lg md:hidden">
          <ul className="divide-y divide-black/5">
            {navLinks.map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-[15px] text-black transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
