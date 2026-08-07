import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#footer' },
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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="border-b border-line bg-ink text-white dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6">
          <span className="inline-flex items-center gap-2">
            <Phone aria-hidden="true" className="h-3.5 w-3.5 text-brand" />
            +675 334 567 223
          </span>
          <span className="hidden text-white/60 sm:inline">Architecture &amp; Interior Studio</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-2xl font-black tracking-tight text-ink dark:text-white">
          Trestle<span className="text-brand">.</span>
        </a>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden items-center lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-white dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-paper dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-ink hover:bg-paper lg:hidden dark:text-white dark:hover:bg-gray-800"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden dark:bg-gray-950">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="text-2xl font-black tracking-tight text-ink dark:text-white">
              Trestle<span className="text-brand">.</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-ink hover:bg-paper dark:text-white dark:hover:bg-gray-800"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile menu" className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-bold text-ink hover:bg-paper dark:text-white dark:hover:bg-gray-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
