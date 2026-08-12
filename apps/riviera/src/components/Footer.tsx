import { MapPin, Phone, type LucideIcon } from 'lucide-react'
import { BRAND, CONTACT_INFO, FOOTER_LINKS, TAGLINE } from '../data'
import { NewsletterForm } from './NewsletterForm'

const CONTACT_ICONS: Record<(typeof CONTACT_INFO)[number]['icon'], LucideIcon> = {
  MapPin,
  Phone,
}

/* Footer — the dark #242424 footer: an about widget with the text logo, a
   Newsletter widget with the validated email form, a Contact Info widget,
   a link row and the #171717 copyright bar with the Component Dock credit
   link. */
export function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-[72px] md:grid-cols-3">
        <div>
          <a href="#home" aria-label={BRAND} className="block leading-none">
            <span className="block text-[28px] font-bold uppercase tracking-wide text-white">
              {BRAND}
            </span>
            <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.3em] text-white/60">
              {TAGLINE}
            </span>
          </a>
          <p className="mt-6 text-sm font-medium leading-[28px] text-white/70">
            A luxury hotel &amp; spa in the heart of Los Angeles — unwind in our suites, relax by
            the infinity pool and let our team take care of the rest.
          </p>
        </div>

        <div>
          <h5 className="mb-[30px] text-lg font-medium text-brand">Newsletter</h5>
          <NewsletterForm />
        </div>

        <div>
          <h5 className="mb-[30px] text-lg font-medium text-brand">Contact Info</h5>
          <ul className="space-y-4">
            {CONTACT_INFO.map((item) => {
              const Icon = CONTACT_ICONS[item.icon]
              return (
                <li key={item.text} className="flex items-start gap-3 text-white/70">
                  <Icon aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium leading-[28px]">{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-6 pt-10">
          {FOOTER_LINKS.map((label) => (
            <li key={label}>
              <a
                href={label === 'Home' ? '#home' : '#'}
                className="text-sm font-medium text-white/70 transition-colors hover:text-brand"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-[30px] bg-copyright py-6 text-center">
          <p className="text-sm text-white/60">
            © 2026 Riviera. All rights reserved. · More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
