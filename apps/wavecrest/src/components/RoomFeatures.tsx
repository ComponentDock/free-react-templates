import { Bed, Sparkles, Waves, Mountain } from 'lucide-react'

const features = [
  { icon: Bed, title: 'Deluxe Room' },
  { icon: Sparkles, title: 'Beautiful Rooms' },
  { icon: Waves, title: 'Swimming Pool' },
  { icon: Mountain, title: 'Luxury Resort' },
] as const

export function RoomFeatures() {
  return (
    <section id="rooms" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-paper text-brand">
              <feature.icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-navy">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
