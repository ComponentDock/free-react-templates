import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navDropdowns, navLinks } from '../data'
import { cn } from '@free-react-templates/ui'

/** Fixed white header: Solo wordmark with a primary diamond icon, flat nav
 *  links, Blog/Pages disclosure dropdowns, and a mobile hamburger menu. A
 *  soft shadow appears once the page is scrolled (mirrors .header-scrolled). */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-white transition-shadow',
        scrolled && 'shadow-[0_4px_14px_rgba(0,0,0,0.12)]',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5"
      >
        <a href="#home" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-block h-4 w-4 rotate-45 bg-gradient-to-br from-primary to-accent"
          />
          <span className="text-2xl font-semibold uppercase tracking-wide text-ink">Solo</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          {navDropdowns.map((group) => (
            <div key={group.label} className="relative">
              <button
                type="button"
                aria-expanded={openDropdown === group.label}
                onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-primary"
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    openDropdown === group.label && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === group.label && (
                <div className="absolute left-0 top-full mt-2 w-44 bg-white py-2 shadow-lg">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-ink lg:hidden"
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-ink hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          {navDropdowns.map((group) => (
            <div key={group.label}>
              <button
                type="button"
                aria-expanded={openDropdown === group.label}
                onClick={() => setOpenDropdown(openDropdown === group.label ? null : group.label)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium uppercase tracking-wide text-ink"
              >
                {group.label}
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform',
                    openDropdown === group.label && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
              {openDropdown === group.label && (
                <div className="pl-4">
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 text-sm text-muted hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
