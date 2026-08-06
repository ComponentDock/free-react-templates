import { Camera, Headphones, Monitor } from 'lucide-react'

const items = [
  {
    icon: Camera,
    title: 'Awesome Beauty Camera',
    blurb:
      'Completely synthesize end-to-end models and emerging niches. Continually visualize long-term high-impact niches.',
  },
  {
    icon: Headphones,
    title: 'Live Chat Support',
    blurb:
      'Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures.',
  },
  {
    icon: Monitor,
    title: 'Retina Ready',
    blurb:
      'Credibly streamline mission-critical value with multifunctional functionalities. Useful content for the app store experience.',
  },
] as const

export function AppSplit() {
  return (
    <section id="app" aria-label="App" className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
            What&apos;s inside
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            All you want from app
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
            and emerging niches. Continually visualize long-term high-impact niches.
          </p>
          <ul className="mt-8 space-y-6">
            {items.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-aqua to-sky text-white">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.blurb}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/massive-app/480/640"
            alt="Massive app preview"
            className="max-h-[32rem] w-full max-w-sm rounded-3xl object-cover shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
