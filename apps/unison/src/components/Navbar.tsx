import { useEffect, useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Transparent-over-hero navbar that turns solid white with a blue wordmark
 *  on scroll, with an About Us dropdown (incl. nested "More Links") and an
 *  accessible mobile hamburger menu. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = (isScrolled: boolean) =>
    cn(
      'text-sm font-medium transition-colors',
      isScrolled ? 'text-gray-900 hover:text-brand' : 'text-white hover:text-white/80',
    )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a
          href="#home-section"
          className={cn(
            'text-2xl font-black uppercase tracking-wide transition-colors',
            scrolled ? 'text-brand' : 'text-white',
          )}
        >
          Unison
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => {
                  setAboutOpen(false)
                  setMoreOpen(false)
                }}
                onFocus={() => setAboutOpen(true)}
                onBlur={() => {
                  setAboutOpen(false)
                  setMoreOpen(false)
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={aboutOpen}
                  onClick={() => setAboutOpen((open) => !open)}
                  className={cn(linkClasses(scrolled), 'inline-flex items-center gap-1')}
                >
                  {link.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={cn('h-4 w-4 transition-transform', aboutOpen && 'rotate-180')}
                  />
                </button>
                {aboutOpen ? (
                  <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                    {link.dropdown.map((item) => (
                      <li
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setMoreOpen(Boolean(item.nested))}
                        onMouseLeave={() => setMoreOpen(false)}
                      >
                        {item.nested ? (
                          <>
                            <span className="flex items-center justify-between px-4 py-2 text-sm text-gray-700">
                              {item.label}
                              <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                            </span>
                            {moreOpen ? (
                              <ul className="absolute left-full top-0 w-44 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/5">
                                {item.nested.map((sub) => (
                                  <li key={sub.label}>
                                    <a
                                      href={sub.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand"
                                    >
                                      {sub.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </>
                        ) : (
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <a key={link.label} href={link.href} className={linkClasses(scrolled)}>
                {link.label}
              </a>
            ),
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white shadow-lg lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    type="button"
                    aria-expanded={mobileAboutOpen}
                    onClick={() => setMobileAboutOpen((open) => !open)}
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-gray-900"
                  >
                    {link.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn(
                        'h-4 w-4 transition-transform',
                        mobileAboutOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  {mobileAboutOpen ? (
                    <ul className="mb-2 space-y-1 border-l border-gray-200 pl-4">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm text-gray-600 hover:text-brand"
                          >
                            {item.label}
                          </a>
                          {item.nested ? (
                            <ul className="space-y-1 pl-4">
                              {item.nested.map((sub) => (
                                <li key={sub.label}>
                                  <a
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 text-sm text-gray-500 hover:text-brand"
                                  >
                                    {sub.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-gray-900 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
