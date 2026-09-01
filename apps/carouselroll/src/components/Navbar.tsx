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
    <header className="border-b border-brand/25 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          CarouselRoll
        </span>

        <div className="flex items-center gap-3">
          <a
            href="/"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Home
          </a>
          <a
            href="#products"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
          >
            Products
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
