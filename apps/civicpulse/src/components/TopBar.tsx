import { Phone, Mail } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const socialLinks = [
  { name: 'facebook' as const, label: 'Facebook' },
  { name: 'twitter' as const, label: 'Twitter' },
  { name: 'dribbble' as const, label: 'Dribbble' },
  { name: 'behance' as const, label: 'Behance' },
] as const

export function TopBar() {
  return (
    <div className="bg-[#222] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              aria-label={link.label}
              className="text-gray-400 transition-colors hover:text-brand"
            >
              <BrandIcon name={link.name} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5 text-xs text-gray-300">
          <a
            href="tel:+11234567890"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Phone className="h-3 w-3" aria-hidden="true" />
            (123) 456 7890
          </a>
          <a
            href="mailto:info@example.com"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail className="h-3 w-3" aria-hidden="true" />
            info@example.com
          </a>
        </div>
      </div>
    </div>
  )
}
