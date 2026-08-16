import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { navLinks } from '../data'

/** Transparent header over the hero that turns solid red (#ff1a35) once
 *  sticky on scroll. White logo box, uppercase nav links, expanding search
 *  input and a black square "Free Quote" button. */
export function Header() {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'absolute inset-x-0 top-0 z-40 transition-colors',
        sticky && 'fixed bg-brand shadow-[0_10px_15px_rgba(25,25,25,0.1)]',
      )}
    >
      <div className="flex items-center justify-between px-6 lg:px-16">
        <a
          href="#home"
          className="bg-white px-8 py-7 font-display text-2xl font-semibold uppercase tracking-wide text-ink"
        >
          Stalwart
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-10 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <label className="group flex items-center">
            <span className="sr-only">Search</span>
            <Search className="h-4 w-4 text-white" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search"
              className="w-0 bg-transparent text-sm text-white placeholder-white/70 outline-none transition-all duration-300 focus:w-36 focus:pl-2"
            />
          </label>
          <a href="#contact" className="btn-black-square ml-6">
            Free Quote
          </a>
        </div>

        <button
          type="button"
          className="p-2 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="bg-night px-6 pb-6 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-black-square mt-5 w-fit"
            >
              Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
