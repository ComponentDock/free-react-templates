import { useEffect, useState } from 'react'
import { Flower2, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Groom & Bride', href: '#groom-bride' },
  { label: 'Love Story', href: '#lovestory' },
  { label: 'Greetings', href: '#greetings' },
  { label: 'People', href: '#people' },
  { label: 'When & Where', href: '#when-where' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Gallery', href: '#gallery' },
] as const

export const DARK_KEY = 'nuptial-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  // Light is the DEFAULT experience (the demo ships light-first); the stored
  // value '1' opts into dark mode.
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === '1')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const linkColor = scrolled
    ? 'text-stone-600 hover:text-pink-500 dark:text-stone-300 dark:hover:text-white'
    : 'text-white/90 hover:text-white'

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur dark:border-stone-800 dark:bg-stone-950/95'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-3" aria-label="Nuptial home">
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-colors',
              scrolled ? '' : 'ring-2 ring-white/70',
            )}
          >
            <Flower2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-script text-2xl font-semibold transition-colors',
              scrolled ? 'text-pink-500' : 'text-white',
            )}
          >
            Nuptial
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'page' : undefined}
              className={cn('text-sm font-medium transition-colors', linkColor)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className={cn(
              'rounded-full p-2 transition-colors',
              scrolled
                ? 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
                : 'text-white hover:bg-white/10',
            )}
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
            aria-label="Toggle mobile menu"
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              scrolled
                ? 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
                : 'text-white hover:bg-white/10',
            )}
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
          'border-t border-stone-200 bg-white px-4 py-4 dark:border-stone-800 dark:bg-stone-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 hover:text-pink-500 dark:text-stone-300 dark:hover:bg-stone-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
