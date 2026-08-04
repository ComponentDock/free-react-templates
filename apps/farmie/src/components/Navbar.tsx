import { useEffect, useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Pages', href: '#services' },
  { label: 'Shop', href: '#products' },
  { label: 'News', href: '#news' },
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
          farm<span className="text-brand">ie</span>
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
          <a
            href="#products"
            className="hidden items-center gap-2 text-sm font-semibold text-gray-800 transition-colors hover:text-brand md:flex dark:text-gray-200 dark:hover:text-brand"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Your Cart (2)
          </a>
          <Button variant="ghost" size="sm" onClick={() => setDark((d) => !d)}>
            {dark ? 'Light mode' : 'Dark mode'}
          </Button>
        </div>
      </div>
    </header>
  )
}
