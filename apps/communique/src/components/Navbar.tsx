import { Moon, Sun } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export function Navbar() {
  const [dark, setDark] = useState(false)

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }, [])

  useEffect(() => {
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-olive dark:text-olive">Communique</span>
        <button
          type="button"
          onClick={toggle}
          aria-label={dark ? 'Light mode' : 'Dark mode'}
          className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {dark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </nav>
  )
}
