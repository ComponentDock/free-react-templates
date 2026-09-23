import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'https://picsum.photos/seed/bookcraft-screenshot-1/800/500',
  'https://picsum.photos/seed/bookcraft-screenshot-2/800/500',
  'https://picsum.photos/seed/bookcraft-screenshot-3/800/500',
  'https://picsum.photos/seed/bookcraft-screenshot-4/800/500',
  'https://picsum.photos/seed/bookcraft-screenshot-5/800/500',
]

export function Screenshot() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 font-[Oswald] text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
            Book Screenshots
          </h2>
          <p className="mb-4 text-gray-500">
            Preview the beautiful interior layout and design of this book.
          </p>
          <div className="flex items-center gap-3 text-sm">
            <button
              type="button"
              onClick={prev}
              className="font-medium text-blue-primary hover:underline"
            >
              Prev
            </button>
            <span className="text-gray-400">/</span>
            <button
              type="button"
              onClick={next}
              className="font-medium text-blue-primary hover:underline"
            >
              Next
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <img
            src={images[current]}
            alt={`Book screenshot ${current + 1}`}
            className="w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
