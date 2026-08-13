import { useEffect, useState } from 'react'
import { ChevronDown, Cross, Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Departments', href: '#procedure' },
  { label: 'Doctors', href: '#about' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blogs' },
  { label: 'Contact', href: '#appointment' },
] as const

const pagesDropdown = ['Blog', 'Blog Details', 'Elements'] as const

export const DARK_KEY = 'sana-dark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-line-200 bg-menu-100 transition-all duration-300',
        scrolled ? 'shadow-md' : 'border-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Sana home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white">
            <Cross className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-bold tracking-wide text-ink-900">Sana</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium tracking-widest text-ink-900 uppercase transition-colors hover:text-primary-500"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              type="button"
              onClick={() => setPagesOpen((value) => !value)}
              aria-expanded={pagesOpen}
              aria-haspopup="menu"
              className="flex items-center gap-1 text-xs font-medium tracking-widest text-ink-900 uppercase transition-colors hover:text-primary-500"
            >
              Pages
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', pagesOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>
            {pagesOpen ? (
              <div
                role="menu"
                className="absolute top-full left-0 mt-2 w-44 rounded-lg border border-line-200 bg-white py-2 shadow-lg"
              >
                {pagesDropdown.map((item) => (
                  <a
                    key={item}
                    role="menuitem"
                    href="#blogs"
                    onClick={() => setPagesOpen(false)}
                    className="block px-4 py-2 text-sm text-ink-900 transition-colors hover:bg-menu-100 hover:text-primary-500"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            aria-label="Search"
            className="p-1 text-ink-900 transition-colors hover:text-primary-500"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Right cluster (mobile) */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-ink-900 transition-colors hover:bg-white"
          >
            {dark ? <span className="text-sm">Light</span> : <span className="text-sm">Dark</span>}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-ink-900 transition-colors hover:bg-white"
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
      {open ? (
        <nav
          aria-label="Mobile"
          id="mobile-menu"
          className="border-t border-line-200 bg-menu-100 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-white hover:text-primary-500"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#blogs"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-900 transition-colors hover:bg-white hover:text-primary-500"
            >
              Pages
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
