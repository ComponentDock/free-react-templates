import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
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
        <a href="#home" className="font-display text-xl text-brand">
          Thepetcare
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 sm:flex">
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
            className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy3 sm:inline-block"
          >
            Get Quote
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
