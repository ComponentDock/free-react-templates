import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brand, navLinks, type NavLink } from '../data'

/** Dark header over the hero photo: Estately wordmark left, six uppercase
 *  links with a Pages dropdown, Sign in + outlined Join us on the right, and
 *  a hamburger toggler below lg that opens a white mobile panel. */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  const renderLink = (link: NavLink) =>
    'dropdown' in link ? (
      <div key={link.label} className="relative">
        <a
          href={link.href}
          onClick={(event) => {
            event.preventDefault()
            setPagesOpen((value) => !value)
          }}
          aria-expanded={pagesOpen}
          className={cn(
            'flex items-center gap-1 border-b-2 border-transparent pb-1 text-base text-white transition-colors hover:border-brand',
            pagesOpen && 'border-brand',
          )}
        >
          {link.label}
          <ChevronDown
            className={cn('h-4 w-4 transition-transform', pagesOpen && 'rotate-180')}
            aria-hidden="true"
          />
        </a>
        {pagesOpen && (
          <div className="absolute left-0 top-full w-56 bg-white py-3 shadow-[2px_7px_20px_rgba(0,0,0,0.15)]">
            {link.dropdown.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
                className="block px-5 py-2 text-base text-gray-700 transition-colors hover:text-brand"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    ) : (
      <a
        key={link.label}
        href={link.href}
        className={cn(
          'border-b-2 border-transparent pb-1 text-base text-white transition-colors hover:border-brand',
          link.label === 'Home' && 'border-brand',
        )}
      >
        {link.label}
      </a>
    )

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="leading-tight" aria-label="Estately">
          <span className="block text-xl font-bold uppercase tracking-[0.18em] text-white">
            {brand.name}
          </span>
          <span className="block text-[10px] uppercase tracking-[0.42em] text-white/70">
            {brand.tagline}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map(renderLink)}
        </nav>

        <div className="flex items-center gap-6">
          <a
            href="#signin"
            className="hidden text-base text-white transition-colors hover:text-white/80 lg:inline-block"
          >
            Sign in
          </a>
          <a
            href="#join"
            className="hidden min-w-[130px] border-2 border-white px-4 py-2 text-center text-base text-white transition-colors hover:bg-white hover:text-charcoal lg:inline-block"
          >
            Join us
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg lg:hidden',
          menuOpen ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-3 text-base text-heading transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="mt-3 min-w-[130px] border-2 border-brand px-4 py-2 text-center text-base text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Join us
          </a>
        </nav>
      </div>
    </header>
  )
}
