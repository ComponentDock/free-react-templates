import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, Server, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks, pagesDropdown } from '../data'

const primaryLinks = navLinks.slice(0, 3)
const secondaryLinks = navLinks.slice(3)

/** White sticky main navigation with a Pages dropdown and mobile menu. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    setPagesOpen(false)
  }

  const linkClasses =
    'text-xs font-medium tracking-widest text-ink-900 uppercase transition-colors hover:text-primary-500'

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-line-200 bg-white transition-all duration-300',
        scrolled ? 'shadow-md' : 'border-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Uplink home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 text-white">
            <Server className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-bold tracking-wide text-ink-900">Uplink</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {primaryLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setPagesOpen((value) => !value)}
              aria-expanded={pagesOpen}
              aria-haspopup="menu"
              className={cn(linkClasses, 'flex items-center gap-1')}
            >
              Pages
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', pagesOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {pagesOpen ? (
              <div
                role="menu"
                className="absolute top-full left-0 mt-2 w-44 rounded-lg border border-line-200 bg-white py-2 shadow-lg"
              >
                {pagesDropdown.map((label) => (
                  <a
                    key={label}
                    role="menuitem"
                    href={label === 'Elements' ? '#features' : '#blog'}
                    onClick={() => setPagesOpen(false)}
                    className="block px-4 py-2 text-sm text-ink-900 transition-colors hover:bg-band-50 hover:text-primary-500"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          {secondaryLinks.map((link) => (
            <a key={link.label} href={link.href} className={linkClasses}>
              {link.label}
            </a>
          ))}

          <button
            type="button"
            aria-label="Search"
            className="text-ink-900 transition-colors hover:text-primary-500"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
          aria-expanded={open}
          className="text-ink-900 lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {open ? (
        <nav
          aria-label="Mobile"
          className="absolute top-full left-0 z-50 w-full border-t border-line-200 bg-white px-4 pt-2 pb-6 shadow-lg lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block border-b border-line-200 py-3 text-xs font-medium tracking-widest text-ink-900 uppercase transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={closeMenu}
            className="block w-full border-b border-line-200 py-3 text-left text-xs font-medium tracking-widest text-ink-900 uppercase transition-colors hover:text-primary-500"
          >
            Pages
          </button>
          <div className="space-y-2 py-3 pl-4">
            {pagesDropdown.map((label) => (
              <a
                key={label}
                href={label === 'Elements' ? '#features' : '#blog'}
                onClick={closeMenu}
                className="block text-sm text-mute-500 transition-colors hover:text-primary-500"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
