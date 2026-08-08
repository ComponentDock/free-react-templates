import { Compass, Layers, Lightbulb } from 'lucide-react'

const counters = [
  { number: '18', label: 'Years of Experienced' },
  { number: '351', label: 'Happy Clients' },
  { number: '564', label: 'Finished Projects' },
  { number: '300', label: 'Working Days' },
] as const

const features = [
  {
    title: 'Perfectly Design',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Lightbulb,
  },
  {
    title: 'Carefully Planned',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Compass,
  },
  {
    title: 'Smartly Execute',
    blurb:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: Layers,
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-950">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gable-1/1600/700)' }}
      >
        <div className="bg-black/70 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand">
              Who we are
            </p>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl">
              About Gable Architecture
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              We design buildings that balance craft, light, and structure — turning spaces into
              places people love to live and work in.
            </p>
          </div>
        </div>
      </div>

      <div className="border-b border-black/5 bg-paper dark:border-white/10 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {counters.map((counter) => (
            <div key={counter.label} className="text-center">
              <strong className="font-display text-4xl font-extrabold text-brand-dark dark:text-brand">
                {counter.number}
              </strong>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-wide text-mist dark:text-white/60">
                {counter.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-black/5 bg-paper p-8 transition-colors hover:border-brand dark:border-white/10 dark:bg-gray-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/15 text-brand-dark transition-colors group-hover:bg-brand group-hover:text-ink">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {feature.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
