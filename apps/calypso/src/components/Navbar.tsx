import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Menu, X } from 'lucide-react'

const navLinks = ['Home', 'Work', 'Service', 'Blog', 'Contact'] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      data-testid="navbar"
      className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="/" className="text-xl font-bold tracking-tight text-brand-500 dark:text-brand-400">
          Calypso
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-500 dark:text-gray-300 dark:hover:text-brand-400"
            >
              {link}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand-400 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500 md:inline-block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile hamburger */}
        <button
          className="text-gray-700 dark:text-gray-300 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-gray-100 bg-white transition-all dark:border-gray-800 dark:bg-gray-950 md:hidden',
          mobileOpen ? 'max-h-80' : 'max-h-0',
        )}
      >
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-500 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-brand-400"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-brand-400 px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-500"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  )
}
