import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </span>
          Btnsmith
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#solid"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Solid
          </a>
          <a
            href="#outline"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Outline
          </a>
          <a
            href="#dropdown"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Dropdowns
          </a>
          <a
            href="#groups"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Groups
          </a>
          <a
            href="#social"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
          >
            Social & Slide
          </a>
        </nav>

        <div className="hidden md:block">
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition-colors hover:bg-indigo-100 dark:bg-indigo-950/50 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
          >
            Component Dock
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden dark:text-gray-300 dark:hover:bg-gray-800"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-b border-gray-100 bg-white px-6 py-4 md:hidden dark:border-gray-800 dark:bg-gray-950"
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#solid"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-200"
            >
              Solid
            </a>
            <a
              href="#outline"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-200"
            >
              Outline
            </a>
            <a
              href="#dropdown"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-200"
            >
              Dropdowns
            </a>
            <a
              href="#groups"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-200"
            >
              Groups
            </a>
            <a
              href="#social"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-gray-700 dark:text-gray-200"
            >
              Social & Slide
            </a>
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
            >
              Component Dock
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
