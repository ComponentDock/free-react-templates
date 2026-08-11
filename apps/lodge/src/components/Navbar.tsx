import { useEffect, useState } from 'react'
import { ChevronDown, MapPin, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  addressLabel,
  addressText,
  dropdownLabel,
  menuCloseLabel,
  menuOpenLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  siteName,
  stickyThreshold,
} from '../data'

/* Header — absolute charcoal (#353535) bar over the hero (original padding
   38px 0): white serif wordmark left, centered nav with a Facilities
   dropdown (white panel, 220px), a location-pin address widget right and a
   mobile hamburger menu. Becomes fixed with a shadow after scrolling past
   stickyThreshold. */
export function Navbar() {
  const [sticky, setSticky] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > stickyThreshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenus = () => {
    setMobileOpen(false)
    setOpenDropdown(false)
  }

  return (
    <header
      data-sticky={sticky}
      className={cn(
        'absolute inset-x-0 top-0 z-40 bg-charcoal',
        sticky && 'fixed shadow-[0_5px_25px_rgba(0,0,0,0.35)]',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-[30px] lg:px-6">
        <a href="#home" className="font-serif text-3xl tracking-wide text-white">
          {siteName}
        </a>

        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    aria-expanded={openDropdown}
                    aria-haspopup="true"
                    aria-controls="lodge-dropdown"
                    onClick={() => setOpenDropdown((value) => !value)}
                    className="inline-flex items-center gap-1.5 text-xl font-normal text-white transition-colors hover:text-gold"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('h-5 w-5 transition-transform', openDropdown && 'rotate-180')}
                    />
                  </button>
                  {openDropdown ? (
                    <ul
                      id="lodge-dropdown"
                      aria-label={dropdownLabel}
                      className="absolute top-full left-1/2 z-20 w-56 -translate-x-1/2 bg-white py-2 shadow-lg"
                    >
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#rooms"
                            onClick={closeMenus}
                            className="block px-5 py-[7px] text-xl text-heading transition-colors hover:text-gold"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={item.active ? 'page' : undefined}
                    className={cn(
                      'inline-block text-xl font-normal tracking-[0.5px] transition-colors hover:text-gold',
                      item.active ? 'text-gold' : 'text-white',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <MapPin aria-hidden="true" className="h-5 w-5 text-gold" />
          <span aria-label={addressLabel} className="text-sm tracking-[0.5px] text-white">
            {addressText}
          </span>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? menuCloseLabel : menuOpenLabel}
          aria-expanded={mobileOpen}
          aria-controls="lodge-mobile-menu"
          onClick={() => setMobileOpen((value) => !value)}
          className="text-white transition-colors hover:text-gold lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-7 w-7" />
          ) : (
            <Menu aria-hidden="true" className="h-7 w-7" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="lodge-mobile-menu"
          aria-label={mobileNavLabel}
          className="border-t border-white/10 lg:hidden"
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-white/10 last:border-b-0">
                {item.children ? (
                  <>
                    <p className="flex items-center justify-between px-4 py-3 text-xl text-gold">
                      {item.label}
                      <ChevronDown aria-hidden="true" className="h-5 w-5" />
                    </p>
                    <ul aria-label={dropdownLabel}>
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href="#rooms"
                            onClick={closeMenus}
                            className="block border-t border-white/10 px-8 py-3 text-lg text-white/80 transition-colors hover:text-gold"
                          >
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={item.href}
                    aria-current={item.active ? 'page' : undefined}
                    onClick={closeMenus}
                    className={cn(
                      'block px-4 py-3 text-xl transition-colors hover:text-gold',
                      item.active ? 'text-gold' : 'text-white',
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
