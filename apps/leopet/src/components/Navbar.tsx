import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Adopt', href: '#adopt' },
  { label: 'Reviews', href: '#testimonials' },
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:justify-between">
        <div className="flex items-center gap-6">
          <a href="#top" className="text-2xl font-bold text-heading dark:text-white">
            Leopet
          </a>
          <a
            href="tel:+02213256365"
            className="hidden items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-brand sm:flex dark:text-gray-400"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +02 213 - 256 (365)
          </a>
        </div>
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
            href="#adopt"
            className="hidden rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong md:inline-block"
          >
            Become a Volunteer
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
