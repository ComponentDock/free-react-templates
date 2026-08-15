import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

/* Navbar — fixed dark bar (reference uses a dark bootstrap navbar over
   the gradient hero). Brand "Mosaic." with a pink dot, six anchor links,
   and a white filled pill CTA "Get in touch" (pink text). Mobile
   collapses into a slide-down panel with a hamburger toggle. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#343a40]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-bold text-white">
          {BRAND}
          <span className="text-brand">.</span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-white/90"
          >
            Get in touch
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="bg-[#343a40] px-4 pb-6 pt-1 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[13px] font-semibold uppercase tracking-wider text-white/85 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block rounded-full bg-white px-5 py-2 text-[13px] font-semibold uppercase tracking-wider text-brand"
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  )
}
