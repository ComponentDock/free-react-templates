import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Our services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact us', href: '#contact' },
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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <a href="#home" className="font-display text-2xl font-bold text-ink dark:text-white">
          Chisel<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-brand dark:text-white/80 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="rounded border border-black/15 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/25 dark:text-white dark:hover:border-brand dark:hover:text-brand"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded p-2 text-ink hover:bg-black/5 lg:hidden dark:text-white dark:hover:bg-white/10"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <span className="font-display text-2xl font-bold text-ink dark:text-white">
              Chisel<span className="text-brand">.</span>
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
                className="rounded-lg px-4 py-3 text-base font-medium text-ink/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
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
