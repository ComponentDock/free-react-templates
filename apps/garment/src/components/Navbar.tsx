import { useEffect, useState } from 'react'
import { ChevronDown, Heart, Menu, Moon, ShoppingBag, Sun, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pagesLinks, plainNavLinks, shopGroups } from '../data'

interface NavbarProps {
  onCartOpen: () => void
}

export function Navbar({ onCartOpen }: NavbarProps) {
  const [dark, setDark] = useState(() => window.localStorage.getItem('garment-dark') === 'true')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('garment-dark', String(dark))
  }, [dark])

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDropdown = (label: string) => {
    setOpenDropdown((current) => (current === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white dark:bg-gray-950">
      <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-widest text-ink dark:text-white"
        >
          Garment
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('Shop')}
              aria-expanded={openDropdown === 'Shop'}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
            >
              Shop
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === 'Shop' ? (
              <div
                role="menu"
                aria-label="Shop"
                className="absolute left-0 top-full mt-3 grid w-[640px] grid-cols-3 gap-8 border border-line bg-white p-8 shadow-lg dark:bg-gray-900"
              >
                {shopGroups.map((group) => (
                  <div key={group.title}>
                    <p className="font-display text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
                      {group.title}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {group.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#shop"
                            className="text-sm text-muted transition-colors hover:text-brand dark:text-gray-300"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown('Pages')}
              aria-expanded={openDropdown === 'Pages'}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
            >
              Pages
              <ChevronDown className="h-4 w-4" />
            </button>
            {openDropdown === 'Pages' ? (
              <div
                role="menu"
                aria-label="Pages"
                className="absolute left-0 top-full mt-3 w-56 border border-line bg-white p-4 shadow-lg dark:bg-gray-900"
              >
                <ul className="space-y-2">
                  {pagesLinks.map((link) => (
                    <li key={link}>
                      <a
                        href="#pages"
                        className="text-sm text-muted transition-colors hover:text-brand dark:text-gray-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {plainNavLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right meta cluster */}
        <div className="flex items-center divide-x divide-line">
          <label className="hidden items-center md:flex">
            <span className="sr-only">Search</span>
            <input
              type="search"
              placeholder="Type for search"
              className="h-[85px] w-52 bg-transparent px-4 text-sm text-muted outline-none placeholder:text-muted dark:text-gray-300"
            />
          </label>
          <button
            type="button"
            aria-label="Wishlist"
            className="flex h-[85px] w-14 items-center justify-center text-ink transition-colors hover:text-brand dark:text-white"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Account"
            className="flex h-[85px] w-14 items-center justify-center text-ink transition-colors hover:text-brand dark:text-white"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            onClick={onCartOpen}
            className="relative flex h-[85px] w-14 items-center justify-center text-ink transition-colors hover:text-brand dark:text-white"
          >
            <ShoppingBag className="h-5 w-5" />
            <span
              aria-hidden="true"
              className="absolute right-2 top-4 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 font-display text-[10px] font-bold text-white"
            >
              {3}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-[85px] w-14 items-center justify-center text-ink transition-colors hover:text-brand dark:text-white"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="flex h-[85px] w-14 items-center justify-center text-ink lg:hidden dark:text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn('border-t border-line lg:hidden', mobileOpen ? 'block' : 'hidden')}
      >
        <div className="space-y-5 px-4 py-6">
          {shopGroups.map((group) => (
            <div key={group.title}>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
                {group.title}
              </p>
              <ul className="mt-2 space-y-1">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#shop"
                      onClick={() => setMobileOpen(false)}
                      className="block py-1 text-sm text-muted dark:text-gray-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="space-y-1 border-t border-line pt-4">
            {pagesLinks.map((link) => (
              <li key={link}>
                <a
                  href="#pages"
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-sm text-muted dark:text-gray-300"
                >
                  {link}
                </a>
              </li>
            ))}
            {plainNavLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 text-sm font-medium uppercase tracking-wide text-ink dark:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
