import { useState } from 'react'
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react'
import { navLinks, pagesDropdown } from '../data'

/** Light navbar (reference `.main_menu`): spark logo + "Maven" wordmark on
 *  the left, uppercase deep-navy links on the right, a "Pages" dropdown, and
 *  a hamburger switch for the mobile menu. */
export function Header() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <header role="navigation" aria-label="Main navigation" className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
        <a href="#home" className="flex items-center gap-1 text-navy-deep">
          <Sparkles className="h-7 w-7 text-primary-600" aria-hidden="true" />
          <span className="font-heading text-2xl font-semibold uppercase tracking-wide">Maven</span>
        </a>

        <ul className="hidden items-center lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="ml-12 text-[15px] font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="relative ml-12">
            <button
              type="button"
              onClick={() => setPagesOpen((value) => !value)}
              aria-expanded={pagesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-[15px] font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
            >
              Pages
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            {pagesOpen ? (
              <ul className="absolute left-0 top-full mt-3 min-w-44 bg-white py-2 shadow-lg">
                {pagesDropdown.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setPagesOpen(false)}
                      className="block px-5 py-2 text-sm text-navy-deep transition-colors hover:bg-gray-50 hover:text-primary-600"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          <li>
            <a
              href="#contact"
              className="ml-12 text-[15px] font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-navy-deep lg:hidden"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-gray-100 bg-white px-6 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gray-100 py-3 text-sm font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => setPagesOpen((value) => !value)}
                aria-expanded={pagesOpen}
                className="flex w-full items-center justify-between border-b border-gray-100 py-3 text-sm font-medium uppercase text-navy-deep"
              >
                Pages
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              {pagesOpen ? (
                <ul className="py-2">
                  {pagesDropdown.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        onClick={() => setOpen(false)}
                        className="block py-2 pl-4 text-sm text-navy-deep transition-colors hover:text-primary-600"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block border-b border-gray-100 py-3 text-sm font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
