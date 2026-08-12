import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS, PAGES_DROPDOWN } from '../data'

/* Header recreated from the source template's header area: a fixed dark
   bar with the wordmark, an uppercase menu (Pages opens a dropdown panel)
   and an outline "Get Tickets" pill; collapses to a hamburger toggle on
   small screens. The bar turns solid black with a soft shadow once the
   page is scrolled. */

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled ? 'bg-black shadow-[0_2px_40px_8px_rgba(15,15,15,0.15)]' : 'bg-black/80',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a
          href="#home"
          className="text-3xl font-bold uppercase tracking-wide text-white"
          aria-label="Summit home"
        >
          {BRAND}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) =>
            link.label === 'Pages' ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <a
                  href="#pages"
                  className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </a>
                {dropdownOpen ? (
                  <div className="absolute left-0 top-full mt-4 w-48 rounded bg-white py-2 shadow-lg">
                    {PAGES_DROPDOWN.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-navy-deep transition-colors hover:bg-brand/10 hover:text-brand"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={i === 0 ? 'page' : undefined}
                className={cn(
                  'text-sm font-medium uppercase tracking-wider transition-colors hover:text-white',
                  i === 0 ? 'text-white' : 'text-white/80',
                )}
              >
                {link.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#tickets"
            className="hidden h-[46px] items-center rounded-full border-2 border-brand px-[25px] text-sm font-medium uppercase tracking-wider text-brand transition-all hover:bg-brand-gradient hover:text-white lg:inline-flex"
          >
            Get Tickets
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="rounded p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex h-[46px] items-center justify-center rounded-full border-2 border-brand px-[25px] text-sm font-medium uppercase tracking-wider text-brand"
            >
              Get Tickets
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
