import { useEffect, useState } from 'react'
import { Flame, Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const navLinks = [
  { label: 'Events', href: '#events' },
  { label: 'Groups', href: '#groups' },
  { label: 'Watch', href: '#media' },
  { label: 'About', href: '#about' },
  { label: 'Parents', href: '#parents' },
] as const

/* The reference demo persists the dark-mode preference under the `theme`
   key with the values "dark"/"light" (see the inline script in index.html). */
const DARK_KEY = 'theme'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem(DARK_KEY) === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem(DARK_KEY, dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-navy-950/80'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Ignite Youth home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500">
            <Flame className="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <span
            className={cn(
              'font-display text-xl font-bold tracking-wide transition-colors',
              scrolled ? 'text-gray-900 dark:text-white' : 'text-white',
            )}
          >
            Ignite Youth
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  : 'text-white/80 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+15557890123"
            aria-label="Call Ignite Youth"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              scrolled
                ? 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                : 'text-white/80 hover:bg-white/10 hover:text-white',
            )}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-xl transition-colors',
              scrolled
                ? 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                : 'text-white/80 hover:bg-white/10 hover:text-white',
            )}
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <ButtonLink
            href="#about"
            className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
          >
            I&apos;m New
          </ButtonLink>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10"
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
          'border-t border-gray-200 bg-white px-6 py-6 dark:border-gray-800 dark:bg-navy-950 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-4 text-lg font-medium text-gray-900 transition-colors hover:text-primary-500 dark:border-gray-800 dark:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 space-y-3">
          <ButtonLink
            href="#about"
            onClick={() => setOpen(false)}
            className="w-full rounded-full bg-accent-500 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-accent-600"
          >
            I&apos;m New
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
