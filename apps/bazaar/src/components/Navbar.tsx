import { useEffect, useState } from 'react'
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'Catalogue', href: '#catalogue' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Contact', href: '#contact' },
] as const

const DARK_KEY = 'bazaar-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-gray-950">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#home" className="flex items-center" aria-label="Bazaar">
          <span className="border-2 border-ink px-2 py-0.5 font-sans text-lg font-black uppercase tracking-widest text-ink dark:border-white dark:text-white">
            Bazaar
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand',
                index === 0 && 'text-ink dark:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-300"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-300"
          >
            <Heart className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Shopping bag"
            className="relative flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-300"
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span
              className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white"
              aria-hidden="true"
            >
              2
            </span>
          </button>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-300"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand dark:text-gray-300 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg py-3 text-sm font-bold uppercase tracking-widest text-gray-700 transition-colors hover:text-brand dark:text-gray-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
