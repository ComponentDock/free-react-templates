import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data'

/** Transparent navbar floating over the hero: wordmark, section links, green
 *  "Get Started" pill, and a hamburger toggle for mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:px-8">
        <a href="#home" className="text-xl font-black tracking-wide text-white">
          Skyward
        </a>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block rounded px-5 py-2 text-[13px] font-medium tracking-[1px] text-white uppercase transition-colors hover:text-white/60"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#hosting"
          className="hidden rounded-[5px] border border-accent-500 bg-accent-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-primary-600 hover:bg-primary-600 lg:inline-flex lg:items-center lg:justify-center"
        >
          Get Started
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded text-white lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="bg-black/90 px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#hosting"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-[5px] border border-accent-500 bg-accent-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:border-primary-600 hover:bg-primary-600"
          >
            Get Started
          </a>
        </div>
      ) : null}
    </nav>
  )
}
