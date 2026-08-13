import { useState } from 'react'
import { Menu, Rocket, X } from 'lucide-react'
import { navLinks } from '../data'

/** Transparent-over-hero header (reference `.header-section`): rocket-icon
 *  "Upsurge" logo, white section links, a magenta "Login / Register" pill,
 *  and a hamburger switch for the mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className="absolute inset-x-0 top-0 z-50 bg-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Rocket className="h-8 w-8 text-primary-600" aria-hidden="true" />
          <span className="font-heading text-2xl font-semibold">Upsurge</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="ml-12 text-base text-white transition-colors hover:text-primary-600"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden rounded-[14px] bg-primary-600 px-5 py-3 text-sm text-white transition-colors hover:bg-primary-700 lg:inline-block"
          >
            Login / Register
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="bg-[#0a0228] px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3 text-sm text-white/80 transition-colors hover:text-primary-600"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-block rounded-[14px] bg-primary-600 px-5 py-3 text-sm text-white"
              >
                Login / Register
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
