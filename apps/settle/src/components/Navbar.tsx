import { useEffect, useState } from 'react'
import { Heart, Moon, Search, ShoppingCart, Sun } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

/* header — site name "Settle" + Home link + dark-mode toggle; right icon
   buttons (search / wishlist / cart) with aria-labels. Dark mode flips a
   `.dark` class on <html> (class-based Tailwind variant). */
export function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-[22px] font-bold tracking-[0.15em] text-ink uppercase dark:text-white"
        >
          {BRAND}
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="mr-2 hidden items-center lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((current) => !current)}
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-mist dark:text-white dark:hover:bg-white/10"
          >
            {dark ? (
              <Sun aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Moon aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            aria-label="Search products"
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-mist dark:text-white dark:hover:bg-white/10"
          >
            <Search aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open wishlist"
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-mist dark:text-white dark:hover:bg-white/10"
          >
            <Heart aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open shopping cart"
            className="cursor-pointer rounded-full p-2 text-ink transition-colors hover:bg-mist dark:text-white dark:hover:bg-white/10"
          >
            <ShoppingCart aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
