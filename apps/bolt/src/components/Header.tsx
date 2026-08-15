import { useEffect, useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'

export const navLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <a href="#home" className="text-2xl font-black uppercase tracking-widest text-white">
          Bolt<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-5 py-2 text-base font-bold text-[#353535] transition-colors hover:bg-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 bg-brand px-4 py-2 lg:flex">
          <MapPin className="h-5 w-5 text-[#353535]" aria-hidden="true" />
          <span className="text-sm font-bold text-[#353535]">
            1525 Awesome Lane, Los Angeles, CA
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <div
            data-testid="mobile-backdrop"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute inset-y-0 right-0 flex w-72 flex-col bg-[#242424] px-6 py-5 text-white">
            <div className="flex items-center justify-between">
              <span className="text-lg font-black uppercase tracking-widest">
                Bolt<span className="text-brand">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
