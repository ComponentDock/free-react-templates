import { useEffect, useState } from 'react'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Latest', href: '#latest' },
  { label: 'Top Selling', href: '#top-selling' },
  { label: 'Features', href: '#features' },
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
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur transition-colors dark:border-white/10 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-2xl font-bold uppercase tracking-wider text-coal transition-colors hover:text-brand dark:text-white"
        >
          Modish<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-3 py-2 text-sm font-medium uppercase tracking-wide text-ink/70 transition-colors hover:text-brand dark:text-white/70',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#top-selling"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white/80"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 transition-colors hover:border-brand hover:text-brand dark:border-white/20 dark:text-white/80"
          >
            {dark ? '☀' : '☾'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink/80 lg:hidden dark:border-white/20 dark:text-white/80"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink/10 bg-white/95 px-4 py-3 lg:hidden dark:border-white/10 dark:bg-gray-950/95"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-ink/70 transition-colors hover:text-brand dark:text-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
