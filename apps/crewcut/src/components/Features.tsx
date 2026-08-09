import { Award, HeartHandshake, Scissors, ShieldCheck, ThumbsUp, Wrench } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Technicians',
    blurb: 'Certified barbers with years of hands-on craft and an eye for detail.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Service',
    blurb: 'Clean tools, on-time appointments, and a welcoming chair every visit.',
  },
  {
    icon: HeartHandshake,
    title: 'Great Support',
    blurb: 'Friendly advice on cuts, products, and grooming routines that suit you.',
  },
  {
    icon: Wrench,
    title: 'Technical Skills',
    blurb: 'From fades to formal styles, we master the techniques that matter.',
  },
  {
    icon: ThumbsUp,
    title: 'Highly Recomended',
    blurb: 'Clients recommend us for consistency, care, and quality finishes.',
  },
  {
    icon: Scissors,
    title: 'Positive Reviews',
    blurb: 'Rated highly by the neighborhood for service and style alike.',
  },
] as const

export function Features() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-ink dark:text-white lg:text-4xl">
            Some Features that Made us Unique
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {feature.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
