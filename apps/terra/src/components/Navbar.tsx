import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const socials = [
  { label: 'Twitter', name: 'twitter' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Instagram', name: 'instagram' },
] as const

export function Navbar() {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <header className="bg-white/95 transition-colors dark:bg-gray-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl font-medium text-ink dark:text-white">
          <span className="text-brand">T</span>erra
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
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

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-4 lg:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="text-ink transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            className="rounded-full border border-ink/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-gray-200"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-ink lg:hidden dark:text-white"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink/10 bg-white px-4 pb-6 pt-2 lg:hidden dark:border-white/10 dark:bg-gray-950"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:text-brand dark:text-gray-300 dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
