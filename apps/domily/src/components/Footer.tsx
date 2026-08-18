import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import { FOOTER } from '../data'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from './icons'

const SOCIALS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'LinkedIn', Icon: LinkedInIcon },
] as const

function LinkColumn({ heading, links }: { heading: string; links: readonly string[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-navy-ink">{heading}</h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-base font-light text-[#5E5E5E] transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-4 pb-16 pt-[99px] sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold tracking-wide text-navy-ink">DOMILY</p>
          <p className="mt-6 max-w-xs text-base font-light leading-relaxed text-[#5E5E5E]">
            {FOOTER.blurb}
          </p>
          <ul className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center text-[#BCBCBC] transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Icon className="size-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <LinkColumn heading="Navigation" links={FOOTER.columns.navigation} />
        <LinkColumn heading="Services" links={FOOTER.columns.services} />
        <LinkColumn heading="Support" links={FOOTER.columns.support} />

        <div>
          <h3 className="text-lg font-medium text-navy-ink">Contact Us</h3>
          <ul className="mt-6 space-y-4 text-base font-light text-[#5E5E5E]">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              {FOOTER.contact.address}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {FOOTER.contact.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {FOOTER.contact.phone}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cardborder bg-footbar">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-2 px-4 py-5 text-center text-sm text-[#5E5E5E] sm:flex-row sm:text-left">
          <p>Copyright © 2026 All rights reserved</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="size-4 text-gold" aria-hidden="true" /> and{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-navy transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
