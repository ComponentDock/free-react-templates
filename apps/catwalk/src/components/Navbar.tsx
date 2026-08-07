import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Models', href: '#models' },
  { label: 'Blog', href: '#blog' },
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Cat<span className="text-brand">walk</span>
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label="Primary" className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:brightness-95 md:inline-block"
          >
            Contact Us
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
