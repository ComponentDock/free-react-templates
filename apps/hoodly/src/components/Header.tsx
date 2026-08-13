import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '../data'

/** Solid-dark header bar: "HOODLY" brand with tagline, five anchor links,
 *  Register/Login links, a pink "Add Listing" pill, and a mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <a href="#home" className="leading-tight">
          <span className="text-2xl font-black uppercase tracking-wide text-white">HOODLY</span>
          <span className="block text-[11px] font-bold tracking-[0.3em] text-white/70">
            {brand.tagline}
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-xl font-normal text-brand'
                  : 'text-xl font-normal text-white transition-colors hover:text-brand'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="text-xl text-white">
            <a href="#home" className="transition-colors hover:text-brand">
              Register/
            </a>{' '}
            <a href="#home" className="transition-colors hover:text-brand">
              Login
            </a>
          </span>
          <a href="#trending" className="bg-brand px-8 py-2.5 text-xl font-normal text-white">
            Add Listing
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="hoodly-mobile-menu"
          onClick={() => setOpen((current) => !current)}
          className="rounded p-2 text-white hover:text-brand lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="hoodly-mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 bg-dark px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    link.active
                      ? 'block py-1 text-lg font-normal text-brand'
                      : 'block py-1 text-lg font-normal text-white/80 hover:text-brand'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#trending"
                onClick={() => setOpen(false)}
                className="inline-block bg-brand px-6 py-2 text-lg text-white"
              >
                Add Listing
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
