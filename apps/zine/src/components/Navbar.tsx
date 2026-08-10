import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks, toggleDarkLabel } from '../data'

export function Navbar() {
  // The original Katt design is dark charcoal; start in dark mode.
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#top"
          aria-label={brandName}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
        >
          <span className="flex h-11 w-11 items-center justify-center bg-brand font-display text-xl font-bold text-charcoal">
            Z
          </span>
          <span className="font-display text-xl font-semibold uppercase tracking-[0.2em] text-cream">
            {brandName}
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={toggleDarkLabel}
            aria-pressed={dark}
            className="inline-flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? menuCloseLabel : menuOpenLabel}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
          >
            <span
              className={cn(
                'h-[5px] w-7 bg-cream transition-transform duration-300',
                open && 'translate-y-[10px] rotate-45 bg-brand',
              )}
            />
            <span
              className={cn(
                'h-[5px] w-7 bg-cream transition-opacity duration-300',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'h-[5px] w-7 bg-cream transition-transform duration-300',
                open && '-translate-y-[10px] -rotate-45 bg-brand',
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Main menu" className="fixed inset-0 z-40 bg-overlay/95">
          <ul className="mt-52 flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  onClick={() => setOpen(false)}
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className="font-display text-4xl font-medium leading-[65px] text-white transition-colors hover:text-brand focus-visible:outline-none focus-visible:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
