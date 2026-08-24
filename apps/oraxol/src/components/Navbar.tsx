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
    <header className="border-b border-white/10 bg-dark-base/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="text-xl font-semibold tracking-tight text-white">
          Oraxol
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#portfolio"
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            Work
          </a>
          <a
            href="#blog"
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            Blog
          </a>
          <a
            href="#team"
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setDark((d) => !d)}
            className="text-muted hover:text-white"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
