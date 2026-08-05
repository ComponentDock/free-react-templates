import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
            Mass People Oriented Software
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-10 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-3 font-semibold text-ink transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-600 shadow-md dark:bg-gray-800 dark:text-primary-400">
                <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
              </span>
              watch the video
            </a>
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/gaas-hero/640/560"
          alt="Gaas dashboard preview"
          className="mx-auto w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </section>
  )
}
