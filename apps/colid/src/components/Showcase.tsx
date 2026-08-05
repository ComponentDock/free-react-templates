import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    title: 'Easy to Build',
    seed: 'colid-showcase-1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
  {
    title: 'Easy to Use',
    seed: 'colid-showcase-2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
  },
] as const

export function Showcase() {
  const [index, setIndex] = useState(0)
  const count = slides.length

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-300 to-primary-500 py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative">
          {slides.map((slide, i) =>
            i === index ? (
              <div key={slide.seed} className="grid items-center gap-10 lg:grid-cols-2">
                <img
                  src={`https://picsum.photos/seed/${slide.seed}/640/480`}
                  alt={`${slide.title} showcase`}
                  className="w-full rounded-lg object-cover shadow-xl"
                />
                <div>
                  <h3 className="text-3xl font-bold">{slide.title}</h3>
                  <p className="mt-5 leading-relaxed text-white/85">{slide.description}</p>
                  <a
                    href="#features"
                    className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-600 hover:text-white"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ) : null,
          )}

          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Previous showcase slide"
            className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next showcase slide"
            className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white transition-colors hover:bg-black"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.seed}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to showcase slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
