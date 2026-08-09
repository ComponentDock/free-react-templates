import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about' },
  { label: 'Models', href: '#models' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-header-border bg-header">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:h-24 sm:px-6">
        <a
          href="#home"
          className="font-display text-3xl font-bold text-white transition-colors hover:text-brand"
        >
          Allure<span className="text-brand">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'px-4 py-2 text-[15px] font-medium uppercase text-white transition-colors hover:bg-brand',
                index === 0 && 'bg-brand',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="absolute bottom-0 right-0 hidden bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-deep lg:block"
        >
          Submit your portfolio
        </a>

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

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-header lg:hidden">
          <div className="flex h-20 items-center justify-between px-4 sm:px-6">
            <a
              href="#home"
              className="font-display text-3xl font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Allure<span className="text-brand">.</span>
            </a>
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
                <span className="text-brand">.</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-white"
            >
              Submit your portfolio
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
