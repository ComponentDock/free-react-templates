import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-bold tracking-tight text-ink dark:text-white">
            Atrium
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-mist dark:text-white/60">
            Architecture
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'page' : undefined}
              className={cn(
                'text-xs font-medium uppercase tracking-widest text-ink transition-colors hover:text-brand dark:text-white/80 dark:hover:text-brand',
                link.label === 'Home' && 'text-brand dark:text-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-none border border-ink bg-white px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white sm:inline-flex dark:border-white/60 dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 dark:border-white/25 dark:text-white dark:hover:bg-white/10"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-ink transition-colors hover:bg-ink/5 lg:hidden dark:text-white dark:hover:bg-white/10"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-tight text-ink dark:text-white">
                Atrium
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-mist dark:text-white/60">
                Architecture
              </span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-ink transition-colors hover:bg-ink/5 dark:text-white dark:hover:bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile menu" className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-widest transition-colors hover:bg-ink/5 dark:hover:bg-white/10',
                  link.label === 'Home' ? 'text-brand' : 'text-ink dark:text-white/80',
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center border border-ink px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white dark:border-white/60 dark:text-white dark:hover:bg-white dark:hover:text-ink"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
