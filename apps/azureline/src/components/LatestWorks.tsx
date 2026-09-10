import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: 'https://picsum.photos/seed/azureline-work1/800/500', alt: 'Project 1' },
  { src: 'https://picsum.photos/seed/azureline-work2/800/500', alt: 'Project 2' },
  { src: 'https://picsum.photos/seed/azureline-work3/800/500', alt: 'Project 3' },
]

export function LatestWorks() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  const slide = slides[current]!

  return (
    <section id="work" className="bg-white pb-24 pt-24 text-center">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-3xl font-extralight text-gray-900 sm:text-4xl">
          Some Of Our <span className="font-semibold">Latest Works</span>
        </h2>
        <p className="mb-8 text-sm text-gray-500">
          A showcase of our recent design and development projects.
        </p>
        <div className="relative mx-auto max-w-3xl">
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full border-[12px] border-white object-cover shadow-md sm:border-[20px]"
            loading="lazy"
          />
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-md transition-colors hover:bg-accent-300 hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 shadow-md transition-colors hover:bg-accent-300 hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
