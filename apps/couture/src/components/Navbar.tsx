import { useEffect, useState } from 'react'
import { Menu, ShoppingBag, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
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
    <header className="bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <a
          href="#home"
          className="font-display text-3xl font-bold uppercase tracking-wide text-white"
        >
          <span className="text-brand">C</span>outure
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 font-display text-sm font-normal uppercase tracking-widest text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <span className="hidden items-center gap-2 text-white/80 sm:flex">
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">0</span>
          </span>

          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            className="border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-brand hover:text-brand"
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
        <div className="fixed inset-0 z-50 flex flex-col bg-black lg:hidden">
          <div className="flex items-center justify-between px-4 py-5 sm:px-6">
            <span className="font-display text-3xl font-bold uppercase tracking-wide text-white">
              <span className="text-brand">C</span>outure
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
                className="font-display text-2xl font-normal uppercase tracking-widest text-white transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
