import { Mail, Phone } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

export function TopBar() {
  return (
    <div className="relative bg-ink text-sm text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/gracecraft-topbar/1200/100')" }}
      />
      <div className="relative mx-auto max-w-6xl flex items-center justify-between px-4 py-2">
        <ul className="flex items-center gap-6">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>infogracecraft@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>Call Us: +1234 800 8080</span>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white transition-colors hover:text-salmon"
          >
            <BrandIcon name="facebook" className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-white transition-colors hover:text-salmon"
          >
            <BrandIcon name="twitter" className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-white transition-colors hover:text-salmon"
          >
            <BrandIcon name="linkedin" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
