import { Phone, Mail } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[#333333] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6">
          <a
            href="tel:+9530123654896"
            className="flex items-center gap-2 hover:text-[#76b900] transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>+953 012 3654 896</span>
          </a>
          <a
            href="mailto:support@medlink.com"
            className="hidden items-center gap-2 sm:flex hover:text-[#76b900] transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>support@medlink.com</span>
          </a>
        </div>
        <a
          href="#appointment"
          className="rounded bg-[#76b900] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#5a8f00] transition-colors"
        >
          BOOK APPOINTMENT
        </a>
      </div>
    </div>
  )
}
