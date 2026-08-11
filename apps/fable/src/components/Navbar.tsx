import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  darkToggleLabel,
  menuCloseLabel,
  menuOpenLabel,
  navItems,
  navLabel,
  siteName,
} from '../data'

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
    <header className="sticky top-0 z-50 bg-white/95 shadow-md backdrop-blur dark:bg-coal/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        {/* ftco-navbar-brand — serif wordmark with a yellow accent dot. */}
        <a href="#home" className="font-serif text-2xl font-bold text-ink dark:text-white">
          {siteName}
          <span aria-hidden="true" className="text-accent">
            .
          </span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label={navLabel} className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wide transition-colors',
                  item.active
                    ? 'text-brand dark:text-brand'
                    : 'text-ink/80 hover:text-brand dark:text-white/80',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={darkToggleLabel(dark)}
            className="rounded-full p-2 text-ink transition-colors hover:bg-paper dark:text-white dark:hover:bg-white/10"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            aria-label={menuOpenLabel}
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-ink hover:bg-paper dark:text-white dark:hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-coal lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="font-serif text-2xl font-bold text-ink dark:text-white">
              {siteName}
              <span aria-hidden="true" className="text-accent">
                .
              </span>
            </span>
            <button
              type="button"
              aria-label={menuCloseLabel}
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-ink hover:bg-paper dark:text-white dark:hover:bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2 text-base font-semibold uppercase tracking-wide transition-colors',
                  item.active
                    ? 'text-brand'
                    : 'text-ink/80 hover:bg-paper hover:text-brand dark:text-white/80',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
