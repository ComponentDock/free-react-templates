import { useState } from 'react'
import { Moon, Sun, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }

  const linkClass =
    'border-b-2 border-transparent px-5 py-1 text-xs uppercase tracking-[0.08rem] text-ink transition-colors hover:border-ink dark:text-gray-200 dark:hover:border-gray-100'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6">
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-ink lg:hidden dark:text-gray-200"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <>
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
              <span className="block h-0.5 w-6 bg-current" aria-hidden="true" />
            </>
          )}
        </button>

        <nav aria-label="Primary" className="hidden items-center justify-center lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? '#home' : `#${link.toLowerCase().replaceAll(' ', '-')}`}
              aria-current={index === 0 ? 'page' : undefined}
              className={cn(linkClass, index === 0 && 'border-ink dark:border-gray-100')}
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={toggleDark}
          className="text-ink transition-colors hover:text-meta lg:ml-4 dark:text-gray-200 dark:hover:text-gray-400"
        >
          {dark ? (
            <Sun className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Moon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white lg:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link, index) => (
              <li key={link}>
                <a
                  href={index === 0 ? '#home' : `#${link.toLowerCase().replaceAll(' ', '-')}`}
                  aria-current={index === 0 ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-gray-100 py-2 text-xs uppercase tracking-[0.08rem] text-ink dark:border-gray-800 dark:text-gray-200"
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
