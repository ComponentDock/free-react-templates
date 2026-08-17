import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER, SOCIALS } from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

/* Footer — photo-background footer with brand/social, Services, Navigation,
   and Contact columns, plus a copyright bar crediting Component Dock. */
export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/gardenly-12/1920/700"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-bold text-forest">
              {BRAND}
            </a>
            <p className="mt-5 max-w-xs text-lg leading-relaxed text-forest">{FOOTER.tagline}</p>
            <ul role="list" className="mt-6 flex gap-3">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,136,15,0.2)] text-garden transition-colors hover:bg-garden hover:text-paper"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-forest">Services</h4>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER.services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-lg text-forest transition-colors hover:text-garden hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-forest">Navigation</h4>
            <ul role="list" className="mt-5 space-y-3">
              {FOOTER.navigation.map((item) => (
                <li key={item}>
                  <a
                    href="#home"
                    className="text-lg text-forest transition-colors hover:text-garden hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-forest">Contact us</h4>
            <ul role="list" className="mt-5 space-y-3 text-lg text-forest">
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-garden" aria-hidden="true" />
                <a href={`mailto:${FOOTER.contact.email}`} className="hover:text-garden">
                  {FOOTER.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-garden" aria-hidden="true" />
                <span>{FOOTER.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-garden" aria-hidden="true" />
                <a
                  href={`tel:${FOOTER.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-garden"
                >
                  {FOOTER.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-sage-pale/60 bg-white/60 py-5">
        <p className="text-center text-base text-forest">
          Copyright © {currentYear} All rights reserved | Made with love by{' '}
          <a href={FOOTER.creditUrl} className="font-semibold text-garden hover:underline">
            {FOOTER.credit}
          </a>
        </p>
      </div>
    </footer>
  )
}
