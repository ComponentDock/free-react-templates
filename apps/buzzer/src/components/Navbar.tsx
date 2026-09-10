import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="text-xl font-bold text-ink dark:text-white">
          Buzzer<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-mist transition-colors hover:text-ink dark:text-gray-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-accent px-6 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-white dark:border-accent dark:text-white lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +880 156 278 256
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((c) => !c)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-mist lg:hidden dark:border-gray-700 dark:text-gray-300"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-gray-100 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-mist transition-colors hover:text-ink dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
