import { Phone, Clock } from 'lucide-react'
import { topBarHours, topBarPhone, welcomeText } from '../data'

export function TopBar() {
  return (
    <div className="bg-navy text-topbar-text">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 text-sm sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            {welcomeText} <span className="font-bold text-brand">LifeClinic</span>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />
            {topBarHours}
          </span>
          <span className="flex items-center gap-1.5">
            <Phone aria-hidden="true" className="h-3.5 w-3.5" />
            {topBarPhone}
          </span>
        </div>
      </div>
    </div>
  )
}
