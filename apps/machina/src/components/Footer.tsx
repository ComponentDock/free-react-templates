import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import {
  BRAND_NAME,
  COMPANY_LINKS,
  CREDIT_BRAND,
  FOOTER_ADDRESS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_SOCIALS,
  NEWSLETTER_BUTTON,
  NEWSLETTER_PLACEHOLDER,
  NEWSLETTER_TEXT,
  PRODUCTION_LINKS,
} from '../data'
import { BrandIcon } from './BrandIcon'

const socialLabels: Record<(typeof FOOTER_SOCIALS)[number], string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
}

/**
 * Footer — light four-column footer (source `div.footer-area.footer-padding`,
 * bg #F5F9FB): Company links, Production links, Contact Us
 * (address/phone/email), and a Newsletter form, with the repo-standard
 * copyright credit bar and social icons.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foam">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <nav aria-label="Company">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink">Company</h3>
          <ul className="mt-5 space-y-3">
            {COMPANY_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-body transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Production">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink">Production</h3>
          <ul className="mt-5 space-y-3">
            {PRODUCTION_LINKS.map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-body transition-colors hover:text-brand">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink">Contact Us</h3>
          <p className="mt-5 flex items-start gap-3 text-sm text-body">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_ADDRESS}
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm text-body">
            <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_PHONE}
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm text-body">
            <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {FOOTER_EMAIL}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-ink">Newsletter</h3>
          <p className="mt-5 text-sm leading-relaxed text-body">{NEWSLETTER_TEXT}</p>
          <form
            className="mt-5 flex"
            onSubmit={(event) => event.preventDefault()}
            aria-label="Newsletter"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={NEWSLETTER_PLACEHOLDER}
              className="h-12 w-full min-w-0 flex-1 border border-line bg-white px-4 text-sm text-ink outline-none placeholder:text-mist focus:border-brand"
            />
            <button
              type="submit"
              className="bg-brand px-5 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              {NEWSLETTER_BUTTON}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row lg:px-6">
          <p className="text-center text-sm text-body">
            Copyright © {year} {BRAND_NAME}. All rights reserved. Made with{' '}
            <Heart className="inline h-3 w-3 fill-brand text-brand" aria-label="love" /> by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline transition-colors hover:text-brand"
            >
              {CREDIT_BRAND}
            </a>
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_SOCIALS.map((social) => (
              <BrandIcon key={social} name={social} label={socialLabels[social]} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
