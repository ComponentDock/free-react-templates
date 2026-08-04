import { useEffect, useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { Mail, Phone } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Training', href: '#training' },
  { label: 'Events', href: '#events' },
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
    <header className="bg-white shadow-sm dark:bg-gray-950">
      <div className="border-b border-gray-100 bg-paper dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs text-muted dark:text-gray-400 sm:px-6">
          <a href="mailto:info@horseclub.com" className="inline-flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            info@horseclub.com
          </a>
          <a href="tel:+88012312658439" className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            +880 123 12 658 439
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#home"
          className="text-xl font-bold uppercase tracking-wide text-ink dark:text-white"
        >
          Horse Club
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
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
