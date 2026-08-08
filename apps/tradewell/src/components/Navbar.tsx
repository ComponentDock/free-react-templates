import { useEffect, useState } from 'react'
import { CandlestickChart, Menu, Moon, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'Invest', href: '#invest' },
  { label: 'Markets', href: '#markets' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Learn', href: '#faq' },
  { label: 'About', href: '#' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('tradewell-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('tradewell-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all dark:border-gray-800 dark:bg-gray-950/80"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white">
            <CandlestickChart className="h-5 w-5" aria-hidden="true" />
          </span>
          Tradewell
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full bg-accent-100 px-3 py-1.5 text-xs font-semibold text-accent-700 xl:inline-flex dark:bg-accent-900/50 dark:text-accent-300">
            <span
              className="h-2 w-2 animate-pulse-live rounded-full bg-accent-500"
              aria-hidden="true"
            />
            Markets Open
          </span>

          <a
            href="#login"
            className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-primary-600 sm:block dark:text-gray-300 dark:hover:text-white"
          >
            Log in
          </a>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ButtonLink
            href="#pricing"
            className="hidden rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 px-5 py-2.5 text-sm font-semibold shadow-[0_4px_20px_-4px] shadow-primary-500/40 hover:from-primary-400 hover:to-primary-500 sm:inline-flex"
          >
            Get Started
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
            )}
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
          'border-t border-gray-200 bg-white px-4 pb-4 lg:hidden dark:border-gray-800 dark:bg-gray-950',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-1 pt-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-3">
          <ButtonLink
            href="#pricing"
            onClick={() => setOpen(false)}
            className="w-full rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 py-3 font-semibold"
          >
            Get Started
          </ButtonLink>
        </div>
      </div>
    </nav>
  )
}
