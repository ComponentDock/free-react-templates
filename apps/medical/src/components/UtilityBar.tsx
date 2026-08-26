import { Phone, Mail } from 'lucide-react'

export function UtilityBar() {
  return (
    <div className="bg-brand text-white text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <a href="tel:+9530123654896" className="flex items-center gap-1 hover:text-brand-100">
            <Phone className="h-3 w-3" />
            <span>+953 012 3654 896</span>
          </a>
          <a
            href="mailto:support@medical.com"
            className="flex items-center gap-1 hover:text-brand-100"
          >
            <Mail className="h-3 w-3" />
            <span>support@medical.com</span>
          </a>
        </div>
        <a
          href="#appointment"
          className="rounded bg-white px-4 py-1 text-brand font-medium hover:bg-brand-50"
        >
          BOOK APPOINTMENT
        </a>
      </div>
    </div>
  )
}
