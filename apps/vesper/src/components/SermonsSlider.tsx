import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Play } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  {
    title: 'Let the Sunset Inspire You',
    image: 'https://picsum.photos/seed/vesper-3/800/500',
  },
  {
    title: 'Developing Spiritual Mentality',
    image: 'https://picsum.photos/seed/vesper-4/800/500',
  },
  {
    title: 'Let the Bible Motivate You',
    image: 'https://picsum.photos/seed/vesper-5/800/500',
  },
] as const

export function SermonsSlider() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]!

  return (
    <section id="sermons" className="bg-section-bg py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Vesper Church Sermons
        </h2>
        <div className="mt-12 overflow-hidden rounded-lg bg-white shadow-sm">
          <img src={slide.image} alt="" className="h-64 w-full object-cover sm:h-80" />
          <div className="p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-900">{slide.title}</h3>
            <p className="mt-3 text-sm text-gray-500">Services · by pastor · March 15, 2030</p>
            <p className="mt-1 text-sm font-semibold text-gray-700">by pastor: Jerry Simon</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#sermons"
                className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Watch
              </a>
              <a
                href="#sermons"
                className="inline-flex items-center gap-2 rounded border border-gold px-6 py-3 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold hover:text-white"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIndex((value) => (value - 1 + slides.length) % slides.length)}
            aria-label="Previous sermon"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gold hover:text-gold-dark"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-gold' : 'bg-gray-300 hover:bg-gray-400',
                )}
              >
                <span className="sr-only">{s.title}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setIndex((value) => (value + 1) % slides.length)}
            aria-label="Next sermon"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-gold hover:text-gold-dark"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
