import { Mail, Phone } from 'lucide-react'
import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  FOOTER_LINKS,
  SOCIALS,
  SOURCE_LINKS,
} from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

function phoneHref(display: string) {
  return 'tel:' + display.replace(/[^+\d]/g, '')
}

/* Footer — light-gray band with Contact, Sources, and Links widgets, six
   circular social icons, and a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer className="bg-footer px-4 py-[70px] text-sm text-[#888]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand">
              Contact
            </h3>
            <address className="mt-5 not-italic leading-relaxed">{ADDRESS}</address>
            <ul className="mt-4 space-y-3">
              {CONTACT_PHONES.map((phone, index) => (
                <li key={`${phone}-${index}`} className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white"
                    aria-hidden="true"
                  >
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href={phoneHref(phone)} className="transition-colors hover:text-brand">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-white"
                  aria-hidden="true"
                >
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-brand">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand">
              Sources
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {SOURCE_LINKS.map((label) => (
                <li key={label}>
                  <a href="#home-section" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand">
              Links
            </h3>
            <ul className="mt-5 space-y-2">
              {FOOTER_LINKS.map((label) => (
                <li key={label}>
                  <a href="#home-section" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home-section"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-[40%] bg-[#ccc] text-white transition-colors hover:bg-brand"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8 text-center">
          <p>
            Copyright © {currentYear} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
