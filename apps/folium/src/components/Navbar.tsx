import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Transparent navbar over the hero; turns into a fixed white bar with a
 *  shadow and black links (active link mint) once the user scrolls past
 *  the hero — matching the reference's `.scrolled` behavior. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <a
          href="#home"
          className={cn(
            'py-6 text-2xl font-light tracking-wide transition-colors',
            scrolled ? 'text-black' : 'text-white',
          )}
        >
          Folium
        </a>

        <nav aria-label="Main" className="hidden items-center lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-5 py-8 text-base transition-colors',
                scrolled
                  ? index === 0
                    ? 'text-primary'
                    : 'text-black hover:text-primary'
                  : index === 0
                    ? 'text-white'
                    : 'text-gray-100 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="folium-mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className={cn(
            'flex items-center gap-2 py-8 text-base lg:hidden',
            scrolled ? 'text-black' : 'text-white',
          )}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
          Menu
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="folium-mobile-menu"
          aria-label="Mobile"
          className={cn(
            'border-t lg:hidden',
            scrolled ? 'border-gray-100 bg-white' : 'border-white/10 bg-black/70',
          )}
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-2 text-base',
                    scrolled ? 'text-black hover:text-primary' : 'text-white hover:text-primary',
                  )}
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
