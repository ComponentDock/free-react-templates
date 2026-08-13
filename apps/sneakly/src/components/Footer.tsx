import { ChevronUp, Mail, MapPin, Phone } from 'lucide-react'
import { brand, contactInfo, helpLinks, menuLinks } from '../data'
import { socialLinks } from './social-icons'

/** Black footer with a scroll-up control, four widget columns (brand +
 *  social circles, Menu, Help, contact info) and a copyright bar whose
 *  credit links Component Dock. */
export function Footer() {
  return (
    <footer data-testid="footer" className="bg-ink py-16 text-footer">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="mb-10 flex justify-center">
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-brand hover:text-ink"
          >
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-white">
              {brand.name}
            </h2>
            <p className="mb-5 text-sm">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
            <ul className="flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-brand hover:text-ink"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-white">Menu</h2>
            <ul className="space-y-2 text-sm">
              {menuLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-white">Help</h2>
            <ul className="space-y-2 text-sm">
              {helpLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    className="hover:text-brand"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[3px] text-white">
              Have a Questions?
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {contactInfo.phone}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {contactInfo.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 text-center text-sm">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span aria-hidden="true">♥</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-bold text-brand transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
