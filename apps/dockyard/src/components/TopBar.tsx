import { Mail, Phone } from 'lucide-react'
import { contacts, socialLinks } from '../data'
import { SocialIcon } from './SocialIcon'

/** 44px utility strip: e-mail and phone on the left, social links on the right. */
export function TopBar() {
  return (
    <div className="border-b border-line bg-bar">
      <div className="mx-auto flex h-[44px] max-w-[1140px] items-center justify-between gap-4 px-4">
        <ul className="flex items-center gap-6 text-[16px] text-utility">
          <li>
            <a
              href={`mailto:${contacts.email}`}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail aria-hidden="true" className="size-4" />
              <span className="hidden md:inline">{contacts.email}</span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${contacts.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Phone aria-hidden="true" className="size-4" />
              <span className="hidden md:inline">{contacts.phone}</span>
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-4 text-[16px] text-utility">
          {socialLinks.map((social) => (
            <li key={social.network}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex items-center gap-2 transition-colors hover:text-brand"
              >
                <SocialIcon network={social.network} className="size-4" />
                <span className="hidden md:inline">{social.network}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
