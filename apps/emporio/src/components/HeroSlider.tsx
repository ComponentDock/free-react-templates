import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

const SLIDE_MS = 5000

/* Reference: section.slider-area .slider-active — two full-width cover
   slides (min-height 700px), each with a centered caption: red Clicker
   Script "Fashion Sale" eyebrow, 55px charcoal "Minimal Menz Style" h1,
   a paragraph and a red pill "Shop Now" button; semi-transparent prev/next
   arrows on the sides. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

  useEffect(() => {
    const id = setInterval(() => setIndex((value) => (value + 1) % count), SLIDE_MS)
    return () => clearInterval(id)
  }, [count])

  const goTo = (next: number) => setIndex(((next % count) + count) % count)

  return (
    <section id="home" aria-label="Featured looks" className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slide.image}
            aria-hidden={slideIndex !== index ? 'true' : undefined}
            className="relative w-full shrink-0"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-[560px] w-full object-cover md:h-[700px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-4 text-center">
                <span className="block font-script text-[50px] leading-none text-brand">
                  {slide.script}
                </span>
                <h1 className="mt-1 font-heading text-[40px] font-medium text-charcoal md:text-[55px]">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-2 max-w-xl text-base text-copy">{slide.copy}</p>
                <a
                  href="#trending"
                  className="mt-6 inline-block rounded-[35px] bg-brand px-8 py-[22px] font-heading text-base font-medium leading-none text-white transition-colors hover:bg-charcoal"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-charcoal transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-charcoal transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, slideIndex) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            aria-current={slideIndex === index ? 'true' : undefined}
            onClick={() => goTo(slideIndex)}
            className={cn(
              'h-2.5 w-2.5 rounded-full border border-charcoal/40 transition-colors',
              slideIndex === index ? 'bg-brand border-brand' : 'bg-transparent',
            )}
          />
        ))}
      </div>
    </section>
  )
}
