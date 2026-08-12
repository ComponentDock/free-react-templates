import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const PAGE_LINKS = [
  { label: 'Work Details', href: '#work' },
  { label: 'Elements', href: '#elements' },
] as const

/* Header recreated from the source's transparent bar over the white hero:
   a blue-square logo with the wordmark, centered nav links (Home active
   with a blue underline), a Pages dropdown, a yellow-underlined "Say Hi"
   link, and a hamburger on narrow viewports. */

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header className="bg-transparent">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" aria-label="Axiom home" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center bg-play text-lg font-semibold text-white">
            A
          </span>
          <span className="text-xl font-semibold tracking-wide text-ink">Axiom</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? 'page' : undefined}
              className={cn(
                'relative px-4 py-2 text-base capitalize text-ink transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-[4px] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform',
                i === 0 && 'after:scale-x-100',
                'hover:after:scale-x-100',
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="relative">
            <button
              type="button"
              aria-label="Pages menu"
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              onClick={() => setDropdownOpen((value) => !value)}
              className="flex items-center gap-1 px-4 py-2 text-base capitalize text-ink transition-colors hover:text-ink"
            >
              Pages
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {dropdownOpen ? (
              <div
                role="menu"
                aria-label="Pages"
                className="absolute left-0 top-full mt-1 w-44 rounded-md border border-gray-100 bg-white py-2 shadow-lg"
              >
                {PAGE_LINKS.map((item) => (
                  <a
                    key={item.label}
                    role="menuitem"
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm capitalize text-gray-600 transition-colors hover:bg-gray-50 hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Say Hi */}
        <div className="hidden items-center lg:flex">
          <a
            href="#contact"
            className="relative px-2 py-1.5 text-base text-ink after:absolute after:inset-x-2 after:bottom-0 after:h-[3px] after:bg-yellow"
          >
            Say Hi
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label="Toggle mobile menu"
          className="rounded p-2 text-ink transition-colors hover:bg-gray-100 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Dismiss mobile menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 h-full w-full bg-black/40"
          />
          <nav
            aria-label="Mobile"
            className="absolute inset-y-0 right-0 flex w-72 flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold tracking-wide text-ink">Axiom</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close mobile menu"
                className="rounded p-1 text-gray-500 transition-colors hover:bg-gray-100"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              {PAGE_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-lg border-t border-gray-100 px-3 py-2 text-sm font-medium text-ink"
              >
                Say Hi
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
