import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import {
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchLabel,
  siteName,
  stickyThreshold,
  submenuLabel,
} from '../data'
import { cn } from '@free-react-templates/ui'
import { SocialIcons } from './SocialIcons'

export function Header() {
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > stickyThreshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      {/* header_area — white bar: serif wordmark left, centered menu_nav,
          social icons + search right; fixed with a gray bg + shadow once
          the page scrolls (.navbar_fixed .main_menu). */}
      <nav
        aria-label={navLabel}
        data-sticky={sticky}
        className={cn(
          'relative z-40 bg-white',
          sticky && 'fixed inset-x-0 top-0 shadow-[0_3px_16px_rgba(0,0,0,0.1)]',
        )}
      >
        <div className="relative mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 sm:px-8">
          <a href="#" className="font-serif text-2xl font-bold tracking-wide text-ink">
            {siteName}
          </a>

          {/* menu_nav — centered primary navigation (Lora 15px/700 #3a414e). */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={item.children ? () => setPagesOpen(true) : undefined}
                onMouseLeave={item.children ? () => setPagesOpen(false) : undefined}
                onFocus={item.children ? () => setPagesOpen(true) : undefined}
                onBlur={item.children ? () => setPagesOpen(false) : undefined}
              >
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children ? pagesOpen : undefined}
                  className={cn(
                    'flex items-center gap-1 py-[30px] font-serif text-[15px] font-bold text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />}
                </a>

                {/* Pages dropdown — white panel, items invert to the blue
                    gradient on hover (#4dabff → #62ddff). */}
                {item.children && pagesOpen && (
                  <ul
                    aria-label={submenuLabel}
                    className="absolute left-0 top-full w-48 border-t-2 border-brand bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
                  >
                    {item.children.map((child) => (
                      <li key={child}>
                        <a
                          href="#"
                          className="block px-5 py-2.5 font-serif text-sm font-bold text-ink transition-colors hover:bg-gradient-to-r hover:from-sky-from hover:to-sky-to hover:text-white"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* navbar-social + search icon (right). */}
          <div className="hidden items-center gap-6 lg:flex">
            <SocialIcons className="text-[#222]" />
            <button
              type="button"
              aria-label={searchLabel}
              className="text-ink transition-colors hover:text-brand"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile hamburger (navbar-collapse toggler). */}
          <button
            type="button"
            aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={menuOpen}
            aria-controls="serif-mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center text-ink transition-colors hover:text-brand lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu (navbar-collapse equivalent). */}
      {menuOpen && (
        <nav
          id="serif-mobile-menu"
          aria-label={mobileNavLabel}
          className="relative z-40 border-t border-hairline bg-white px-4 pb-6 pt-2 shadow-md sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'block py-3 font-serif text-[15px] font-bold text-ink transition-colors hover:text-brand',
                    item.active && 'text-brand',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
