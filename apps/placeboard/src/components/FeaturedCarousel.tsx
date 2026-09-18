import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const slides = [
  { name: 'Maldives', seed: 'placeboard-feat-1' },
  { name: 'Swiss Alps', seed: 'placeboard-feat-2' },
  { name: 'Machu Picchu', seed: 'placeboard-feat-3' },
  { name: 'Northern Lights', seed: 'placeboard-feat-4' },
  { name: 'Great Barrier Reef', seed: 'placeboard-feat-5' },
]

export function FeaturedCarousel() {
  const [current, setCurrent] = useState(0)
  const visibleCount = 3

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - visibleCount : c - 1))
  const next = () => setCurrent((c) => (c >= slides.length - visibleCount ? 0 : c + 1))

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: text + arrows */}
          <div className="flex flex-col justify-center">
            <h2
              className="mb-4 text-3xl font-bold text-heading"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              More Featured Destinations
            </h2>
            <p className="mb-6 text-body">Hand-picked destinations for unforgettable experiences</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center bg-primary text-white transition-colors hover:bg-primary-hover"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center bg-primary text-white transition-colors hover:bg-primary-hover"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right: carousel */}
          <div className="overflow-hidden lg:col-span-2">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
            >
              {slides.map((slide) => (
                <a
                  key={slide.name}
                  href="#"
                  className={cn(
                    'group relative block h-64 flex-shrink-0 overflow-hidden bg-cover bg-center',
                    `w-[calc(100%/${visibleCount}]`,
                  )}
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${slide.seed}/600/400)`,
                    minWidth: `${100 / visibleCount}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                    <MapPin className="mx-auto mb-1 h-5 w-5 text-white" />
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {slide.name}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
