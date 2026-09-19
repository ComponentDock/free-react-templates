import { Phone, Mail, ChevronDown } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-primary-500 text-xs text-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-white">
            <Phone className="h-3 w-3" />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:info@shopbox.com" className="flex items-center gap-1 hover:text-white">
            <Mail className="h-3 w-3" />
            <span>info@shopbox.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 hover:text-white">
            <span>USD</span>
            <ChevronDown className="h-3 w-3" />
          </button>
          <a href="#" className="hover:text-white">
            My Account
          </a>
        </div>
      </div>
    </div>
  )
}
