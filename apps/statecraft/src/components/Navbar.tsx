import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

/** Dark navbar over the hero: serif wordmark, uppercase section links and a
 *  yellow "Make an Appointment" CTA; collapses to a stacked menu on mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a href="#home" className="font-serif text-3xl font-bold text-white">
          Statecraft
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-header-cta hidden lg:inline-block">
          Make an Appointment
        </a>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-white lg:hidden"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>
      {open && (
        <ul className="bg-forest/95 px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-wide text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-header-cta block text-center"
            >
              Make an Appointment
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
