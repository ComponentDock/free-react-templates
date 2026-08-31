import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sliderItems } from '../data'

export function SliderSection() {
  const [startIndex, setStartIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const visibleCount = 3
  const maxIndex = Math.max(0, sliderItems.length - visibleCount)

  const goNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const goPrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section id="slides" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[28px] font-semibold text-slate-dark">Explore Our Work</h2>
          <p className="text-sm text-gray-500">
            Browse through our latest projects and collaborations
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goPrev}
            disabled={startIndex === 0}
            aria-label="Previous"
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 md:-left-6"
          >
            <ChevronLeft className="h-5 w-5 text-slate-dark" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next"
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 md:-right-6"
          >
            <ChevronRight className="h-5 w-5 text-slate-dark" />
          </button>

          {/* Slider track */}
          <div ref={scrollRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
            >
              {sliderItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-3 md:w-1/3"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md">
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-slate-dark">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
