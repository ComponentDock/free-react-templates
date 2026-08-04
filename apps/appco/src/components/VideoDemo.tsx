import { Play } from 'lucide-react'

const screenshots = [
  { src: 'https://picsum.photos/seed/appco-shot-1/600/420', alt: 'Appco dashboard screenshot' },
  { src: 'https://picsum.photos/seed/appco-shot-2/600/420', alt: 'Appco analytics screenshot' },
  { src: 'https://picsum.photos/seed/appco-shot-3/600/420', alt: 'Appco messaging screenshot' },
] as const

export function VideoDemo() {
  return (
    <section id="video" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Demo
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            See Appco in Action
          </h2>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              aria-label="Play the Appco demo video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-105 dark:bg-primary-500"
            >
              <Play className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {screenshots.map((shot) => (
            <img
              key={shot.src}
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
