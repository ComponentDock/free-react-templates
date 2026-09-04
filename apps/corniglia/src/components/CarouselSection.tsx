import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text decided to leave for the far World of Grammar.',
    author: 'Ryan Peters',
  },
  {
    quote:
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli who would blind her with request.',
    author: 'Sarah Mitchell',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
    author: 'James Crawford',
  },
  {
    quote:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone and feel the charm of existence.',
    author: 'Emily Watson',
  },
]

export function CarouselSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [])

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  // Autoplay
  useEffect(() => {
    const clear = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
    if (isPaused) {
      clear()
      return
    }
    intervalRef.current = setInterval(next, 3000)
    return clear
  }, [next, isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  return (
    <section
      className="bg-slate-dark py-[7em]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <div className="mx-auto max-w-[1140px] px-4">
        <h2 className="my-5 text-center font-sans text-[20px] font-normal text-white">
          Carousel #19
        </h2>

        <div className="relative">
          {/* Slide */}
          <blockquote className="mx-auto max-w-[799px]">
            <p className="font-serif text-[24px] font-light leading-[1.5] text-white">
              {slides[current]!.quote}
            </p>
            <p className="mt-4 text-[14px] italic text-[#ccc]">
              <cite className="font-serif not-italic">— {slides[current]!.author}</cite>
            </p>
          </blockquote>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-5 top-1/2 z-[92] -translate-y-1/2 text-white opacity-50 transition-opacity hover:opacity-100 focus:opacity-100 max-md:hidden"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-5 top-1/2 z-[92] -translate-y-1/2 text-white opacity-50 transition-opacity hover:opacity-100 focus:opacity-100 max-md:hidden"
          >
            <ChevronRight size={40} />
          </button>

          {/* Dots */}
          <div className="absolute -bottom-20 left-1/2 flex -translate-x-1/2 gap-1">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                className={`h-[7px] w-[7px] rounded-full transition-colors ${
                  i === current ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
