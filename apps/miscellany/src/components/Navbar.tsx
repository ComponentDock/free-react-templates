import { useEffect, useState } from 'react'
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  blogDropdownLabel,
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
  const [blogOpen, setBlogOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-coal/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-xl font-bold uppercase tracking-wide text-heading dark:text-white"
        >
          {siteName}
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label={navLabel} className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    aria-label={blogDropdownLabel}
                    aria-expanded={blogOpen}
                    onClick={() => setBlogOpen((value) => !value)}
                    className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white/80 dark:hover:text-brand"
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden="true"
                      className={cn('h-4 w-4 transition-transform', blogOpen && 'rotate-180')}
                    />
                  </button>
                  {blogOpen && (
                    <div className="absolute left-0 top-full z-50 mt-2 min-w-40 rounded-md border border-black/10 bg-white p-2 shadow-lg dark:border-white/10 dark:bg-coal">
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block rounded px-3 py-2 text-sm text-ink transition-colors hover:bg-paper hover:text-brand dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-brand"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={item.active ? 'page' : undefined}
                  className={cn(
                    'text-sm font-medium uppercase tracking-wide transition-colors',
                    item.active
                      ? 'text-brand'
                      : 'text-ink hover:text-brand dark:text-white/80 dark:hover:text-brand',
                  )}
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <button
            type="button"
            onClick={() => setDark((value) => !value)}
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
            <span className="text-xl font-bold uppercase tracking-wide text-heading dark:text-white">
              {siteName}
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
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.active ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-2 text-base font-medium uppercase tracking-wide transition-colors',
                  item.active
                    ? 'text-brand'
                    : 'text-ink hover:bg-paper hover:text-brand dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-brand',
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
