import { useEffect, useState } from 'react'
import { Cloud, Menu, Moon, Search, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('dispatch-dark') === 'true')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('dispatch-dark', String(dark))
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled && 'bg-black/75 shadow-[0_5px_5px_rgba(0,0,0,0.1)]',
      )}
    >
      <div className="mx-auto flex h-[106px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#home"
          className="font-display text-xl font-bold uppercase tracking-[0.075em] text-white"
        >
          dispatch
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((label, index) => (
            <a
              key={label}
              href={index === 0 ? '#home' : '#'}
              aria-current={index === 0 ? 'page' : undefined}
              className={cn(
                'font-display text-sm font-bold uppercase tracking-wide transition-colors hover:text-white',
                index === 0 ? 'text-white' : 'text-white/50',
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:gap-5">
          <span className="hidden items-center gap-1.5 font-display text-sm font-bold text-white lg:flex">
            <Cloud className="h-4 w-4" aria-hidden="true" />
            +10°
          </span>
          <div className="relative hidden lg:block">
            <Search
              className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
              aria-hidden="true"
            />
            <input
              type="search"
              aria-label="Search"
              placeholder="Type to Search..."
              className="h-[46px] w-[262px] rounded-[5px] bg-white/20 pl-11 pr-4 font-display text-sm font-medium text-white outline-none transition-colors placeholder:text-white/50 focus:bg-white/30"
            />
          </div>
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
          >
            {dark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/60 lg:hidden"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />
          <div
            role="dialog"
            aria-label="Menu"
            className="fixed top-0 right-0 z-50 h-full w-72 bg-white p-8 shadow-xl dark:bg-gray-900 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold uppercase tracking-[0.075em] text-black dark:text-white">
                dispatch
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center text-black transition-colors hover:text-tan dark:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="relative mt-6">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label="Search in menu"
                placeholder="Type to Search..."
                className="h-10 w-full rounded-[5px] bg-chip pl-9 pr-3 font-display text-sm text-black outline-none placeholder:text-muted dark:bg-gray-800 dark:text-white"
              />
            </div>
            <nav aria-label="Menu" className="mt-8 flex flex-col gap-4">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-xs font-bold uppercase tracking-wide text-black transition-colors hover:text-tan dark:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}
