import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current!.classList.toggle('shadow-md', window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      id="techwise-header"
      className="sticky top-0 z-50 bg-darker-bg transition-shadow"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="font-display text-2xl tracking-wide text-white">
          Techwise
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="#contact"
            size="sm"
            className="hidden rounded bg-blue px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue/80 lg:inline-flex"
          >
            Get a Quote
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-gray-300 lg:hidden"
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
          className="border-t border-gray-700 bg-darker-bg px-4 py-3 lg:hidden"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium uppercase tracking-wide text-gray-300 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-3 block w-full rounded bg-blue px-6 py-2 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-blue/80"
          >
            Get a Quote
          </ButtonLink>
        </nav>
      )}
    </header>
  )
}
