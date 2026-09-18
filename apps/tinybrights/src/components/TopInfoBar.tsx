import { MapPin, Mail, Phone } from 'lucide-react'

const infoItems = [
  { icon: MapPin, text: '123 Sunshine Lane, Brookside, NY 10001', color: 'bg-brand-blue' },
  { icon: Mail, text: 'hello@tinybrights.com', color: 'bg-brand-orange' },
  { icon: Phone, text: '+1 (555) 234-5678', color: 'bg-brand-green' },
]

export function TopInfoBar() {
  return (
    <div className="bg-brand-blue text-white" role="complementary">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-3 sm:justify-between sm:px-6">
        {infoItems.map(({ icon: Icon, text, color }) => (
          <div key={text} className="flex items-center gap-3">
            <span className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}>
              <Icon className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-white">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
