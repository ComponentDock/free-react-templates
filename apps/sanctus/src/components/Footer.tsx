import { footer, siteName } from '../data'
import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from './icons'

const socialIcons = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  pinterest: PinterestIcon,
  dribbble: DribbbleIcon,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-beige pt-20 text-sm text-gray-500">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-deep">
            {footer.contactTitle}
          </h3>
          <address className="mt-6 not-italic leading-relaxed">{footer.address}</address>
          <ul className="mt-4 space-y-2">
            {footer.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${footer.email}`}
                className="transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {footer.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-deep">
            {footer.sourcesTitle}
          </h3>
          <div className="mt-6 flex gap-16">
            {footer.sourcesColumns.map((column) => (
              <ul key={column[0]} className="space-y-2">
                {column.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-deep">
            {footer.linksTitle}
          </h3>
          <ul className="mt-6 space-y-2">
            {footer.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex gap-3">
            {footer.socials.map((social) => {
              const Icon = socialIcons[social.icon]
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[40%] bg-white text-gray-600 transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center">
          Copyright © {year} {siteName}. {footer.rights} | {footer.madeWith}{' '}
          <a
            href={footer.componentDockHref}
            className="font-medium text-deep transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {footer.componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
