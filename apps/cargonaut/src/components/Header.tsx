import { useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { brand, navLinks, pagesMenu } from '../data'

const primaryCta =
  'rounded-none bg-brand px-8 py-3 text-sm font-medium uppercase tracking-[3px] text-white hover:bg-navy'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-line bg-white lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-2 text-body hover:text-brand"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {brand.email}
          </a>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${brand.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 text-body hover:text-brand"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {brand.phone}
            </a>
            <ButtonLink href="#estimate" className={primaryCta}>
              Get Free Quote
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center bg-brand text-lg font-bold text-white">
              C
            </span>
            <span className="text-xl font-semibold uppercase tracking-[2px] text-navy">
              {brand.name}
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[1px] text-navy hover:text-brand"
              >
                {link.label}
              </a>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="text-sm font-medium uppercase tracking-[1px] text-navy hover:text-brand"
                aria-haspopup="true"
              >
                Pages
              </button>
              <ul className="invisible absolute left-0 top-full z-10 w-44 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {pagesMenu.map((page) => (
                  <li key={page}>
                    <a
                      href="#services"
                      className="block px-5 py-2 text-sm text-body hover:text-brand"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <button
            type="button"
            className="text-navy lg:hidden"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="border-t border-line lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm font-medium uppercase tracking-[1px] text-navy"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
