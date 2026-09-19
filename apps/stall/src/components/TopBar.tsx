import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-light-bg border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-3">
          <a href="#facebook" aria-label="Facebook" className="text-gray-500 hover:text-brand">
            <span className="text-sm font-bold">f</span>
          </a>
          <a href="#twitter" aria-label="Twitter" className="text-gray-500 hover:text-brand">
            <span className="text-sm font-bold">t</span>
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="text-gray-500 hover:text-brand">
            <span className="text-sm font-bold">in</span>
          </a>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-brand">
            <Phone className="h-3 w-3" />
            <span>+1 234 567 890</span>
          </a>
          <a href="mailto:info@stall.com" className="flex items-center gap-1 hover:text-brand">
            <Mail className="h-3 w-3" />
            <span>info@stall.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}
