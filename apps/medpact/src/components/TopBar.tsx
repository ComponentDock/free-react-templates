import { Phone, Mail, Clock } from 'lucide-react'
import { phone, email, hours } from '../data'

export function TopBar() {
  return (
    <div className="bg-footer-bg text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 text-sm sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            {phone}
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Mail aria-hidden="true" className="h-3.5 w-3.5" />
            {email}
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          <Clock aria-hidden="true" className="h-3.5 w-3.5" />
          {hours}
        </span>
      </div>
    </div>
  )
}
