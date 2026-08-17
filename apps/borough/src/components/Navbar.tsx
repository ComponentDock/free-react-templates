import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { brandName, brandTagline, navLinks } from '../data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="absolute inset-x-0 top-[51px] z-30 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Compass aria-hidden="true" className="h-10 w-10 text-brand" />
          <span className="flex flex-col leading-none">
            <span className="text-[31px] font-black tracking-tight">{brandName}</span>
            <span className="mt-1 text-[11px] font-bold uppercase tracking-[3px] text-white/70">
              {brandTagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === 'Home' ? 'true' : undefined}
              className="px-[25px] py-[19px] text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:text-brand aria-current:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#listing"
            className="ml-4 rounded bg-brand px-6 py-3.5 text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-brand-dark"
          >
            Add Listing
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
          className="flex items-center gap-2 text-[16px] font-bold uppercase text-white lg:hidden"
        >
          <span>Menu</span>
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="mt-4 rounded bg-ink/95 p-4 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-[13px] font-bold uppercase tracking-[2px] text-white transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#listing"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded bg-brand px-4 py-2.5 text-center text-[13px] font-bold uppercase tracking-[2px] text-white"
          >
            Add Listing
          </a>
        </div>
      )}
    </nav>
  )
}
