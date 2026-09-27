import { Building2, Waves, Trophy } from 'lucide-react'

const facilities = [
  {
    icon: Building2,
    title: 'Conference Room',
    description:
      'Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain.',
  },
  {
    icon: Waves,
    title: 'Swimming Pool',
    description:
      'Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain.',
  },
  {
    icon: Trophy,
    title: 'Sports Club',
    description:
      'Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain.',
  },
]

export function SpecialFacilities() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Special Facilities</h2>
        </div>

        <div className="mb-10">
          <img
            src="https://picsum.photos/seed/tidestone-facilities/1200/350"
            alt="Special facilities overview"
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {facilities.map((facility) => {
            const Icon = facility.icon
            return (
              <div key={facility.title} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                  <h4 className="font-display text-lg font-semibold text-ink">{facility.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-mist">{facility.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
