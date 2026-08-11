import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  bannerAutoplayMs,
  bannerLabel,
  bannerSlides,
  nextSlideLabel,
  prevSlideLabel,
  readMoreLabel,
  slideIndicatorLabel,
} from '../data'
import { ButtonLink, cn } from '@free-react-templates/ui'

export function BannerSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % bannerSlides.length)
    }, bannerAutoplayMs)
    return () => window.clearInterval(timer)
  }, [])

  const goTo = (index: number) => {
    setActive((index + bannerSlides.length) % bannerSlides.length)
  }

  return (
    <section
      aria-label={bannerLabel}
      className="relative h-[50vh] min-h-[360px] w-full overflow-hidden"
    >
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.seed}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1600/900`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      {/* Dark overlay rgba(0,0,0,0.25) over the image. */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div key={bannerSlides[active]?.seed} className="text-center text-white">
          <span className="inline-block border border-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em]">
            {bannerSlides[active]?.category}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold uppercase tracking-wide md:text-[34px]">
            {bannerSlides[active]?.title}
          </h2>
          <ButtonLink
            href="#"
            className="mt-6 rounded-none bg-white px-4 text-xs font-bold uppercase text-ink transition-colors hover:bg-brand hover:text-white"
          >
            {readMoreLabel}
          </ButtonLink>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">
        {bannerSlides.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={slideIndicatorLabel(index)}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-white' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>

      <button
        type="button"
        aria-label={prevSlideLabel}
        onClick={() => goTo(active - 1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-brand"
      >
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label={nextSlideLabel}
        onClick={() => goTo(active + 1)}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-brand"
      >
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      </button>
    </section>
  )
}
