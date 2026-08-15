import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { goToSlideLabel, heroAutoplayMs, heroLabel, heroSlides } from '../data'

const slideCount = heroSlides.length

export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), heroAutoplayMs)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" aria-label={heroLabel} className="relative overflow-hidden">
      <div
        data-track
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(${-index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.image}
            data-slide
            aria-hidden={i !== index}
            className="relative w-full shrink-0"
          >
            <img
              src={slide.image}
              alt=""
              className="h-[600px] w-full object-cover object-top lg:h-[804px]"
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-[1200px] px-4 text-center">
                <h1 className="text-5xl font-bold text-white lg:text-[96px] lg:leading-none">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90 lg:mt-[15px] lg:text-xl">
                  {slide.blurb}
                </p>
                <a
                  href={slide.ctaHref}
                  className="mt-9 inline-flex min-w-[164px] items-center justify-center rounded-full bg-brand px-[47px] py-[21px] text-sm font-semibold uppercase leading-none text-ink transition-opacity hover:opacity-90 lg:mt-[35px]"
                >
                  {slide.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-[35px] bottom-5 flex items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={goToSlideLabel(i)}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              'h-[9px] w-[9px] rounded-full bg-dot transition-colors hover:bg-brand',
              i === index && 'bg-brand',
            )}
          />
        ))}
      </div>
    </section>
  )
}
