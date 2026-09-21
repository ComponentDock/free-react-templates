import { CircleDot, Flower2, Footprints, Leaf, Heart } from 'lucide-react'

const services = [
  { icon: CircleDot, label: 'Acupuncture' },
  { icon: Flower2, label: 'Therapy' },
  { icon: Footprints, label: 'Foot' },
  { icon: Leaf, label: 'Natural' },
  { icon: Heart, label: 'Healing' },
]

export function Services() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-3 md:grid-cols-5 md:px-8">
        {services.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-sm font-medium text-ink dark:text-gray-200">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
