import { useEffect, useState } from 'react'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import {
  heroAutoAdvanceMs,
  heroNextLabel,
  heroPrevLabel,
  heroReadMoreLabel,
  heroSlides,
  imgUrl,
} from '../data'
import { CategoryPill } from './CategoryPill'

const blogButtonClasses =
  'inline-flex h-[38px] items-center gap-2 rounded-[5px] border border-line bg-soft px-7 text-sm text-ink transition-colors hover:bg-accent hover:text-white'

/** Hero banner: full-width photo with an auto-advancing featured-post slider
 *  overlaid on the right (white card + black category pill). */
export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % heroSlides.length),
      heroAutoAdvanceMs,
    )
    return () => window.clearInterval(id)
  }, [])

  const goTo = (next: number) => {
    const length = heroSlides.length
    setIndex(((next % length) + length) % length)
  }

  // index is always kept in [0, heroSlides.length) by the modulo arithmetic
  const slide = heroSlides[index]!

  return (
    <section
      aria-label="Featured posts"
      className="bg-soft bg-cover bg-center pt-36 lg:pt-40"
      style={{ backgroundImage: `url(${imgUrl('glyph-hero', 1600, 700)})` }}
    >
      <div className="mx-auto flex max-w-6xl justify-end px-4 pb-20 lg:px-6">
        <div className="max-w-xl bg-white p-8 shadow-[0px_10px_20px_0px_rgba(153,153,153,0.1)] md:p-12">
          <div aria-live="polite">
            <CategoryPill label={slide.category} />
            <div className="mt-5 flex items-center gap-5 text-xs text-meta">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                {slide.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                {slide.comments}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-[30px] text-ink">{slide.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-body">{slide.excerpt}</p>
            <a href="#top" className={blogButtonClasses + ' mt-7'}>
              {heroReadMoreLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label={heroPrevLabel}
              className="flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors hover:bg-accent hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label={heroNextLabel}
              className="flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors hover:bg-accent hover:text-white"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
