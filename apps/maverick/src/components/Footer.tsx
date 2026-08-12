import { Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER_ABOUT, FOOTER_LINKS, FOOTER_QUESTIONS, FOOTER_SERVICES } from '../data'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons'

/* Footer recreated from the ColorLib "Clark" footer: a black four-column
   footer (About + social circles, Links, Services, Have a Questions?) with
   a centered copyright bar. Brand social icons are inline SVGs (lucide
   removed brand icons). */

const socialIcons = [
  { label: 'Twitter', href: '#', Icon: TwitterIcon },
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black pb-8 pt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-[22px] font-semibold text-white">About</h2>
          <p className="mt-4 text-[16px] text-faint">{FOOTER_ABOUT}</p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-card text-white transition-colors hover:bg-brand hover:text-black"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-white">Links</h2>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}-section`}
                  className="text-[16px] text-faint transition-colors hover:text-brand"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-3">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <a
                  href="#services-section"
                  className="text-[16px] text-faint transition-colors hover:text-brand"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[22px] font-semibold text-white">Have a Questions?</h2>
          <ul className="mt-4 space-y-3 text-[16px] text-faint">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{FOOTER_QUESTIONS.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{FOOTER_QUESTIONS.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{FOOTER_QUESTIONS.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-16 text-center text-[15px] text-faint">
        Copyright © {year} All rights reserved | This template is made with{' '}
        <span aria-hidden="true">❤</span> by {BRAND}
      </p>
    </footer>
  )
}
