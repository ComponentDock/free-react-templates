import { Mail, Phone } from 'lucide-react'
import { topBar } from '../data'
import { BrandIcon } from './BrandIcon'

const socials = [
  { name: 'twitter', label: 'Twitter' },
  { name: 'facebook', label: 'Facebook' },
  { name: 'instagram', label: 'Instagram' },
] as const

export function TopBar() {
  return (
    <div className="bg-charcoal py-1 text-xs text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 sm:flex-row">
        <p className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
          <span>{topBar.phone}</span>
        </p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            <span>{topBar.email}</span>
          </p>
          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#home"
                  aria-label={social.label}
                  className="text-white/80 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <BrandIcon name={social.name} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
