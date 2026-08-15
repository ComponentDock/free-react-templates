import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import {
  cartCount,
  cartLabel,
  menuCloseLabel,
  menuTriggerLabel,
  mobileNavLabel,
  navItems,
  navLabel,
  searchCloseLabel,
  searchInputLabel,
  searchLabel,
  searchPlaceholder,
  siteName,
  socialLinks,
} from '../data'
import { cn } from '@free-react-templates/ui'
import { SocialIcon } from './SocialIcon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full bg-white transition-all duration-200',
        scrolled ? 'h-[70px]' : 'h-[130px]',
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        <a
          href="#home-section"
          className={cn(
            'font-bold text-ink transition-all duration-200',
            scrolled ? 'text-2xl' : 'text-[30px]',
          )}
        >
          {siteName}
        </a>

        {/* Desktop nav. */}
        <nav aria-label={navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-[46px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'text-base font-semibold text-muted transition-colors hover:text-ink',
                    item.active && 'text-ink',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster: cart, search, hamburger. */}
        <div className="flex items-center gap-6">
          <a
            href="#products-section"
            aria-label={cartLabel}
            className="flex items-center gap-2 text-ink"
          >
            <ShoppingBag aria-hidden="true" className="h-6 w-6" />
            <span className="text-base font-semibold">({cartCount})</span>
          </a>
          <button
            type="button"
            aria-label={searchOpen ? searchCloseLabel : searchLabel}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
            className="text-ink transition-colors hover:text-accent"
          >
            <Search aria-hidden="true" className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label={menuOpen ? menuCloseLabel : menuTriggerLabel}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="text-ink transition-colors hover:text-accent lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Search panel. */}
      {searchOpen && (
        <div className="absolute right-0 top-full w-full border-t border-faint bg-white px-6 py-4">
          <input
            type="search"
            aria-label={searchInputLabel}
            placeholder={searchPlaceholder}
            className="h-10 w-full max-w-[360px] border-b-2 border-line bg-transparent text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none"
          />
        </div>
      )}

      {/* Mobile full-screen menu. */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label={mobileNavLabel}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white px-6 pb-8 pt-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-ink">{siteName}</span>
            <button
              type="button"
              aria-label={menuCloseLabel}
              onClick={() => setMenuOpen(false)}
              className="text-ink transition-colors hover:text-accent"
            >
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-8 flex flex-col">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-faint">
                <a
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-lg font-semibold text-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <input
              type="search"
              aria-label={searchInputLabel}
              placeholder={searchPlaceholder}
              className="h-10 w-full border-b-2 border-line bg-transparent text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none"
            />
          </div>
          <ul aria-label="Social links" className="mt-auto flex items-center gap-5 pt-8">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="text-ink transition-colors hover:text-accent"
                >
                  <SocialIcon link={link} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
