import { Mail, MapPin, Phone } from 'lucide-react'
import {
  BRAND,
  CONTACT,
  FOOTER_LINKS,
  FOOTER_SERVICES,
  SOCIALS,
  emailHref,
  phoneHref,
} from '../data'
import { SOCIAL_ICONS } from './icons'

/* Footer — black background, four widgets: About Flexly (brand + lorem +
   social icons), Links, Services, Have a Questions? (contact lines);
   copyright bar with a Component Dock credit. */
export function Footer() {
  return (
    <footer className="bg-black py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-extrabold uppercase tracking-wide">About {BRAND}.</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/50">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ key, label, href }) => {
              const Icon = SOCIAL_ICONS[key]
              return (
                <li key={key}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-wide">Links</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-white/50">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-wide">Services</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-white/50">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a href="#services-section" className="transition-colors hover:text-brand">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase tracking-wide">Have a Questions?</h3>
          <ul className="mt-4 flex flex-col gap-4 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={phoneHref(CONTACT.phone)} className="transition-colors hover:text-brand">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={emailHref(CONTACT.email)} className="transition-colors hover:text-brand">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50">
        <p>
          Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with ❤ — more
          templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
