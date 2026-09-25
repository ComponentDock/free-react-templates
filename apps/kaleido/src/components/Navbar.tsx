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
    <header className="sticky top-0 z-50 border-b border-brand/20 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="/" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Kaleido
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a
            href="#colors"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Colors
          </a>
          <a
            href="#typography"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Typography
          </a>
          <a
            href="#buttons"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Buttons
          </a>
        </nav>

        <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
          {dark ? 'Light mode' : 'Dark mode'}
        </Button>
      </div>
    </header>
  )
}
