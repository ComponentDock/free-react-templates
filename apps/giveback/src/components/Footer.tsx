import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'
import { footerInfo } from '../data'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'GitHub', name: 'github' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center bg-brand text-white">
                <Heart className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold">Giveback</span>
            </a>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/70">
              {footerInfo.blurb}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:border-teal hover:bg-teal hover:text-navy"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase tracking-wide text-teal">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-light text-white/70">
              {footerInfo.navigation.map((label) => (
                <li key={label}>
                  <a href={`#${label.toLowerCase()}`} className="transition-colors hover:text-teal">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase tracking-wide text-teal">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm font-light text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span>{footerInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span>{footerInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <a
                  href={`mailto:${footerInfo.email}`}
                  className="transition-colors hover:text-teal"
                >
                  {footerInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium uppercase tracking-wide text-teal">
              {footerInfo.supportTitle}
            </h3>
            <p className="mt-5 text-sm font-light leading-relaxed text-white/70">
              {footerInfo.supportText}
            </p>
            <a
              href="#home"
              className="mt-6 inline-block bg-brand px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-flame"
            >
              {footerInfo.supportCta}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm font-light text-white/60">
        Copyright © {new Date().getFullYear()} All rights reserved | More templates at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-teal transition-colors hover:text-white"
        >
          Component Dock
        </a>
      </div>
    </footer>
  )
}
