import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
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
    <header className="bg-white/95 backdrop-blur dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="text-2xl font-extrabold text-night dark:text-white">
          Pet<span className="text-brand">sitting</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#pricing"
            className="hidden rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong md:inline-block"
          >
            Get Started
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
