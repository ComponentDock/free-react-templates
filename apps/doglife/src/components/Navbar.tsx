import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Doctor', href: '#doctor' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Services', href: '#services' },
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
    <header className="bg-white/95 backdrop-blur dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="text-2xl font-extrabold text-black dark:text-white">
          dog<span className="text-brand">life</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
