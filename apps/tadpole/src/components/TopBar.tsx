import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

export function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@tadpole.com"
            className="flex items-center gap-2 hover:text-brand-pink transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>info@tadpole.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-brand-pink transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+1 (234) 567-890</span>
          </a>
          <span className="hidden items-center gap-2 sm:flex">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>123 Sunshine Ave, Kidstown</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: 'Facebook', Icon: FacebookIcon },
            { label: 'Twitter', Icon: TwitterIcon },
            { label: 'Instagram', Icon: InstagramIcon },
          ].map(({ label, Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-pink transition-colors"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
