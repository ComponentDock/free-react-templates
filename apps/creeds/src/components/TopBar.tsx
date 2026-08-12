import { User } from 'lucide-react'
import { topBarLinks } from '../data'
import { BehanceIcon, DribbbleIcon, FacebookIcon, TwitterIcon } from './social-icons'

const socials = [
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'Twitter', Icon: TwitterIcon },
  { name: 'Dribbble', Icon: DribbbleIcon },
  { name: 'Behance', Icon: BehanceIcon },
] as const

export function TopBar() {
  return (
    <div className="hidden items-center justify-between bg-white px-5 py-0 text-xs md:flex">
      <ul className="flex items-center gap-3">
        {socials.map(({ name, Icon }) => (
          <li key={name}>
            <a
              href="#"
              aria-label={name}
              className="flex h-8 w-8 items-center justify-center bg-section text-[#cccccc] transition-colors hover:bg-brand hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        {topBarLinks.map((link) => (
          <a
            key={link}
            href={link === 'Donate Now' ? '#donate' : '#'}
            className="flex items-center gap-1.5 px-8 py-2 font-medium text-muted transition-colors hover:bg-brand hover:text-white"
          >
            {link === 'My Account' ? <User className="h-3.5 w-3.5" /> : null}
            {link}
          </a>
        ))}
      </div>
    </div>
  )
}
