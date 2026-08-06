import { BarChart3, Droplets, Gauge, PenTool } from 'lucide-react'

const steps = [
  {
    icon: PenTool,
    title: 'Unique Design',
    blurb:
      'Completely synthesize end-to-end models and emerging niches. Continually visualize long-term high-impact niches.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    blurb:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures.',
  },
  {
    icon: Droplets,
    title: 'Temparature Test',
    blurb:
      'Credibly streamline mission-critical value with multifunctional functionalities. Useful content for the app store experience.',
  },
  {
    icon: Gauge,
    title: 'Show Progress',
    blurb:
      'Rapidiously monetize market-driven web services. Completely synthesize end-to-end models and emerging niches.',
  },
] as const

export function Work() {
  return (
    <section aria-label="How it works" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            Process
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            How it work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-teal text-teal dark:border-cyan dark:text-cyan">
                <step.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="mt-4 inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-bold text-teal dark:text-cyan">
                Step {index + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {step.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
