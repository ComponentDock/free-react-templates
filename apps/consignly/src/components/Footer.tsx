import { Mail, Phone } from 'lucide-react'
import {
  ABOUT_FOOTER,
  ADDRESS,
  BRAND,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  FOOTER_LINK_LABELS,
  SOCIALS,
} from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

function phoneHref(display: string) {
  return 'tel:' + display.replace(/[^+\d]/g, '')
}

/* Footer — light-gray band with About, Connect, Links, Company, and
   Contact widgets plus a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer className="bg-footer px-4 py-16 text-sm text-foot-text">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <h3 className="font-display text-base font-bold text-black">About {BRAND}.</h3>
            <p className="mt-4 leading-relaxed">{ABOUT_FOOTER}</p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-black">Connect</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-foot-link text-white transition-colors hover:bg-foot-hover"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-black">Links</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINK_LABELS.map((label) => (
                <li key={label}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-black">Company</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINK_LABELS.map((label) => (
                <li key={label}>
                  <a href="#home" className="transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-black">Contact</h3>
            <address className="mt-4 not-italic leading-relaxed">{ADDRESS}</address>
            <ul className="mt-4 space-y-2">
              {CONTACT_PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={phoneHref(phone)}
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brand"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
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
