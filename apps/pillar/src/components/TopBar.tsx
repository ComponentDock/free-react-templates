import { Mail, Phone } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4 text-sm">
          <a href="mailto:info@pillar.com" className="flex items-center gap-1 hover:text-white">
            <Mail className="h-3.5 w-3.5" />
            info@pillar.com
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-white">
            <Phone className="h-3.5 w-3.5" />
            +1 234 567 890
          </a>
        </div>
      </div>
    </div>
  )
}
