import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { slider } from '../data'

const SLIDE_MS = 4000

/* Reference: section.slider-section — centered 70px heading + lead, then
   the owl-carousel: six full-bleed slides (height calc(100vh - 117px),
   min 700px), inactive slides dimmed to opacity .4, white prev/next arrows
   that fade in on hover, and circular dot indicators near the bottom. */
export function Slider() {
  const [index, setIndex] = useState(0)
  const count = slider.slides.length

  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % count), SLIDE_MS)
    return () => clearInterval(id)
  }, [count])

  const goTo = (next: number) => setIndex(((next % count) + count) % count)

  return (
    <section aria-label="Tour gallery" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-[48px] text-ink lg:text-[70px]">{slider.heading}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center">{slider.lead}</p>
      </div>
      <div className="group relative mt-16 overflow-hidden">
        <div
          role="list"
          aria-label="Tour photo slides"
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slider.slides.map((slide, slideIndex) => (
            <div
              key={slide.photo}
              role="listitem"
              className={cn('w-full shrink-0', slideIndex !== index && 'opacity-40')}
            >
              <img
                src={slide.photo}
                alt={slide.alt}
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[calc(100vh-117px)] lg:min-h-[700px]"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute top-1/2 left-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white/40"
        >
          <ChevronLeft size={28} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute top-1/2 right-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white/40"
        >
          <ChevronRight size={28} aria-hidden="true" />
        </button>
        <div className="absolute bottom-[100px] left-1/2 z-10 flex -translate-x-1/2 gap-[10px]">
          {slider.slides.map((slide, slideIndex) => (
            <button
              key={slide.photo}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              aria-current={slideIndex === index ? 'true' : undefined}
              onClick={() => goTo(slideIndex)}
              className={cn(
                'h-2.5 w-2.5 rounded-full border-2 border-white/80 transition-colors',
                slideIndex === index ? 'bg-white' : 'bg-transparent',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
