import { Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { footerLinkLabels, venue } from '../data'

const socials = ['facebook', 'twitter', 'instagram', 'youtube'] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" aria-label="Footer" className="bg-tint-2 px-4 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 pb-12 md:grid-cols-3">
        <div>
          <h3 className="mb-6 text-lg font-medium capitalize text-heading">Follow Us</h3>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social}
                href="https://www.componentdock.com/"
                target="_blank"
                rel="noreferrer"
                aria-label={`Convoke on ${social}`}
                className="flex h-10 w-10 items-center justify-center rounded-full text-heading transition-colors hover:text-rainbow-3"
              >
                <BrandIcon name={social} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-medium capitalize text-heading">Links</h3>
          <ul className="space-y-3">
            {footerLinkLabels.map((label) => (
              <li key={label}>
                <a
                  href="#home"
                  className="text-base text-body transition-colors hover:text-rainbow-3"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-medium capitalize text-heading">Venue</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-rainbow-3" />
              <span className="text-base text-body">{venue.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-rainbow-3" />
              <span className="text-base text-body">{venue.email}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-rainbow-3" />
              <span className="text-base text-body">{venue.phone}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center">
        <p className="text-sm text-body">
          Copyright © {year} All rights reserved |{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-heading underline-offset-2 hover:underline"
          >
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
