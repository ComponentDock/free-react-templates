import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/85 backdrop-blur dark:border-gray-800 dark:bg-gray-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Merry
        </span>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Features
          </a>
          <a
            href="#showcase"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Showcase
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
          <a
            href="#showcase"
            className="hidden rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark sm:inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
