import { useState, useEffect } from 'react'
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
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="/" className="text-xl font-bold tracking-tight text-ink dark:text-white">
          SlideSpot
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 sm:flex">
          <a href="#carousel" className="transition-colors hover:text-brand">
            Carousel
          </a>
          <a href="#about" className="transition-colors hover:text-brand">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-brand">
            Contact
          </a>
        </nav>
        <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
          {dark ? 'Light mode' : 'Dark mode'}
        </Button>
      </div>
    </header>
  )
}
