import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[#333] text-sm text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <a href="tel:+12312-3-1209" className="flex items-center gap-1 hover:text-brand">
            <Phone className="h-3 w-3" />
            +12312-3-1209
          </a>
          <a
            href="mailto:support@shopcraft.com"
            className="flex items-center gap-1 hover:text-brand"
          >
            <Mail className="h-3 w-3" />
            support@shopcraft.com
          </a>
        </div>
        <div>
          <a href="#login" className="hover:text-brand">
            Login
          </a>
        </div>
      </div>
    </div>
  )
}
