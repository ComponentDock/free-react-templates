import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { heroSlides, postImage } from '../data'

const SLIDE_INTERVAL = 5000

export function Hero() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const slide = heroSlides[index]!

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [index, count])

  const goPrev = () => setIndex((current) => (current - 1 + count) % count)
  const goNext = () => setIndex((current) => (current + 1) % count)

  return (
    <section aria-label="Featured posts carousel" className="px-0 sm:px-7">
      <div className="relative overflow-hidden">
        <img
          src={postImage(slide.seed, 1200, 700)}
          alt={slide.alt}
          className="h-[420px] w-full object-cover sm:h-[600px]"
        />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="border border-white p-1.5">
            <div className="border border-white bg-white px-8 py-6 text-center sm:px-14 sm:py-8">
              <p className="text-xs font-semibold tracking-widest text-brand uppercase">
                {slide.tag}
              </p>
              <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{slide.title}</h2>
              <p className="mt-3 text-xs font-semibold tracking-widest text-meta uppercase">
                <span>{slide.date}</span>
                <span className="mx-2">/</span>
                <span>By {slide.author}</span>
              </p>
            </div>
          </div>
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={goPrev}
          className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-brand px-3 py-1.5 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-black"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Prev
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={goNext}
          className="absolute right-5 bottom-5 flex items-center gap-1.5 bg-brand px-3 py-1.5 text-xs font-semibold tracking-widest text-white uppercase transition-colors hover:bg-black"
        >
          Next
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}
