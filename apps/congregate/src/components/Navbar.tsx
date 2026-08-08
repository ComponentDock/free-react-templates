import { useEffect, useState } from 'react'
import { Church, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Watch', href: '#watch' },
  { label: 'Connect', href: '#connect' },
  { label: 'Give', href: '#give' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('congregate-dark') === '1')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('congregate-dark', dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header
      data-variant={scrolled ? 'solid' : 'transparent'}
      className={cn(
        'fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 shadow-sm backdrop-blur-sm dark:bg-charcoal-900/95'
          : 'bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Congregate home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white">
            <Church className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-white">Congregate</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-amber-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#service-times"
            className="hidden rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600 lg:inline-flex"
          >
            Plan Your Visit
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-charcoal-800 bg-white px-4 py-4 dark:border-charcoal-700 dark:bg-charcoal-900 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-charcoal-900 transition-colors hover:text-amber-600 dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-3">
          <a
            href="#service-times"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </header>
  )
}
