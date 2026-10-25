import { useEffect, useRef, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, EVENT, NAV_LINKS } from '../content'
import { SocialRail } from './Chrome'
import { SearchOverlay } from './SearchOverlay'

/**
 * 101px transparent bar floating on the hero with the magenta→indigo wash at
 * `.75` behind it: wordmark at the left gutter, five uppercase items with the
 * active one painted indigo, the five brand glyphs and the 55×55 search square.
 * Under `lg` the items collapse into a drawer with the same links and glyphs.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [active, setActive] = useState<string>('#top')
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) {
      return undefined
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const itemClass = (href: string) =>
    cn(
      'block px-[24px] py-[15px] text-[16px] leading-none font-black tracking-[1px] text-white uppercase transition-colors',
      'rounded-[4px] hover:bg-brand',
      href === active && 'bg-brand',
    )

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-hero-start),var(--color-hero-end))] opacity-75"
      />
      <div className="shell relative flex h-[101px] items-center justify-between gap-6">
        <a href="#top" aria-label={`${BRAND} home`} className="block w-[160px] text-white">
          <span className="block text-[22px] leading-none font-black tracking-[3px] uppercase">
            {BRAND}
          </span>
          <span className="mt-[6px] block text-[11px] leading-none tracking-[2px] text-white/80 uppercase">
            Conference {EVENT.year}
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.href === active ? 'true' : undefined}
                  onClick={() => setActive(link.href)}
                  className={itemClass(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-[42px] lg:flex">
          <SocialRail />
          <button
            type="button"
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            className="flex h-[55px] w-[55px] items-center justify-center rounded-[4px] bg-brand text-white transition-colors hover:bg-brand-dark"
          >
            <Search aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <button
          ref={burgerRef}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
          onClick={() => setMenuOpen((value) => !value)}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-[4px] bg-brand text-white lg:hidden"
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-drawer"
          className="absolute inset-x-0 top-full bg-navy/95 px-6 py-6 lg:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-current={link.href === active ? 'true' : undefined}
                    onClick={() => {
                      setActive(link.href)
                      setMenuOpen(false)
                    }}
                    className="block py-2 text-[16px] font-black tracking-[1px] text-white uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialRail className="mt-6" size={16} />
        </div>
      ) : null}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}
