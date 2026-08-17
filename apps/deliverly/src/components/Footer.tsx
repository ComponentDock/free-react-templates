import { Mail, MapPin, Phone } from 'lucide-react'
import {
  componentDockLabel,
  componentDockUrl,
  contactAddress,
  contactEmail,
  contactPhone,
  copyrightLine,
  footerAboutText,
  footerAboutTitle,
  footerLinks,
  footerSocials,
} from '../data'
import { BrandIcon } from './BrandIcons'

export function Footer() {
  const telHref = `tel:${contactPhone.replace(/[^\d+]/g, '')}`

  return (
    <footer id="contact" className="bg-footer py-[70px] text-sm text-[#888]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-serif text-base font-bold text-black">{footerAboutTitle}</h3>
            <p className="mt-3 leading-relaxed">{footerAboutText}</p>
            <ul className="mt-5 flex gap-3">
              {footerSocials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#777] transition-colors hover:border-brand hover:text-brand"
                  >
                    <BrandIcon label={social.label} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-bold text-black">Links</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-link-muted transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-bold text-black">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((label) => (
                <li key={label}>
                  <a href="#home" className="text-link-muted transition-colors hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-bold text-black">Contact</h3>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {contactAddress}
              </li>
              <li className="flex items-center gap-2.5">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                <a href={telHref} className="text-[#888] transition-colors hover:text-brand">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[#888] transition-colors hover:text-brand"
                >
                  {contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-6 text-center">
          <p>{copyrightLine}</p>
          <p className="mt-1">
            More templates at{' '}
            <a
              href={componentDockUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand transition-colors hover:text-brand-hover"
            >
              {componentDockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
