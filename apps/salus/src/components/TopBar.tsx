import { Mail, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import { contact } from '../data'

export function TopBar() {
  return (
    <div className="bg-tint">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm text-body">
        <ul className="flex items-center gap-4" aria-label="Social links">
          {(['facebook', 'instagram', 'linkedin', 'x'] as const).map((name) => (
            <li key={name}>
              <a
                href="#social"
                aria-label={name}
                className="text-fade transition-colors hover:text-brand"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a href="#contact" className="flex items-center gap-2 hover:text-brand">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{contact.email}</span>
          </a>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{contact.phoneTop}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
