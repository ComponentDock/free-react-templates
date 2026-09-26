import { Smartphone, Phone, Mail } from 'lucide-react'

const infoItems = [
  { label: 'Design For', value: 'Web & Mobile', icon: Smartphone },
  { label: 'Phone', value: '+10 (67) 367-9034', icon: Phone },
  { label: 'Drop your Message', value: 'alex@pixelate.dev', icon: Mail },
]

export function AboutInfo() {
  return (
    <section className="border-t border-gray-100 bg-white py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-3 lg:px-8">
        {infoItems.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <item.icon size={20} className="shrink-0 text-brand" aria-hidden="true" />
            <div>
              <p className="text-xs uppercase tracking-wider text-mist">{item.label}</p>
              <p className="font-medium text-ink">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
