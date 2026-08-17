import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER, SOCIALS } from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

/* Footer — pale-blue four-column footer with brand/socials, Services,
   Recent Posts, a contact block, and a dark bottom copyright bar. */
export function Footer() {
  return (
    <footer id="contact" className="bg-paleblue px-6 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="font-display text-2xl font-semibold text-ink">
              {BRAND}
            </a>
            <p className="mt-5 text-base leading-relaxed text-muted">{FOOTER.about}</p>
            <ul role="list" className="mt-6 flex gap-3">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-muted transition-colors hover:bg-steel hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Services</h2>
            <ul role="list" className="mt-5 space-y-2.5">
              {FOOTER.services.map((item) => (
                <li key={item}>
                  <a
                    href="#collection"
                    className="text-muted transition-colors hover:text-linkblue"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Recent Posts</h2>
            <ul role="list" className="mt-5 space-y-2.5">
              {FOOTER.recentPosts.map((item) => (
                <li key={item}>
                  <a href="#blog" className="text-muted transition-colors hover:text-linkblue">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">Have a Questions?</h2>
            <ul role="list" className="mt-5 space-y-3.5 text-muted">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <span>{FOOTER.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <a
                  href={`tel:${FOOTER.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-linkblue"
                >
                  {FOOTER.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-steel" aria-hidden="true" />
                <a href={`mailto:${FOOTER.contact.email}`} className="hover:text-linkblue">
                  {FOOTER.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-ink py-5">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm text-white/70">
            Copyright © {currentYear} All rights reserved | Made with love by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-white hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
