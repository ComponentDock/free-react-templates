import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#destinations' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-sm backdrop-blur dark:bg-gray-950/95' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className={`font-heading text-2xl font-bold ${
            scrolled ? 'text-ink dark:text-white' : 'text-white'
          }`}
        >
          Voyage<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? 'text-gray-600 hover:text-brand dark:text-gray-300'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            className={`hidden rounded-full px-6 py-2 text-sm font-bold transition-colors lg:inline-flex ${
              scrolled
                ? 'bg-brand text-white hover:bg-brand-dark'
                : 'border border-white text-white hover:bg-white hover:text-ink'
            }`}
          >
            Contact Us
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              scrolled ? 'text-ink dark:text-white' : 'text-white'
            }`}
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
              className="block py-2 text-sm font-semibold text-gray-600 transition-colors hover:text-brand dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full rounded-full bg-brand px-6 py-2 text-center text-sm font-bold text-white hover:bg-brand-dark"
          >
            Contact Us
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
