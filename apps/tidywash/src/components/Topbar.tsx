import { Mail, Phone, Clock } from 'lucide-react'

export function Topbar() {
  return (
    <div className="bg-gray-100 py-2 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
            youremail@email.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
            1-1234-012-1234
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock className="h-3.5 w-3.5 text-primary-400" aria-hidden="true" />
            Mon - Sat (8am - 7pm) Sunday closed
          </span>
        </div>
      </div>
    </div>
  )
}
