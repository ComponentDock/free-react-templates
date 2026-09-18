import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const programs = [
  {
    title: 'Aerobics',
    description: 'High-energy group classes that improve cardiovascular fitness and burn calories.',
    image: 'https://picsum.photos/seed/prowess-aerobics/600/400',
    duration: '45 min',
    level: 'All Levels',
  },
  {
    title: 'Pilates',
    description:
      'Strengthen your core, improve flexibility, and enhance body awareness with controlled movements.',
    image: 'https://picsum.photos/seed/prowess-pilates/600/400',
    duration: '60 min',
    level: 'Intermediate',
  },
  {
    title: 'Yoga',
    description:
      'Find balance between mind and body through ancient practices adapted for modern life.',
    image: 'https://picsum.photos/seed/prowess-yoga/600/400',
    duration: '75 min',
    level: 'All Levels',
  },
] as const

export function Programs() {
  return (
    <section
      id="programs"
      className="bg-gray-50 py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.1em] text-heading dark:text-white sm:text-4xl">
            Our Programs
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-gray-950"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.title} class at Prowess gym`}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-wide text-heading dark:text-white">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body dark:text-gray-400">
                  {program.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-semibold uppercase tracking-wide text-body/60 dark:text-gray-500">
                  <span>{program.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  <span>{program.level}</span>
                </div>
                <div className="mt-6">
                  <ButtonLink
                    href="#pricing"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
