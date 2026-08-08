import { Award, Clock, Leaf } from 'lucide-react'

const reasons = [
  {
    title: 'People first',
    blurb: 'Every workplace is designed around how your team actually works.',
    icon: Award,
  },
  {
    title: 'Timely delivery',
    blurb: 'Clear milestones and on-site supervision keep every build on track.',
    icon: Clock,
  },
  {
    title: 'Sustainable materials',
    blurb: 'Low-impact construction and healthy indoor climates as standard.',
    icon: Leaf,
  },
] as const

export function WhyUs() {
  return (
    <section id="why-us" className="bg-cream py-20 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Why Abode</p>
          <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            Curating a workplace that inspires all of us
          </h2>
          <p className="mt-6 leading-relaxed text-mist dark:text-gray-400">
            We believe great architecture starts with great questions. From site strategy to the
            last light switch, we design with the people who will live and work there.
          </p>
        </div>

        <ul className="space-y-6">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex items-start gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal text-white">
                <reason.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {reason.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
