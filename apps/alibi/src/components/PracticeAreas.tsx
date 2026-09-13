import { Users, Pill, ShieldAlert } from 'lucide-react'

const areas = [
  {
    icon: Users,
    title: 'Family Law',
    image: 'https://picsum.photos/seed/alibi-practice-1/600/400',
    alt: 'Family law consultation',
  },
  {
    icon: Pill,
    title: 'Drug Offense',
    image: 'https://picsum.photos/seed/alibi-practice-2/600/400',
    alt: 'Drug offense defense',
  },
  {
    icon: ShieldAlert,
    title: 'Assault',
    image: 'https://picsum.photos/seed/alibi-practice-3/600/400',
    alt: 'Assault defense representation',
  },
]

export function PracticeAreas() {
  return (
    <section id="team" className="bg-section-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Practice Areas</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => {
            const Icon = area.icon
            return (
              <div key={area.title} className="group relative overflow-hidden rounded-lg">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 p-6 text-center opacity-100 transition-opacity duration-300 group-hover:bg-ink/85">
                  <Icon className="mb-3 h-10 w-10 text-white" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white">{area.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
