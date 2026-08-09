import { CarFront, Clock3, ShieldCheck } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const features = [
  {
    title: 'Unlimited Car Support',
    blurb:
      'Practice as much as you need with unlimited access to our training fleet and instructors.',
    icon: CarFront,
  },
  {
    title: 'Driving School Insures',
    blurb: 'Every lesson is fully insured so you can focus on learning with total peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'Any Time Any Location',
    blurb: 'Book lessons at your convenience — mornings, evenings, and weekends, wherever you are.',
    icon: Clock3,
  },
] as const

export function Features() {
  return (
    <section id="about" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Why choose us?</p>
          <h2 className="mt-3 font-display text-3xl font-black uppercase text-ink dark:text-white">
            Our feature
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-mist dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
          <ButtonLink href="#courses" className="mt-6 uppercase">
            See Courses
          </ButtonLink>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist dark:text-gray-300">
                {feature.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
