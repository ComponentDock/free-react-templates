import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navLinks, servicesDropdown } from '../data'

/** Transparent-over-hero navbar (reference: absolute header over the hero
 *  slider, solid black below lg): white wordmark with an orange span, section
 *  links, a Services dropdown, and a hamburger toggle for mobile. NO search
 *  form (this variant differs from the sibling Industrial template). */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header
      role="navigation"
      aria-label="Main navigation"
      className="absolute inset-x-0 top-8 z-50 bg-dark-700 lg:bg-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a
          href="#home"
          className="font-heading text-xl font-normal tracking-[0.2em] text-white uppercase"
        >
          Mill<span className="text-primary-600">wright</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href }) =>
            label === 'Services' ? (
              <li key={label} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-dropdown"
                  className="flex items-center gap-1 px-5 py-2 text-xs font-normal tracking-[0.2em] text-white/60 uppercase transition-colors hover:text-white"
                >
                  {label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                {servicesOpen ? (
                  <div
                    id="services-dropdown"
                    className="absolute left-5 top-full z-50 w-52 rounded-sm bg-white py-2 shadow-[0_2px_30px_rgba(0,0,0,0.2)]"
                  >
                    {servicesDropdown.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-primary-600 hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ) : (
              <li key={label}>
                <a
                  href={href}
                  className="block px-5 py-2 text-xs font-normal tracking-[0.2em] text-white/60 uppercase transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ),
          )}
        </ul>

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
        <div id="mobile-menu" className="border-t border-white/10 bg-dark-700 px-6 pb-8 lg:hidden">
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
            {servicesDropdown.map((item) => (
              <li key={item}>
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-3 pl-6 text-sm text-white/50 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
