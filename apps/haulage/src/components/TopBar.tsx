import { Mail, Phone } from 'lucide-react'
import { TOP_BAR } from '../data'
import { FacebookIcon, TwitterIcon } from './icons'

/* div.top-bar — thin bar above the navbar: email + phone on the left,
   Twitter + Facebook icon links on the right, 1px #e9ecef bottom border. */
export function TopBar() {
  return (
    <div className="border-b border-[#e9ecef]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-[13px] text-smoke">
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${TOP_BAR.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-brand"
          >
            <Mail aria-hidden="true" className="h-3.5 w-3.5" />
            {TOP_BAR.email}
          </a>
          <a
            href={`tel:${TOP_BAR.phone.replaceAll(' ', '')}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-brand sm:inline-flex"
          >
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            {TOP_BAR.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Twitter"
            className="inline-flex transition-colors hover:text-brand"
          >
            <TwitterIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex transition-colors hover:text-brand"
          >
            <FacebookIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
