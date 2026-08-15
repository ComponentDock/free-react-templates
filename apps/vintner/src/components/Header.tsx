import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white">
      <div className="border-b border-[#efefef] px-4 py-6">
        <a href="#home" className="block text-center">
          <span className="block font-serif text-4xl font-bold tracking-wide text-ink">
            Vintner
          </span>
          <span className="mt-2 block font-serif text-[11px] uppercase tracking-[0.4em] text-ink/60">
            Since 1985
          </span>
          <span aria-hidden="true" className="mx-auto mt-3 block h-0.5 w-12 bg-brand" />
        </a>
      </div>

      <nav
        aria-label="Primary"
        className="sticky top-0 z-40 hidden justify-center gap-10 border-b border-[#efefef] bg-white py-4 font-serif lg:flex"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-current={link.href === '#home' ? 'true' : undefined}
            className={cn(
              'text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand',
              link.href === '#home' ? 'text-brand' : 'text-ink/70',
            )}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-between border-b border-[#efefef] bg-white px-4 py-3 lg:hidden">
        <a href="#home" className="font-serif text-xl font-bold text-ink">
          Vintner
        </a>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="border-b border-[#efefef] bg-white px-4 pb-2 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-[#efefef] py-3 font-serif text-sm font-bold uppercase tracking-widest text-ink transition-colors last:border-b-0 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
