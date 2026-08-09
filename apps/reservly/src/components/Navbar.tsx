import { useState } from 'react'
import { CalendarDays, Menu, Phone, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#home' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header id="home" className="bg-charcoal text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-brand text-white">
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xl font-bold uppercase tracking-tight">Reservly</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="hidden items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +1 (555) 123-4567
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded p-2 text-white hover:bg-white/10 md:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-charcoal md:hidden">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <span className="text-xl font-bold uppercase tracking-tight">Reservly</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded p-2 text-white hover:bg-white/10"
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
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium uppercase tracking-wide',
                  'text-white/80 hover:bg-white/10 hover:text-white',
                )}
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
