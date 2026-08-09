import { Play } from 'lucide-react'

export function StyleSection() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/clipper-video/800/1000"
            alt="Man with a styled haircut"
            className="w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-colors hover:bg-brand hover:text-white"
            >
              <Play className="h-8 w-8" fill="currentColor" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">
            Good Looking Style
          </h2>
          <p className="mt-4 text-lg font-semibold text-ink dark:text-white">Start with us today</p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            A great cut starts with a great conversation. We take the time to understand your style,
            your routine, and the look you want to walk out with.
          </p>
          <p className="mt-4 leading-relaxed text-mist dark:text-gray-400">
            From classic scissor work to modern fades and beard shaping, our barbers bring years of
            craft to every chair.
          </p>
        </div>
      </div>
    </section>
  )
}
