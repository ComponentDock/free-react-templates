import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Barber Shop', href: '#welcome' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="font-display text-xl font-black uppercase tracking-widest text-white"
        >
          Shear<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/80 transition-colors hover:border-brand hover:text-brand"
          >
            {dark ? '☀' : '☾'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/80 lg:hidden"
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
          className="border-t border-white/10 bg-black/80 px-4 py-3 backdrop-blur lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
