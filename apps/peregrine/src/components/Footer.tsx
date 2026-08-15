import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  brandName,
  componentDockName,
  componentDockUrl,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightPrefix,
  experienceLinks,
  experienceTitle,
  footerAbout,
  informationLinks,
  informationTitle,
  madeWithPrefix,
  questionsTitle,
  socialLabel,
  socials,
} from '../data'

export function Footer() {
  return (
    <footer id="contact-section" className="bg-footer px-6 pb-8 pt-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-bold text-white">{brandName}</p>
          <p className="mt-5 max-w-xs text-base leading-[1.8] text-faint">{footerAbout}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#contact-section"
                  aria-label={`${socialLabel}: ${social.label}`}
                  className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-brand"
                >
                  <BrandIcon name={social.name} label={social.label} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label={informationTitle}>
          <h3 className="text-lg font-semibold text-white">{informationTitle}</h3>
          <ul className="mt-6 space-y-3">
            {informationLinks.map((link) => (
              <li key={link}>
                <a
                  href="#contact-section"
                  className="text-base text-faint transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label={experienceTitle}>
          <h3 className="text-lg font-semibold text-white">{experienceTitle}</h3>
          <ul className="mt-6 space-y-3">
            {experienceLinks.map((link) => (
              <li key={link}>
                <a
                  href="#contact-section"
                  className="text-base text-faint transition-colors hover:text-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-lg font-semibold text-white">{questionsTitle}</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-base text-faint">{contactAddress}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={'tel:' + contactPhone.replace(/[^+\d]/g, '')}
                className="text-base text-faint transition-colors hover:text-brand"
              >
                {contactPhone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={'mailto:' + contactEmail}
                className="text-base text-faint transition-colors hover:text-brand"
              >
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-[1200px] border-t border-white/10 pt-8 text-center">
        <p className="text-sm text-faint">
          {copyrightPrefix} | {madeWithPrefix}{' '}
          <a
            href={componentDockUrl}
            className="font-semibold text-white transition-colors hover:text-brand"
          >
            {componentDockName}
          </a>
        </p>
      </div>
    </footer>
  )
}
