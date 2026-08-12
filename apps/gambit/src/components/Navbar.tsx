import { useEffect, useState } from 'react'
import { Menu, Moon, Play, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BRAND, NAV_LINKS } from '../data'

/* Navbar recreated from the source template's header: an absolute dark
   purple (#2c2172) bar over the hero with a play-mark logo, ten uppercase
   Roboto-500 links, and a gradient "join us" CTA; collapses to a hamburger
   toggle on small screens. The dark-mode toggle follows repo conventions. */

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('gambit-theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('gambit-theme', dark ? 'dark' : 'light')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="absolute top-0 z-50 w-full bg-purple-nav">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Gambit home">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-2">
            <Play className="h-4 w-4 fill-purple-ink text-purple-ink" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wide text-white">
            {BRAND}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden bg-gradient-to-r from-brand to-brand-2 bg-[length:200%_auto] px-6 text-xs font-medium uppercase tracking-wider text-purple-ink transition-[background-position] duration-300 hover:bg-right sm:inline-block"
            style={{ lineHeight: '50px' }}
          >
            join us
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle mobile menu"
            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <nav
          aria-label="Mobile"
          className={cn('border-t border-white/10 bg-purple-nav px-4 py-4 xl:hidden')}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-brand to-brand-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-purple-ink"
            >
              join us
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
