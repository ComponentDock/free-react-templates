import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const screens = [
  { name: 'Colid app screen 1', seed: 'colid-screen-1' },
  { name: 'Colid app screen 2', seed: 'colid-screen-2' },
  { name: 'Colid app screen 3', seed: 'colid-screen-3' },
  { name: 'Colid app screen 4', seed: 'colid-screen-4' },
  { name: 'Colid app screen 5', seed: 'colid-screen-5' },
] as const

export function Hero() {
  const [index, setIndex] = useState(0)
  const count = screens.length

  return (
    <section id="home" className="relative overflow-hidden bg-night">
      <img
        src="https://picsum.photos/seed/colid-hero/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-300 to-primary-500 opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            It&apos;s all about Promoting your Business
          </h1>
          <p className="mt-6 leading-relaxed text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ex inventore vel error
            quibusdam animi fugiat, doloribus dolores consectetur nulla deleniti sint blanditiis
            quod debitis quis vitae officiis tempora numquam.
          </p>
          <a
            href="https://vimeo.com/317571768"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-primary-500 shadow-lg transition-colors hover:bg-primary-600 hover:text-white"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            Watch video
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="rounded-3xl border-8 border-gray-800 bg-gray-900 p-2 shadow-2xl">
            {screens.map((screen, i) =>
              i === index ? (
                <img
                  key={screen.seed}
                  src={`https://picsum.photos/seed/${screen.seed}/360/640`}
                  alt={screen.name}
                  className="aspect-[9/16] w-full rounded-2xl object-cover"
                />
              ) : null,
            )}
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Previous screen"
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white hover:text-primary-600"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next screen"
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition-colors hover:bg-white hover:text-primary-600"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {screens.map((screen, i) => (
              <button
                key={screen.seed}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to screen ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
