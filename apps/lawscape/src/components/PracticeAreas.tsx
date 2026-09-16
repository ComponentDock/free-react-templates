import { Scale, Heart, Users, Landmark } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const areas = [
  {
    title: 'Employment Law',
    description:
      'Dominion there fifth fowl eving heaven in life you are over us moved creepeth morn make.',
    image: 'https://picsum.photos/seed/lawscape-area1/400/300',
    icon: Scale,
  },
  {
    title: 'Personal Injury',
    description:
      'Dominion there fifth fowl eving heaven in life you are over us moved creepeth morn make.',
    image: 'https://picsum.photos/seed/lawscape-area2/400/300',
    icon: Heart,
  },
  {
    title: 'Family Law',
    description:
      'Dominion there fifth fowl eving heaven in life you are over us moved creepeth morn make.',
    image: 'https://picsum.photos/seed/lawscape-area3/400/300',
    icon: Users,
  },
  {
    title: 'Bank & Financial',
    description:
      'Dominion there fifth fowl eving heaven in life you are over us moved creepeth morn make.',
    image: 'https://picsum.photos/seed/lawscape-area4/400/300',
    icon: Landmark,
  },
] as const

export function PracticeAreas() {
  return (
    <section id="services" aria-label="Practice Areas" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Our Practice Area
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-smoke">
            Female divided bearing rule one called said Beginning set you living above saw seasons
            void created fruitful third years god.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group overflow-hidden bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary-500/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <area.icon className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-ink">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink
            href="#"
            className="inline-block bg-primary-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
          >
            View All Practices →
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
