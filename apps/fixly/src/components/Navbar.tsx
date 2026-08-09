import { useEffect, useState } from 'react'
import { CalendarCheck, Menu, Wrench, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-coal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-xl font-black uppercase tracking-tight">
            Fixly<span className="text-brand">.</span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-white/60">
              Auto Repair Shop
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#appointment"
            className="hidden items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Make An Appointment
          </a>

          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-white/10"
          >
            {dark ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-coal lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                <Wrench className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-black uppercase tracking-tight text-white">
                Fixly<span className="text-brand">.</span>
              </span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav id="mobile-menu" aria-label="Mobile menu" className="flex flex-col gap-2 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide text-white/80 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-bold uppercase text-white"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Make An Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
