import { useEffect, useState } from 'react'
import { Menu, Moon, Shield, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { TopBar } from './TopBar'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => window.localStorage.getItem('verdict-dark') === '1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    window.localStorage.setItem('verdict-dark', dark ? '1' : '0')
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav
        aria-label="Main"
        className="border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Verdict home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-accent-400">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-primary-900">
              Verdict
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-accent-600"
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
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-900"
            >
              {dark ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            <a
              href="#home"
              className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-950 shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600 sm:inline-flex"
            >
              Free Consultation
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-900 lg:hidden"
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            'border-t border-gray-100 bg-white px-4 py-4 lg:hidden',
            open ? 'block' : 'hidden',
          )}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-medium text-gray-700 transition-colors hover:text-accent-600"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-primary-950 transition-colors hover:bg-accent-600"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
