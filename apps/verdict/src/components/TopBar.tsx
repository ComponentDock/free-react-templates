import { Clock, Mail, Phone } from 'lucide-react'

const phone = { label: 'Call us', value: '(555) 234-5678', icon: Phone }
const email = { label: 'Email us', value: 'hello@verdictlaw.com', icon: Mail }
const hours = { label: 'Office hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM', icon: Clock }

export function TopBar() {
  return (
    <div className="bg-primary-950 text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-1 px-4 py-2 text-xs lg:px-8">
        <div className="flex items-center gap-6">
          {[phone, email].map((detail) => (
            <span key={detail.label} className="inline-flex items-center gap-2">
              <detail.icon className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
              {detail.value}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2">
          <hours.icon className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
          {hours.value}
        </span>
      </div>
    </div>
  )
}
