import { Mail, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'

const socials = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
] as const

/** Thin white top strip: social icons left, contact details right. */
export function TopBar() {
  return (
    <div className="hidden items-center justify-between border-b border-line-200 bg-white px-4 py-2 text-xs text-mute-500 sm:flex lg:px-8">
      <div className="flex items-center gap-3">
        {socials.map(({ label, Icon }) => (
          <a
            key={label}
            href="#home"
            aria-label={label}
            className="text-mute-500 transition-colors hover:text-primary-500"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
          012-6532-568-9746
        </span>
        <span className="flex items-center gap-2">
          <Mail className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
          emergency@sana.health
        </span>
      </div>
    </div>
  )
}
