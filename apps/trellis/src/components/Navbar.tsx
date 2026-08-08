import { useEffect, useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#home' },
  { label: 'Services', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#home' },
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
    <header id="home" className="bg-white dark:bg-gray-950">
      {/* Brand header — centered logo + tagline (matches the original). */}
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-6 sm:px-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </span>
        <a
          href="#home"
          className="font-display text-2xl font-bold uppercase tracking-tight text-ink dark:text-white"
        >
          Trellis{' '}
          <small className="block text-center text-xs font-medium normal-case tracking-wide text-mist dark:text-white/60">
            Architecture Agency
          </small>
        </a>
      </div>

      {/* Dark navbar — centered links (matches the original). */}
      <nav
        aria-label="Primary"
        className="sticky top-0 z-50 border-t border-black/5 bg-charcoal dark:border-white/10 dark:bg-gray-900"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 lg:justify-end lg:flex-1">
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              className="rounded border border-white/20 px-4 py-2 text-sm font-medium uppercase text-white transition-colors hover:border-brand hover:text-brand"
            >
              {dark ? 'Light mode' : 'Dark mode'}
            </button>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded p-2 text-white hover:bg-white/10 lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="font-display text-2xl font-bold uppercase tracking-tight text-ink dark:text-white">
              Trellis<span className="text-brand">.</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded p-2 text-ink hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav id="mobile-menu" aria-label="Mobile menu" className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium uppercase tracking-wide',
                  'text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
