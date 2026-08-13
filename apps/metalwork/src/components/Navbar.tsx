import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { navLinks, servicesDropdown } from '../data'

/** Dark navbar (reference: Bootstrap bg-dark #343a40): white wordmark, section
 *  links, a Services dropdown, a transparent underline search form, and a
 *  hamburger toggle for mobile. */
export function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <nav aria-label="Main navigation" className="bg-dark-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#home" className="text-xl font-normal text-white">
          Metalwork
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
                  className="flex items-center gap-1 px-5 py-2 text-[13px] font-medium tracking-[1px] text-white/50 uppercase transition-colors hover:text-white/75"
                >
                  {label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                {servicesOpen ? (
                  <div
                    id="services-dropdown"
                    className="absolute left-5 top-full z-50 w-52 rounded-sm border border-gray-100 bg-white py-2 shadow-lg"
                  >
                    {servicesDropdown.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 hover:text-primary-600"
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
                  className="block px-5 py-2 text-[13px] font-medium tracking-[1px] text-white/50 uppercase transition-colors hover:text-white/75"
                >
                  {label}
                </a>
              </li>
            ),
          )}
        </ul>

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="hidden items-center gap-2 border-b border-white/30 lg:flex"
        >
          <Search className="h-4 w-4 text-white/50" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="h-11 w-40 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
          />
        </form>

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
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-6 flex items-center gap-2 border-b border-white/30"
          >
            <Search className="h-4 w-4 text-white/50" aria-hidden="true" />
            <input
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="h-11 w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
          </form>
        </div>
      ) : null}
    </nav>
  )
}
