import { footerInfo } from '../data'
import { SocialLinks } from './SocialLinks'

const year = new Date().getFullYear()

function LinkColumn({
  heading,
  links,
}: {
  heading: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold text-ink">{heading}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-body transition-colors hover:text-brand">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#f8f9fa] pb-16">
      <div className="mx-auto max-w-[1250px] px-4 pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-sm font-bold text-ink">{footerInfo.aboutHeading}</h3>
            <p className="mb-6 text-sm leading-relaxed text-body">{footerInfo.aboutText}</p>
            <SocialLinks />
          </div>

          <div className="lg:col-span-2">
            <LinkColumn heading="Pages" links={footerInfo.pages} />
          </div>

          <div className="lg:col-span-2">
            <LinkColumn heading="Resources" links={footerInfo.resources} />
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-sm font-bold text-ink">{footerInfo.contactHeading}</h3>
            <ul className="space-y-3 text-sm text-body">
              <li>
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="transition-colors hover:text-brand"
                >
                  {footerInfo.email}
                </a>
              </li>
              <li>
                <a href="tel:+12222123819" className="transition-colors hover:text-brand">
                  {footerInfo.phone}
                </a>
              </li>
              <li>{footerInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-brand/10 pt-8 text-center text-sm text-body">
          <p>
            Copyright © {year} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
