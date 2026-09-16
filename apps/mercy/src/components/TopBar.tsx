import { Phone, Mail } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socialLinks: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function TopBar() {
  return (
    <div className="bg-ink text-sm text-white/80 transition-colors dark:bg-ink-dark">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-6">
          <a href="tel:+103672672678" className="flex items-center gap-2 hover:text-brand">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>+10 367 267 2678</span>
          </a>
          <a
            href="mailto:info@mercy.org"
            className="hidden items-center gap-2 sm:flex hover:text-brand"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span>info@mercy.org</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="flex h-7 w-7 items-center justify-center rounded text-white/70 transition-colors hover:text-brand"
            >
              <BrandIcon name={social.name} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
