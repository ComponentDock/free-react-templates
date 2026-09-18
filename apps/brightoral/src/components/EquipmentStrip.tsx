import { Sparkles, Stethoscope, Pill, Wrench } from 'lucide-react'

const EQUIPMENT = [
  { icon: Sparkles, label: 'Tooth Whitening' },
  { icon: Stethoscope, label: 'Dental Checkup' },
  { icon: Pill, label: 'First Aid Kit' },
  { icon: Wrench, label: 'Dental Tools' },
]

export function EquipmentStrip() {
  return (
    <section className="border-t border-b border-gray-100 bg-white py-8">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8">
        {EQUIPMENT.map((item) => (
          <div key={item.label} className="flex items-center justify-center gap-3 text-center">
            <item.icon className="h-6 w-6 text-brand" />
            <span className="text-sm font-light uppercase tracking-wider text-mist">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
