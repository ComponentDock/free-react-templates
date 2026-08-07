import { Apple, Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-br from-primary-100/40 via-white to-accent-300/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-gray-100">
            Blush <span className="block text-primary-400">The App</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper
            rhoncus. Curabitur pulvinar vel augue sit amet vestibulum.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-400 bg-primary-400 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
            >
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              available on Google Store
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-400 bg-transparent px-6 py-3 font-semibold text-primary-400 transition-colors hover:bg-primary-400 hover:text-white"
            >
              <Apple className="h-4 w-4" aria-hidden="true" />
              available on Apple Store
            </a>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/blush-hero/560/640"
            alt="Blush app on a phone screen"
            className="h-auto w-full max-w-md rounded-3xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
