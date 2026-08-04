import { useState } from 'react'
import { Play } from 'lucide-react'

export function AboutVideo() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="about" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            We are here to listen from you deliver exellence
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            onClick={() => setShowVideo((shown) => !shown)}
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-brand"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-ink">
              <Play className="h-5 w-5" aria-hidden="true" />
            </span>
            Play the video
          </button>
          {showVideo && (
            <p className="mt-4 text-sm font-light text-muted dark:text-gray-400">
              Horse training fundamentals with our expert riders.
            </p>
          )}
        </div>
        <img
          src="https://picsum.photos/seed/horseclub-about/800/600"
          alt="Rider training a horse in the arena"
          className="w-full rounded-3xl object-cover shadow-lg"
        />
      </div>
    </section>
  )
}
