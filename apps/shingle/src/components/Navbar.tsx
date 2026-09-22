import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Home, Wrench, Briefcase, BookOpen, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: Wrench },
  { label: 'Services', href: '#services', icon: Wrench },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Blog', href: '#blog', icon: BookOpen },
  { label: 'Contact', href: '#contact', icon: Phone },
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
    <>
      <div className="bg-dark text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <svg
              className="h-6 w-6 text-brand"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 21V9l9-7 9 7v12H3zm2-2h14V10l-7-5.25L5 10v9zm3-1v-5h3v5H8zm5 0v-7h3v7h-3z" />
            </svg>
            <span className="text-lg font-semibold tracking-wide">Shingle</span>
          </div>
          <div className="flex items-center gap-3">
            {(['Facebook', 'Twitter', 'Instagram', 'LinkedIn'] as const).map((name) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {name[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur transition-colors dark:border-gray-800 dark:bg-gray-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white dark:text-gray-300 dark:hover:bg-brand dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDark((c) => !c)}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand dark:border-gray-700 dark:text-gray-300"
            >
              {dark ? '☀' : '☾'}
            </button>

            <button
              type="button"
              onClick={() => setOpen((c) => !c)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-mist lg:hidden dark:border-gray-700 dark:text-gray-300"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden dark:border-gray-800 dark:bg-gray-950"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}
