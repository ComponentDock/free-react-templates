import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const NAV_LINKS = ['Home', 'About', 'Story', 'Blog', 'Contact']

export function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-ink dark:text-white"
        >
          Gallery
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-body transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
