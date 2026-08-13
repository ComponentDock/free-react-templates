import { useEffect, useState } from 'react'
import { Globe, Menu, MessageCircle, User, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Transparent header over the hero: brand, white nav, Log In + green Live Chat pill. */
export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Sitewise home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-white">
            <Globe className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-bold tracking-wide text-white">Sitewise</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-accent-500"
          >
            <User className="h-4 w-4" aria-hidden="true" />
            Log In
          </a>
          <a
            href="#launch"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-600"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Live Chat
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="text-white lg:hidden"
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {open ? (
        <nav
          aria-label="Mobile"
          className="absolute top-full left-0 z-50 w-full border-t border-white/10 bg-primary-950 px-4 pt-2 pb-6 shadow-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-white transition-colors hover:text-accent-500"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-white"
            >
              <User className="h-4 w-4" aria-hidden="true" />
              Log In
            </a>
            <a
              href="#launch"
              onClick={() => setOpen(false)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2 text-sm font-medium text-white',
              )}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Live Chat
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
