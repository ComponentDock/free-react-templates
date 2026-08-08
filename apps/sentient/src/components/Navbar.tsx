import { useEffect, useState } from 'react'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const links = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Developers', href: '#developers' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('sentient-dark') === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('sentient-dark', dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-gray-950/85 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-2" aria-label="Sentient home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 text-white">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-white">Sentient</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            {dark ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <ButtonLink
            href="#pricing"
            className="hidden h-auto px-5 py-2.5 text-sm font-semibold shadow-lg shadow-primary-600/30 lg:inline-flex"
          >
            Try Free
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-gray-800 lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'border-t border-gray-800 bg-gray-950 px-4 py-6 lg:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-2 w-full justify-center"
          >
            Try Free
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
