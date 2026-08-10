import { ChevronRight, Heart, Mail, MapPin, Phone } from 'lucide-react'
import {
  brandTitle,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightText,
  footerBlurb,
  infoHeading,
  infoLinks,
  questionsHeading,
  socials,
} from '../data'
import { BrandIcon } from './BrandIcon'

/** Dark #141b25 footer: logo + blurb + circular social links, an Info link
    column, a contact block, and a black copyright bar (reference:
    .ftco-footer). */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 lg:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="mb-4 text-xl font-semibold text-white">{brandTitle}</h2>
            <p className="text-[15px] leading-relaxed text-white/90">{footerBlurb}</p>
            <div className="mt-5 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#top"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent/80"
                >
                  <BrandIcon name={social.name} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:ml-4">
            <h2 className="mb-6 text-xl font-semibold text-white">{infoHeading}</h2>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-white/90 transition-colors hover:text-accent"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="mb-6 text-xl font-semibold text-white">{questionsHeading}</h2>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {contactAddress}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {contactPhone}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {contactEmail}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <div className="mx-auto max-w-7xl px-4 text-center text-white lg:px-6">
          <p>
            Copyright © {year} {copyrightText}{' '}
            <Heart className="inline h-3.5 w-3.5 text-red-500" aria-hidden="true" /> by {brandTitle}
          </p>
        </div>
      </div>
    </footer>
  )
}
