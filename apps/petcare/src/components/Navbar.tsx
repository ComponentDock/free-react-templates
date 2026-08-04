import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
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
        <a href="#top" className="text-2xl font-extrabold text-black dark:text-white">
          pet<span className="text-brand">care</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide text-gray-800 transition-colors hover:text-brand dark:text-gray-200 dark:hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+01654066456"
            className="hidden items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-600 md:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            01654.066.456
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
