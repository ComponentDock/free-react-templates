import { Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, SkypeIcon } from './social-icons'
import { topBarInfo } from '../data'

export function TopBar() {
  return (
    <div className="bg-[#f8f9fa] py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-6 text-sm text-body">
          <span className="flex items-center gap-1">
            <Phone className="h-3.5 w-3.5 text-primary" />
            {topBarInfo.phone}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-primary" />
            {topBarInfo.email}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-body/60 transition-colors hover:text-primary"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-body/60 transition-colors hover:text-primary"
          >
            <TwitterIcon />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-body/60 transition-colors hover:text-primary"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="Skype"
            className="text-body/60 transition-colors hover:text-primary"
          >
            <SkypeIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
