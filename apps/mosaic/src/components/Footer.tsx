import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER_CONTACT, FOOTER_LINKS, SOCIALS, emailHref, phoneHref } from '../data'
import { SOCIAL_ICONS } from './SocialIcons'
import { cn } from '@free-react-templates/ui'

/* Footer — dark cocoa #3c312e footer with three widget columns (About,
   Quick Links, Contact Information), social icon circles, the copyright
   row and the mandatory "Component Dock" credit link. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-cocoa py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">About {BRAND}.</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.key]
                return (
                  <a
                    key={social.key}
                    href={social.href}
                    aria-label={social.label}
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/70 transition-colors',
                      'hover:border-brand hover:text-brand',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{FOOTER_CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href={phoneHref(FOOTER_CONTACT.phone)}
                  className="transition-colors hover:text-brand"
                >
                  {FOOTER_CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <a
                  href={emailHref(FOOTER_CONTACT.email)}
                  className="transition-colors hover:text-brand"
                >
                  {FOOTER_CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>Copyright © {year} All rights reserved</p>
          <p className="mt-2">
            This template is made with <span aria-hidden="true">❤</span>
            <span className="sr-only">love</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white transition-colors hover:text-brand"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
