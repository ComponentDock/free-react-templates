import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BrandIcon } from './BrandIcon'
import { navLinks, pagesDropdown, socialLinks } from '../data'

// Absolute translucent deep-purple header over the hero, with a desktop nav,
// a Pages dropdown, social icons and a mobile hamburger menu.
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-overlay">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-display text-[28px] font-bold uppercase tracking-wide text-white"
        >
          Rhythm
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'true' : undefined}
              className="text-sm uppercase tracking-wide text-white transition hover:text-brand-alt"
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setPagesOpen((open) => !open)}
              aria-expanded={pagesOpen}
              className="flex items-center gap-1 text-sm uppercase tracking-wide text-white transition hover:text-brand-alt"
            >
              Pages
              <ChevronDown className="h-4 w-4" />
            </button>
            {pagesOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[160px] bg-brand-dark py-2 shadow-xl">
                {pagesDropdown.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-2 text-sm uppercase tracking-wide text-white transition hover:bg-brand"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-white transition hover:text-brand-alt"
            >
              <BrandIcon
                name={
                  social.label.toLowerCase() as 'facebook' | 'twitter' | 'instagram' | 'dribbble'
                }
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className={cn('flex flex-col gap-1 bg-brand-dark px-6 py-4 lg:hidden')}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={link.label === 'Home' ? 'true' : undefined}
              className="py-2 text-sm uppercase tracking-wide text-white hover:text-brand-alt"
            >
              {link.label}
            </a>
          ))}
          {pagesDropdown.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 pl-4 text-sm uppercase tracking-wide text-white/80 hover:text-brand-alt"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
