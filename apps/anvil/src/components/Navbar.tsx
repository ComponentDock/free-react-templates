import { useEffect, useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'News', href: '#news' },
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-gray-950/95">
      <div className="hidden border-b border-black/5 py-2 text-xs text-ink/60 dark:border-white/10 dark:text-white/60 sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="mailto:youremail@domain.com"
            className="flex items-center gap-2 hover:text-brand"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            youremail@domain.com
          </a>
          <a href="tel:+12912830302" className="flex items-center gap-2 hover:text-brand">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            +1 291 2830 302
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-2xl font-extrabold uppercase text-ink dark:text-white"
        >
          Anvil<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-brand dark:text-white/70 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="rounded-[5px] border border-brand px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-[5px] p-2 text-ink hover:bg-black/5 dark:text-white dark:hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="font-display text-2xl font-extrabold uppercase text-ink dark:text-white">
              Anvil<span className="text-brand">.</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-[5px] p-2 text-ink hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
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
                  'rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide',
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
