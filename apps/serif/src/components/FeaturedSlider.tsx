import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  featuredPosts,
  nextSlideLabel,
  prevSlideLabel,
  sliderAutoplayMs,
  sliderLabel,
} from '../data'

/* Owl-carousel equivalent: a translateX track showing 3 of 6 cards at a
   time, auto-advancing every 5s, with notch prev/next arrows. */
const visibleCount = 3
const maxIndex = featuredPosts.length - visibleCount

export function FeaturedSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % (maxIndex + 1))
    }, sliderAutoplayMs)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((current) => (current + 1) % (maxIndex + 1))
  const prev = () => setIndex((current) => (current - 1 + (maxIndex + 1)) % (maxIndex + 1))

  return (
    <section aria-label={sliderLabel} className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8">
      <div className="overflow-hidden">
        <div
          data-slider-track
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {featuredPosts.map((post) => (
            <article key={post.seed} className="w-1/3 shrink-0 border-0 px-3 text-center sm:px-4">
              <img
                src={`https://picsum.photos/seed/${post.seed}/560/420`}
                alt=""
                className="w-full object-cover"
              />
              <div className="px-4 pb-2 pt-[30px]">
                {/* blog__slide__label — black uppercase chip, orange text. */}
                <span className="inline-block bg-coal px-10 py-1 text-[13px] font-semibold uppercase text-brand">
                  {post.label}
                </span>
                <h3 className="mt-[18px] font-serif text-xl leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 text-[15px] text-meta">{post.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Notch arrows — visible on lg+, sit at the sides of the slider. */}
      <button
        type="button"
        aria-label={prevSlideLabel}
        onClick={prev}
        className="absolute -left-14 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center bg-arrow text-white shadow-sm transition-colors hover:bg-coal lg:flex"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={next}
        className="absolute -right-14 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center bg-arrow text-white shadow-sm transition-colors hover:bg-coal lg:flex"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </section>
  )
}
