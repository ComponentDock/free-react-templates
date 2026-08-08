import { Building2 } from 'lucide-react'

const features = [
  {
    title: 'Architecture',
    blurb:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.',
  },
  {
    title: 'Architecture',
    blurb:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.',
  },
  {
    title: 'Architecture',
    blurb:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.',
  },
] as const

export function Features() {
  return (
    <section id="services" className="py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="space-y-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <Building2
                className="mt-1 h-8 w-8 shrink-0 text-brand"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-ink dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-mist dark:text-gray-400">{feature.blurb}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/elevation-feature/640/800"
            alt="Elevation feature — architectural detail"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
