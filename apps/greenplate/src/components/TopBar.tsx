import { Phone, Mail, Truck } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-brand text-white py-2 px-4 text-sm" data-testid="topbar">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6 flex-wrap">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>(001) 112 3567</span>
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>info@free-template.com</span>
          </span>
        </div>
        <span className="flex items-center gap-2">
          <Truck className="w-4 h-4" />
          <span>Free delivery for orders over $100</span>
        </span>
      </div>
    </div>
  )
}
