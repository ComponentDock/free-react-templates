import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import { attribution, footer, siteBlurb, siteName } from '../data'
import { SocialIcon } from './SocialIcon'

/** Navy footer: four columns, a six-tile Instagram grid, the copyright row and the attribution. */
export function Footer() {
  const year = new Date().getFullYear()
  const contact = footer.contact

  return (
    <footer className="bg-navy px-4 pt-[70px] pb-[30px] xl:pt-[130px] xl:pb-[20px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <a href="#top" className="font-serif text-[28px] text-white">
              {siteName}
            </a>
            <p className="mt-5 max-w-[280px] text-[14px] leading-[1.8] text-footer-link">
              {siteBlurb}
            </p>
            <ul className="mt-6 flex items-center gap-5">
              {footer.socials.map((social) => (
                <li key={social.network}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="block text-social transition-colors hover:text-gold"
                  >
                    <SocialIcon network={social.network} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[23px] text-[24px] font-bold text-white">{footer.heading}</h3>
            <ul className="space-y-2">
              {footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-footer-link transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-[23px] text-[24px] font-bold text-white">{contact.heading}</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[15px] text-footer-link">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3 text-[15px] text-footer-link">
                <Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                <a href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}>{contact.phone}</a>
              </li>
              <li className="flex gap-3 text-[15px] text-footer-link">
                <Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li className="flex gap-3 text-[15px] text-footer-link">
                <Globe aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" />
                <span>{contact.website}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-[23px] text-[24px] font-bold text-white">
              {footer.instagram.heading}
            </h3>
            <ul className="grid grid-cols-3 gap-2">
              {footer.instagram.tiles.map((tile) => (
                <li key={tile.src}>
                  <a href="#blog" aria-label={tile.alt} className="block">
                    <img
                      src={tile.src}
                      alt=""
                      width={300}
                      height={300}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 border-t border-navy-rule pt-5 xl:mt-[95px]">
          <div className="flex flex-col items-center gap-3 text-center xl:flex-row xl:justify-between xl:text-left">
            <p className="text-[13px] text-body xl:text-[15px]">
              © {year} {siteName}. All rights reserved. More templates at{' '}
              <a href={attribution.href} className="text-gold hover:text-gold-soft">
                {attribution.label}
              </a>
              .
            </p>
            <ul className="flex items-center gap-5">
              {footer.menu.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-footer-link transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
