import { useEffect, useState } from 'react'
import { Clock, MapPin, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, quickContact } from '../data'
import { BrandIcon } from './social-icons'

const socials = [
  { label: 'Facebook', name: 'facebook' as const },
  { label: 'Twitter', name: 'twitter' as const },
  { label: 'LinkedIn', name: 'linkedin' as const },
]

/** Emblem header: transparent two-row header over the hero — row 1 logo
 *  (white wordmark + red dot) + quick contact (address/hours); row 2 white
 *  nav bar with links + social icons. Sticky on scroll with white bg,
 *  shadow, red logo and shrunk padding per the reference. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled && 'fixed bg-white shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]',
      )}
    >
      <div className={cn('px-6 transition-all duration-300 lg:px-10', scrolled ? 'py-0' : 'py-4')}>
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className={cn(
              'text-[2.7rem] font-bold leading-none transition-colors',
              scrolled ? 'text-brand' : 'text-white',
            )}
          >
            Emblem<span className="text-brand">.</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white lg:flex">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {quickContact.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {quickContact.hours}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="emblem-mobile-menu"
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-light lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={cn(
                      'inline-block px-[15px] py-5 text-[15px] transition-colors',
                      link.active ? 'font-bold text-brand' : 'text-ink hover:text-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center lg:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="p-5 text-ink transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="emblem-mobile-menu"
          className="border-t border-line bg-white px-6 py-4 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block border-b border-line py-3 text-[15px] transition-colors',
                      link.active ? 'font-bold text-brand' : 'text-ink hover:text-brand',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center pt-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="p-3 text-ink transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
