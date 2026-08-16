import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Phone, X, Zap } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { blogDropdown, header, navLinks, siteName } from '../data'

/* Header (source: header.header-area.header-transparent → sticky bar).
   Transparent over the hero, turns solid white with a soft shadow on
   scroll. Logo wordmark left, centered nav (Blog opens a dropdown on
   hover/focus/click), "Call Us:" phone line + pink pill "Let's Talk"
   right; mobile collapses to a hamburger panel. */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const phoneHref = 'tel:' + header.phoneDisplay.replace(/[^\d+]/g, '')

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white py-[15px] shadow-[0_10px_30px_0_rgba(0,0,0,0.08)]'
          : 'bg-transparent py-6',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-[15px]"
      >
        {/* Logo wordmark (source: a.logo — icon mark + wordmark). */}
        <a
          href="#home"
          className="flex items-center gap-2 font-heading text-2xl font-bold text-navy"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-brand to-brand-dark text-white"
            aria-hidden="true"
          >
            <Zap className="h-5 w-5" />
          </span>
          {siteName}
        </a>

        {/* Desktop centered nav (source: nav.main-menu). */}
        <ul className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              {link.label === 'Blog' ? (
                <a
                  href="#blog"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen(true)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="flex items-center gap-1 px-4 py-2 text-base font-medium text-navy transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', dropdownOpen && 'rotate-180')}
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <a
                  href={link.href}
                  className="block px-4 py-2 text-base font-medium text-navy transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link.label}
                </a>
              )}
              {link.label === 'Blog' && dropdownOpen && (
                <ul className="absolute left-4 top-full mt-2 w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg">
                  {blogDropdown.map((item) => (
                    <li key={item}>
                      <a
                        href="#blog"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-[15px] text-copy transition-colors hover:bg-band hover:text-brand"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions (source: div.left-side — Call Us + Let's Talk). */}
        <div className="hidden items-center justify-end gap-6 lg:flex">
          <a
            href={phoneHref}
            className="flex items-center gap-2 text-base text-navy transition-colors hover:text-brand"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {header.phoneLabel} {header.phoneDisplay}
          </a>
          <ButtonLink
            href="#contact"
            className="rounded-full bg-gradient-to-b from-brand to-brand-dark px-9 py-[11px] text-lg font-medium text-white shadow-[0_10px_20px_0_rgba(255,68,149,0.35)] transition-all hover:from-brand-dark hover:to-brand"
          >
            {header.ctaLabel}
          </ButtonLink>
        </div>

        {/* Mobile burger toggle. */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="justify-self-end rounded-md p-2 text-navy lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu panel (source: collapsed stacked list). */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-t border-gray-100 bg-white px-[15px] py-4 shadow-lg lg:hidden">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded px-4 py-2.5 text-base font-medium text-navy transition-colors hover:bg-band hover:text-brand"
                  >
                    {link.label}
                  </a>
                  {link.label === 'Blog' && (
                    <ul className="pl-6">
                      {blogDropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#blog"
                            onClick={() => setMenuOpen(false)}
                            className="block rounded px-4 py-2 text-[15px] text-copy transition-colors hover:bg-band hover:text-brand"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
