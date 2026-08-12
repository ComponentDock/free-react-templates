import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import {
  BRAND,
  FOOTER_ADDRESS,
  FOOTER_BLURB,
  FOOTER_CLASSES,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_TESTIMONIALS,
} from '../data'
import {
  BehanceIcon,
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from './social-icons'

const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
  { label: 'Twitter', href: 'https://twitter.com/', icon: TwitterIcon },
  { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: PinterestIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
  { label: 'Dribbble', href: 'https://dribbble.com/', icon: DribbbleIcon },
  { label: 'Behance', href: 'https://www.behance.net/', icon: BehanceIcon },
] as const

/**
 * Footer — photo-background footer with a dark overlay and four columns:
 * brand + blurb + 6 social icon buttons, testimonials quotes, class links,
 * and contact info (address, phone, email). A bottom bar carries the
 * copyright line, the Vigor credit, and a Component Dock link.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative mt-25 bg-night">
      <img
        src="https://picsum.photos/seed/vigor-footer-bg/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto max-w-7xl px-4 py-25 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="text-lg font-bold uppercase tracking-wide text-white">{BRAND}</h6>
            <p className="mt-6 text-sm font-semibold text-faint">{FOOTER_BLURB}</p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/15 text-white transition-colors hover:bg-brand"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-base font-bold uppercase tracking-wide text-white">Testimonials</h6>
            {FOOTER_TESTIMONIALS.map((quote) => (
              <p key={quote} className="mt-4 text-sm text-faint">
                “{quote}”
              </p>
            ))}
          </div>

          <div>
            <h6 className="text-base font-bold uppercase tracking-wide text-white">Classes</h6>
            <ul className="mt-6 space-y-3">
              {FOOTER_CLASSES.map((cls) => (
                <li key={cls}>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-faint transition-colors hover:text-brand"
                  >
                    {cls}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-base font-bold uppercase tracking-wide text-white">Contact</h6>
            <p className="mt-6 flex items-start gap-3 text-sm font-semibold text-faint">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {FOOTER_ADDRESS}
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm font-semibold text-faint">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={'tel:' + FOOTER_PHONE.replace(/[^\d+]/g, '')}
                className="transition-colors hover:text-brand"
              >
                {FOOTER_PHONE}
              </a>
            </p>
            <p className="mt-4 flex items-center gap-3 text-sm font-semibold text-faint">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <a href={`mailto:${FOOTER_EMAIL}`} className="transition-colors hover:text-brand">
                {FOOTER_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 py-10 text-center">
        <p className="text-xs font-semibold text-soft">
          Copyright © {year} All rights reserved | This template is made with{' '}
          <Heart className="inline h-3 w-3 text-brand" aria-hidden="true" /> by{' '}
          <span className="text-white">{BRAND}</span>
        </p>
        <p className="mt-2 text-xs font-semibold text-soft">
          More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="font-bold text-brand transition-colors hover:text-brand-light"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
