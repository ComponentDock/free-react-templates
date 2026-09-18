import { Phone, Mail, MapPin } from 'lucide-react'

export function TopHeader() {
  return (
    <div className="bg-darker-bg text-sm text-footer-text">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            +1 (234) 567 890
          </span>
          <span className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            shop@joule.com
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <MapPin className="h-3 w-3" />
            123 Commerce St, New York
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-white" type="button">
            USD $
          </button>
          <a href="#" className="hover:text-white">
            My Account
          </a>
        </div>
      </div>
    </div>
  )
}
