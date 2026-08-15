import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-semibold tracking-wide text-white">
          Pixora
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-ink">Pixora</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
