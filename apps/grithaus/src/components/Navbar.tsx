import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import { callHref, callLabel, dropdownLabel, dropdownLinks, megaLabel, navLinks, siteName } from '../data'

const linkClass =
  'px-[7px] text-[13px] font-bold uppercase text-white transition-colors hover:text-brand'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="top"
      data-variant={scrolled || menuOpen ? 'solid' : 'transparent'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[85px] transition-colors duration-300',
        scrolled || menuOpen ? 'bg-ink' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1170px] items-center justify-between px-4">
        <a
          href="#top"
          className="inline-flex items-center rounded-[10px] bg-white px-4 py-2 shadow-[0_0_25px_rgba(56,177,67,0.45)]"
        >
          <span className="text-[18px] font-extrabold uppercase tracking-[0.22em] text-ink">
            {siteName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {navLinks.slice(0, 1).map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              aria-expanded={pagesOpen}
              aria-haspopup="true"
              onClick={() => setPagesOpen((open) => !open)}
              className={cn(linkClass, 'inline-flex items-center gap-1')}
            >
              {dropdownLabel}
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            </button>
            {pagesOpen && (
              <ul className="absolute left-0 top-full mt-2 w-[200px] rounded-[10px] bg-white py-2 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                {dropdownLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block px-5 py-[7px] text-[13px] font-semibold uppercase text-ink transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="#services" className={linkClass}>
            {megaLabel}
          </a>

          {navLinks.slice(1).map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}

          <ButtonLink
            href={callHref}
            className={cn(btn.base, btn.gradient, 'ml-[30px] min-w-0')}
          >
            {callLabel}
          </ButtonLink>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border-2 border-white/40 text-white lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="bg-ink px-6 pb-8 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 text-[13px] font-bold uppercase text-white hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2 text-[13px] font-bold uppercase text-brand">{dropdownLabel}</li>
            {dropdownLinks.slice(2, 4).map((link) => (
              <li key={`mobile-${link.label}`}>
                <a
                  href={link.href}
                  className="block py-2 pl-4 text-[13px] font-semibold uppercase text-white/80 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#services" className="block py-2 text-[13px] font-bold uppercase text-white hover:text-brand">
                {megaLabel}
              </a>
            </li>
          </ul>
          <ButtonLink
            href={callHref}
            className={cn(btn.base, btn.gradient, 'mt-4 min-w-0')}
          >
            {callLabel}
          </ButtonLink>
        </div>
      )}
    </header>
  )
}
