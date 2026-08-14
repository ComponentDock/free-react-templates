import type { ComponentType, FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, type LucideIcon } from 'lucide-react'
import { CONTACT_INFO, FOOTER_COLUMNS, SOCIAL_LINKS } from '../data'
import { FacebookIcon, LinkedinIcon, TripadvisorIcon, VimeoIcon, XIcon } from './BrandIcons'

/* Footer (source: footer.section.footer-section — dark bar with two link
   columns, contact info rows, a newsletter signup with underline email field
   and paper-plane submit button, social icons and a bottom bar carrying the
   repo-standard credit). */
const CONTACT_ICONS: Record<(typeof CONTACT_INFO)[number]['icon'], LucideIcon> = {
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
}

const SOCIAL_ICONS: Record<
  (typeof SOCIAL_LINKS)[number]['label'],
  ComponentType<{ className?: string }>
> = {
  Facebook: FacebookIcon,
  X: XIcon,
  LinkedIn: LinkedinIcon,
  Vimeo: VimeoIcon,
  Tripadvisor: TripadvisorIcon,
}

export function Footer() {
  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <footer className="bg-black py-16 text-gray-400">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-bold">
              <span className="text-brand">Stay</span>
              <span className="text-white">Haven</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              A cozy retreat by the sea — comfortable rooms, fine dining and warm hospitality in the
              heart of the old town.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-lg font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#home" className="transition-colors hover:text-brand">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {CONTACT_INFO.map((info) => {
                const Icon = CONTACT_ICONS[info.icon]
                return (
                  <li key={info.label} className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span>{info.value}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-white">Newsletter</h3>
            <p className="mt-4 text-sm leading-relaxed">
              Sign up for our newsletter to hear about special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2 border-b border-white/20 pb-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:italic placeholder:text-white/30"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="text-white transition-colors hover:text-brand"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm md:flex-row">
          <p>
            © 2026 Stayhaven. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-white transition-colors hover:text-brand"
            >
              More templates at Component Dock
            </a>
          </p>
          <ul className="flex gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = SOCIAL_ICONS[link.label]
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    aria-label={link.label}
                    className="block text-gray-400 transition-colors hover:text-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
