import { useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, portfolioHref } from '../data'
import { slideIndex } from '../carousel'

/** Horizontal hero photo track: full-height slides with a white caption box
 *  (title + category + arrow link) at the bottom-left, a free-scrolling strip
 *  on desktop and prev/next circular controls on small screens. */
export function HeroSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const go = (delta: number) => {
    const next = slideIndex(index, heroSlides.length, delta)
    setIndex(next)
    trackRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'start' })
  }

  return (
    <section aria-label="Portfolio photo slider" className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory overflow-x-auto pb-[50px] [scrollbar-width:none]"
      >
        {heroSlides.map((slide, slidePosition) => (
          <article
            key={`${slide.title}-${slidePosition}`}
            aria-current={slidePosition === index ? 'true' : undefined}
            className="relative mr-[50px] h-[420px] w-[85vw] shrink-0 snap-start md:h-[640px] md:w-[540px] lg:h-[750px] lg:w-[680px] last:mr-0"
          >
            <div
              role="img"
              aria-label={`${slide.title} — ${slide.category}`}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute bottom-0 left-0 w-[221px] bg-paper pb-[10px] pt-[44px]">
              <h5 className="text-[18px] font-bold text-ink">{slide.title}</h5>
              <p className="mb-[5px] text-[13px] text-dim">{slide.category}</p>
              <a
                href={portfolioHref}
                aria-label={`View ${slide.title}`}
                className="inline-block text-ink transition-opacity hover:opacity-70"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-[15px] pb-[50px] md:hidden">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-80"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-80"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
