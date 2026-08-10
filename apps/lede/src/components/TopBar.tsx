import { Mail, Phone } from 'lucide-react'
import { emailAddress, phoneNumber, socialLinks } from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './icons'

const socialIcons = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  Dribbble: DribbbleIcon,
  Behance: BehanceIcon,
} as const

export function TopBar() {
  return (
    <div className="bg-navy px-5 py-[15px] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <ul className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.label]
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="block text-xs text-white transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
                >
                  <Icon className="h-3 w-3" />
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center gap-6 text-xs font-light">
          <span className="inline-flex items-center gap-2">
            <Phone size={12} aria-hidden="true" />
            {phoneNumber}
          </span>
          <a
            href={`mailto:${emailAddress}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
          >
            <Mail size={12} aria-hidden="true" />
            {emailAddress}
          </a>
        </div>
      </div>
    </div>
  )
}
