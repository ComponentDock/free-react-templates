import { Clock, Phone, TriangleAlert } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-primary-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 text-xs font-medium sm:text-sm lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1.5 transition-colors hover:text-primary-200"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            (555) 123-4567
          </a>
          <span className="hidden items-center gap-1.5 text-primary-200 md:flex">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Mon-Fri: 8:00 AM - 6:00 PM
          </span>
        </div>
        <a
          href="tel:+15559110000"
          className="flex items-center gap-1.5 font-semibold transition-colors hover:text-accent-300"
        >
          <TriangleAlert className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
          Emergency: (555) 911-0000
        </a>
      </div>
    </div>
  )
}
