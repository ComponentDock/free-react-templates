import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Barbers', href: '#barbers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('tonsor-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('tonsor-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-950/95">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#home"
          className="font-display text-2xl font-bold text-ink transition-colors hover:text-brand dark:text-white"
        >
          Tonsor<span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-semibold uppercase tracking-[0.18em] transition-colors',
                index === 0
                  ? 'text-brand'
                  : 'text-ink/70 hover:text-brand dark:text-white/70 dark:hover:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/80 transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-white/80"
          >
            {dark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle mobile menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/80 transition-colors lg:hidden dark:border-gray-700 dark:text-white/80"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-white px-4 py-3 lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-brand dark:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
