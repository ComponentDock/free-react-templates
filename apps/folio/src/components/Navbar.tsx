import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Books', 'News', 'Contact']

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm dark:bg-gray-950/90"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-heading text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Folio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => setDark((d) => !d)}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-6 pb-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wider text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setDark((d) => !d)
                  setMobileOpen(false)
                }}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand dark:text-gray-300 dark:hover:text-brand"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                {dark ? 'Light mode' : 'Dark mode'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
