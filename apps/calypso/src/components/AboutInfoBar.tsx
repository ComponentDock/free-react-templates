import { Monitor, Phone, Mail } from 'lucide-react'

const items = [
  { icon: <Monitor className="h-5 w-5" />, label: 'Design For', value: 'Web & Mobile' },
  { icon: <Phone className="h-5 w-5" />, label: 'Phone', value: '+1 (555) 234-5678' },
  { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'alex@calypso.design' },
] as const

export function AboutInfoBar() {
  return (
    <section
      data-testid="about-info-bar"
      className="border-y border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-500 dark:bg-brand-950 dark:text-brand-400">
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {item.label}
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
