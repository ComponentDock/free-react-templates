import { MapPin, Mail, Phone } from 'lucide-react'
import { SocialIcon } from './SocialIcon'
import { Testimonials } from './Testimonials'
import {
  contact,
  copyrightJoin,
  copyrightLead,
  creditHref,
  creditLabel,
  footerBandImage,
  footerBlurb,
  footerClasses,
  siteName,
  socials,
  tagline,
} from '../data'

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-[100px] bg-cover bg-center pt-[100px]"
      style={{ backgroundImage: `url(${footerBandImage})` }}
    >
      <div className="absolute inset-0 bg-night/85" />
      <div className="relative mx-auto max-w-[1170px] px-4">
        <div className="grid gap-[40px] pb-[60px] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="inline-flex items-center rounded-[10px] bg-white px-4 py-2">
              <span className="text-[16px] font-extrabold uppercase tracking-[0.22em] text-ink">
                {siteName}
              </span>
            </a>
            <p className="mb-2 mt-5 text-[12px] uppercase tracking-[0.25em] text-brand">{tagline}</p>
            <p className="text-[13px] leading-[1.9] text-white/70">{footerBlurb}</p>
            <ul aria-label="Social links" className="mt-6 flex gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="text-white transition-colors hover:text-brand"
                  >
                    <SocialIcon label={social.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Testimonials />

          <div>
            <h4 className="mb-[25px] text-[16px] lowercase text-white">Classes</h4>
            <ul className="flex flex-col gap-[10px]">
              {footerClasses.map((name) => (
                <li key={name}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/70 transition-colors hover:text-brand"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-[25px] text-[16px] lowercase text-white">Contact</h4>
            <ul className="flex flex-col gap-[14px] text-[13px] text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-[3px] h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">{contact.addressLabel}</span>
                  {contact.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-[3px] h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">{contact.phoneLabel}</span>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-brand">
                    {contact.phone}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-[3px] h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-white">{contact.emailLabel}</span>
                  <a href={`mailto:${contact.email}`} className="hover:text-brand">
                    {contact.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-[40px] text-center">
          <p className="text-[12px] font-semibold text-copyright">
            {copyrightLead} {copyrightJoin}{' '}
            <a href={creditHref} className="text-brand transition-colors hover:text-white">
              {creditLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
