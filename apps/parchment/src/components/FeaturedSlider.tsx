import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  authorAvatar,
  featuredSlides,
  goToSlideLabel,
  imgUrl,
  nextSlideLabel,
  previousSlideLabel,
  sliderLabel,
} from '../data'

/* Full-width featured slider (reference `div.featured-slider`, slick): three
   600px slides with a 40% black overlay, centered white serif headline,
   category label, avatar + author/date meta. State-based carousel with dot
   indicators and big circular prev/next arrows — no new dependencies. */
export function FeaturedSlider() {
  const [index, setIndex] = useState(0)
  const count = featuredSlides.length

  const goTo = (target: number) => {
    setIndex(((target % count) + count) % count)
  }

  const slide = featuredSlides[index]!

  return (
    <section aria-label={sliderLabel} className="bg-section">
      <div className="relative h-[372px] overflow-hidden md:h-[600px]">
        <img
          src={imgUrl(slide.seed, 1600, 900)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center md:px-[10%]">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold tracking-[.3rem] text-white uppercase">
              {slide.category}
            </p>
            <h1 className="font-heading text-[2.2rem] leading-tight text-white md:text-4xl lg:text-[4.2rem]">
              {slide.title}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={authorAvatar}
                alt=""
                className="h-[42px] w-[42px] rounded-full object-cover"
              />
              <p className="text-base text-white/50">
                {slide.author} • {slide.date}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label={previousSlideLabel}
          onClick={() => goTo(index - 1)}
          className="absolute top-1/2 left-4 z-20 flex h-[70px] w-[70px] -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_2px_10px_rgba(0,0,0,.2)] transition-transform hover:scale-110 md:left-8"
        >
          <ChevronLeft className="h-8 w-8" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={nextSlideLabel}
          onClick={() => goTo(index + 1)}
          className="absolute top-1/2 right-4 z-20 flex h-[70px] w-[70px] -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_2px_10px_rgba(0,0,0,.2)] transition-transform hover:scale-110 md:right-8"
        >
          <ChevronRight className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      {/* Slick-style dots: 10px black circles, active = transparent with a
          3px black ring, centered below the slide on the gray section. */}
      <div className="flex items-center justify-center gap-2.5 pt-8 pb-14">
        {featuredSlides.map((s, i) => (
          <button
            key={s.seed}
            type="button"
            aria-label={goToSlideLabel(i + 1)}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full border-2 border-black transition-all',
              i === index ? 'border-[3px] bg-transparent' : 'bg-black',
            )}
          />
        ))}
      </div>
    </section>
  )
}
