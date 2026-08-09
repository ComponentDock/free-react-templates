import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'the Brand', href: '#brand' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Shop', href: '#shop' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

const socials = [
  { label: 'Pinterest', name: 'pinterest' },
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
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
    <header className="bg-header">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="leading-tight">
          <span className="font-display text-3xl font-medium uppercase text-white">
            <span className="text-brand">H</span>aute
          </span>
          <span className="block text-[9px] uppercase tracking-[0.29em] text-white/45">
            Fashion Forward
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-5 xl:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="text-white transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            className="border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand hover:text-brand"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
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
        <div className="fixed inset-0 z-50 flex flex-col bg-header lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="font-display text-3xl font-medium uppercase text-white">
              <span className="text-brand">H</span>aute
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-6"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-medium uppercase text-white transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#home"
                  aria-label={social.label}
                  onClick={() => setOpen(false)}
                  className="text-white transition-colors hover:text-brand"
                >
                  <BrandIcon name={social.name} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
