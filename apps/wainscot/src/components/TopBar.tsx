import { Phone } from 'lucide-react'
import { phoneDisplay, phoneLabel, quoteLabel, socialLinks } from '../data'
import { BrandIcon } from './BrandIcon'

export function TopBar() {
  const phoneHref = 'tel:' + phoneDisplay.replace(/[^\d+]/g, '')

  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4">
        <a
          href={phoneHref}
          className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-brand"
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-brand" />
          <span className="sr-only">{phoneLabel}: </span>
          {phoneDisplay}
        </a>

        <ul className="hidden items-center gap-4 md:flex" aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.href}
                aria-label={link.label}
                className="text-body transition-colors hover:text-brand"
              >
                <BrandIcon name={link.icon} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact-section"
          className="inline-flex items-center rounded-[5px] bg-brand px-5 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand/90"
        >
          {quoteLabel}
        </a>
      </div>
    </div>
  )
}
