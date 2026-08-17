import { FOOTER, SOCIALS } from '../data'
import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from './BrandIcons'

const SOCIAL_ICONS = {
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  Facebook: FacebookIcon,
  Linkedin: LinkedinIcon,
  Pinterest: PinterestIcon,
  Dribbble: DribbbleIcon,
} as const

/* Light gray footer (#efefef): "About Propel." widget with blurb and a
   "Connect" row of six round social icons, Links/Company/Contact widget
   columns, and a bottom bar crediting Component Dock. */
export function Footer() {
  return (
    <footer aria-label="Footer" className="bg-footer py-[70px] text-sm text-foottext">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="mb-6 font-display text-base font-bold text-ink">
              {FOOTER.aboutHeading}
              <span className="text-brand">.</span>
            </h3>
            <p className="mb-8 leading-relaxed">{FOOTER.aboutText}</p>
            <h3 className="mb-4 font-display text-base font-bold text-ink">
              {FOOTER.connectHeading}
            </h3>
            <ul className="flex gap-2">
              {SOCIALS.map(({ name, href }) => {
                const Icon = SOCIAL_ICONS[name]
                return (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={name}
                      className="flex size-[30px] items-center justify-center rounded-full bg-footlink text-white transition-colors hover:bg-brand"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 font-display text-base font-bold text-ink">
              {FOOTER.linksHeading}
            </h3>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 font-display text-base font-bold text-ink">
              {FOOTER.companyHeading}
            </h3>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 font-display text-base font-bold text-ink">
              {FOOTER.contactHeading}
            </h3>
            <address className="mb-4 not-italic">{FOOTER.address}</address>
            <ul className="space-y-2">
              {FOOTER.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                    className="transition-colors hover:text-brand"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${FOOTER.email}`} className="transition-colors hover:text-brand">
                  {FOOTER.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-black/10 pt-6 sm:flex-row">
          <p>
            © 2026 Propel. {FOOTER.credit}{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brand hover:underline"
            >
              Component Dock
            </a>
          </p>
          <p>Made with React, Tailwind and a little momentum.</p>
        </div>
      </div>
    </footer>
  )
}
