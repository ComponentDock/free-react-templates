import { useState } from 'react'
import { MapPin, Phone, Mail, Menu, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND, CONTACTS, NAV_LINKS } from '../data'

const CONTACT_ICONS: Record<(typeof CONTACTS)[number]['icon'], LucideIcon> = {
  MapPin,
  Phone,
  Mail,
}

const NAV_HREFS = ['#home', '#about', '#projects', '#testimonials', '#blog', '#contact']

/* Header — a light top strip (brand + three quick-contact columns,
   desktop only) above a solid orange sticky navbar with white uppercase
   links, plus a slide-in mobile menu opened by the hamburger. */
export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header aria-label="Site header">
      <div className="bg-soft">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10">
          <a href="#home" className="flex items-center gap-1.5">
            <span className="font-heading text-2xl font-bold uppercase tracking-wide text-black">
              {BRAND}
            </span>
            <span className="inline-block h-3 w-3 bg-brand" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="text-black lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="hidden items-center gap-10 lg:flex">
            {CONTACTS.map((contact) => {
              const Icon = CONTACT_ICONS[contact.icon]
              return (
                <div key={contact.caption} className="flex items-start gap-3">
                  <Icon className="text-brand" size={40} aria-hidden="true" />
                  <div>
                    <p className="text-lg font-bold text-black">{contact.caption}</p>
                    <p className="text-sm text-black/60">{contact.sub}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <nav aria-label="Primary" className="sticky top-0 z-40 hidden bg-brand lg:block">
        <div className="mx-auto flex max-w-6xl px-6">
          {NAV_LINKS.map((label, i) => (
            <a
              key={label}
              href={NAV_HREFS[i]}
              aria-current={i === 0 ? 'true' : undefined}
              className={`relative px-5 py-5 font-heading text-base font-black uppercase tracking-wider text-white transition-colors hover:text-black ${
                i === 0
                  ? 'text-black after:absolute after:bottom-3 after:left-5 after:right-5 after:h-0.5 after:bg-black'
                  : ''
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/60" onClick={close} aria-hidden="true" />
          <nav
            aria-label="Mobile"
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-brand p-6"
          >
            <div className="flex justify-end">
              <button type="button" aria-label="Close menu" onClick={close} className="text-white">
                <X size={24} />
              </button>
            </div>
            <ul className="mt-6 space-y-1">
              {NAV_LINKS.map((label, i) => (
                <li key={label}>
                  <a
                    href={NAV_HREFS[i]}
                    onClick={close}
                    className={`block px-4 py-3 font-heading text-base font-black uppercase tracking-wider text-white hover:text-black ${
                      i === 0 ? 'text-black' : ''
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
