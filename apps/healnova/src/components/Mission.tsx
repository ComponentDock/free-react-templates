import { Play } from 'lucide-react'

export function Mission() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Our Mission
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            We Provide <span className="text-brand">High Solutions</span> for Your Health
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Our mission is to deliver world-class healthcare with empathy, innovation, and
            integrity. We invest in advanced medical technology and ongoing staff training to serve
            our patients better every day.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/healnova-mission/700/500"
            alt="Medical facility interior"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
