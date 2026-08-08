import { useEffect, useState } from 'react'
import { Menu, Moon, Mountain, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Retreats', href: '#retreats' },
  { label: 'Spiritual Direction', href: '#directors' },
  { label: 'Sacred Spaces', href: '#spaces' },
  { label: 'Resources', href: '#resources' },
  { label: 'Connect', href: '#connect' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('hush-theme') === 'dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('hush-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-lg dark:border-stone-800 dark:bg-stone-950/95'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Hush home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white">
            <Mountain className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                'font-heading text-xl font-semibold tracking-tight transition-colors',
                scrolled ? 'text-stone-900 dark:text-white' : 'text-white',
              )}
            >
              Hush
            </span>
            <span
              className={cn(
                'hidden text-[10px] font-medium tracking-widest uppercase transition-colors sm:block',
                scrolled ? 'text-stone-500 dark:text-stone-400' : 'text-stone-300',
              )}
            >
              A Sanctuary for the Soul
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled
                  ? 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                  : 'text-white/90 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className={cn(
              'rounded-full p-2 transition-colors',
              scrolled
                ? 'text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white'
                : 'text-stone-200 hover:bg-white/10 hover:text-white',
            )}
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#retreats"
            className={cn(
              'hidden rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white shadow-soft',
              'transition-colors hover:bg-primary-700 sm:inline-flex',
            )}
          >
            Book a Retreat
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle mobile menu"
            className={cn(
              'rounded-full p-2 transition-colors lg:hidden',
              scrolled
                ? 'text-stone-500 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-stone-800'
                : 'text-stone-200 hover:bg-white/10',
            )}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-stone-200 bg-white px-4 py-4 dark:border-stone-800 dark:bg-stone-950 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#retreats"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Book a Retreat
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
