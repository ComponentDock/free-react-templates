import { Heart } from 'lucide-react'
import {
  ABOUT_EXCERPT,
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  FOOTER_LINK_GROUPS,
  SOCIALS,
} from '../data'
import { SOCIAL_ICONS } from './icons'

const currentYear = new Date().getFullYear()

function phoneHref(display: string) {
  return 'tel:' + display.replace(/[^+\d]/g, '')
}

/* Footer — light-gray band with About/Connect, Links, Company, and Contact
   widgets, six circular social icons, and a copyright bar crediting
   Component Dock. */
export function Footer() {
  return (
    <footer className="bg-fog px-4 py-[70px] text-sm text-muted">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-base font-bold text-ink">
              About Fiscale<span className="text-brand">.</span>
            </h3>
            <p className="mt-5 leading-relaxed">{ABOUT_EXCERPT}</p>
            <h3 className="mt-8 font-display text-base font-bold text-ink">Connect</h3>
            <ul role="list" className="mt-5 flex flex-wrap gap-2">
              {SOCIALS.map((key) => {
                const Icon = SOCIAL_ICONS[key]
                return (
                  <li key={key}>
                    <a
                      href="#home-section"
                      aria-label={key}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-brand hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-base font-bold text-ink">{group.heading}</h3>
              <ul role="list" className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home-section"
                      className="text-muted-2 transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-base font-bold text-ink">Contact</h3>
            <address className="mt-5 leading-relaxed text-muted-2 not-italic">{ADDRESS}</address>
            <ul role="list" className="mt-4 space-y-2.5">
              {CONTACT_PHONES.map((phone, index) => (
                <li key={`${phone}-${index}`}>
                  <a href={phoneHref(phone)} className="text-brand">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand">
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-8 text-center">
          <p>
            Copyright © {currentYear} All rights reserved | This template is made with{' '}
            <Heart className="inline h-4 w-4 text-red-500" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
