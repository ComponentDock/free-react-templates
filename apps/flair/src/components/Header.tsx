import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Header — the fixed 100px transparent header over the hero: lowercase
   "flair" wordmark, white nav (Home active · Pages · Work · Blog · Shop ·
   Contact), search + bag icons; on scroll it darkens to rgba(4,8,29,0.85);
   the search icon slides a white search bar down from the top (Escape or
   the close button hides it again); on mobile a hamburger opens a stacked
   gradient panel. */
export function Header() {
  const [sticky, setSticky] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!searchOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [searchOpen])

  return (
    <header
      aria-label="Site header"
      className={cn(
        'fixed inset-x-0 top-0 z-[999] h-[100px] border-b border-white/10 px-[30px] transition-colors lg:px-[60px]',
        sticky && 'bg-[rgba(4,8,29,0.85)]',
      )}
    >
      <div className="flex h-full items-center justify-between">
        <a href="#home" aria-label={BRAND} className="text-[30px] font-bold lowercase text-white">
          {BRAND}
        </a>

        <div className="flex items-center">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {NAV_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href={label === 'Home' ? '#home' : '#'}
                    aria-current={label === 'Home' ? 'page' : undefined}
                    className="px-[25px] text-sm font-medium text-white transition-colors hover:text-white/70"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-[65px] flex items-center gap-[30px]">
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-white transition-colors hover:text-white/70"
            >
              <Search aria-hidden="true" className="h-4 w-4" />
            </button>
            <a
              href="#"
              aria-label="Shopping bag"
              className="text-white transition-colors hover:text-white/70"
            >
              <ShoppingBag aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-[30px] border-2 border-white p-2 text-white lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-[100px] bg-gradient-to-r from-brand-purple to-brand-green p-[15px] lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={label === 'Home' ? '#home' : '#'}
                  className="block px-[15px] py-2 text-sm font-medium text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {searchOpen && (
        <div className="fixed inset-x-0 top-0 z-[1000] flex h-[100px] items-center border-b border-line bg-white px-[30px] lg:px-[60px]">
          <input
            autoFocus
            type="search"
            placeholder="| Enter Your Search..."
            aria-label="Search input"
            className="w-full bg-transparent text-[28px] text-muted outline-none placeholder:text-muted lg:text-[36px]"
          />
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="ml-6 text-accent"
          >
            <X aria-hidden="true" className="h-[30px] w-[30px]" />
          </button>
        </div>
      )}
    </header>
  )
}
