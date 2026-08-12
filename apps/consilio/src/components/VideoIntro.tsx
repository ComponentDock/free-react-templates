import { Check, Play } from 'lucide-react'

const features = [
  'Full diagnostic of your current operating model',
  'A prioritized roadmap with clear owners and timelines',
  'Benchmarks against best-in-class peers in your sector',
  'Quarterly reviews to keep transformation on track',
]

export function VideoIntro() {
  return (
    <section aria-labelledby="video-intro-heading" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/consilio-4/800/450"
            alt="Consultants reviewing a transformation plan"
            className="w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Play className="ml-1 h-8 w-8 fill-current" aria-hidden="true" />
          </button>
        </div>
        <div>
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Inside Our Process
          </p>
          <h2
            id="video-intro-heading"
            className="mb-5 font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            See How We Transform Businesses
          </h2>
          <p className="mb-7 text-sm leading-relaxed text-body dark:text-gray-400">
            Watch how our teams move a company from ambition to execution — a structured engagement
            that pairs senior consultants with your people from day one.
          </p>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-body dark:text-gray-300"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
