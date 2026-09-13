import { Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Dribbble', name: 'dribbble' },
]

export function TopBar() {
  return (
    <div className="bg-light-bg text-sm text-mist">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href="tel:+103672672678"
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            <span>+10 367 267 2678</span>
          </a>
          <a
            href="mailto:info@techwise.com"
            className="flex items-center gap-2 transition-colors hover:text-brand"
          >
            <Mail className="h-3 w-3" aria-hidden="true" />
            <span>info@techwise.com</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="transition-colors hover:text-brand"
            >
              <BrandIcon name={social.name} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
