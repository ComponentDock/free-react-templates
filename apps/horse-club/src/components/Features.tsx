import { Award, HeartHandshake, LifeBuoy, ThumbsUp, Users, Wrench } from 'lucide-react'

const features = [
  {
    name: 'Expert Technicians',
    copy: 'Our certified trainers and farriers bring decades of hands-on equestrian experience to every session.',
    icon: Wrench,
    color: 'bg-cyan/10 text-cyan',
  },
  {
    name: 'Professional Service',
    copy: 'From first lesson to competition prep, we deliver structured, caring service at every step.',
    icon: Users,
    color: 'bg-sun/10 text-sun',
  },
  {
    name: 'Great Support',
    copy: 'Our team is always available to answer questions and support riders of every level.',
    icon: LifeBuoy,
    color: 'bg-azure/10 text-azure',
  },
  {
    name: 'Technical Skills',
    copy: 'We teach modern riding techniques grounded in proven equestrian science and safety.',
    icon: Award,
    color: 'bg-tangerine/10 text-tangerine',
  },
  {
    name: 'Highly Recomended',
    copy: 'Families and clubs across the region trust Horse Club for quality instruction and care.',
    icon: ThumbsUp,
    color: 'bg-coral/10 text-coral',
  },
  {
    name: 'Positive Reviews',
    copy: 'Riders consistently rate our lessons, events, and boarding among the very best.',
    icon: HeartHandshake,
    color: 'bg-cyan/10 text-cyan',
  },
] as const

export function Features() {
  return (
    <section id="service" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Our Featured Services
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system — explore everything Horse Club has
            to offer.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              data-feature={feature.name}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
            >
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${feature.color}`}
              >
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {feature.name}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
