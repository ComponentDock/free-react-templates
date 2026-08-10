import { useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, similarPosts } from '../data'

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      6000,
    )
    return () => window.clearInterval(id)
  }, [])

  const goTo = (index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[active]!
  const nextSlide = heroSlides[(active + 1) % heroSlides.length]!

  return (
    <section
      aria-label="Featured stories"
      id="home"
      className="relative h-screen min-h-[560px] w-full overflow-hidden bg-black"
    >
      {heroSlides.map((item, index) => (
        <div
          key={item.image}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img src={item.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </div>
      ))}

      <div className="absolute inset-x-0 top-[45%] mx-auto w-full max-w-3xl -translate-y-1/2 px-6 text-center">
        <span className="inline-flex h-7 items-center rounded-[14px] bg-pill px-5 font-display text-xs font-medium uppercase tracking-wide text-white">
          {slide.category}
        </span>
        <h1 className="mt-5 font-sans text-3xl font-semibold leading-[1.27] text-white sm:text-4xl">
          {slide.title}
        </h1>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 font-display text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          Continue Reading
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-6 sm:px-10 lg:px-16">
          {similarPosts.map((title) => (
            <a key={title} href="#" className="group px-4 py-3 transition-colors hover:bg-white">
              <p className="line-clamp-2 text-sm font-medium text-white/70 transition-colors group-hover:text-black">
                {title}
              </p>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 hidden w-1/4 lg:block">
        <a
          href="#"
          className="group flex h-full flex-col justify-between p-8 transition-colors hover:bg-black/50"
        >
          <span className="font-display text-xs font-bold uppercase tracking-wide text-white">
            next
          </span>
          <p className="line-clamp-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
            {nextSlide.title}
          </p>
        </a>
      </div>

      <div className="absolute bottom-44 left-6 z-10 flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(active - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-pill"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(active + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-pill"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <ol className="absolute right-6 bottom-44 z-10 flex items-center gap-2">
        {heroSlides.map((item, index) => (
          <li key={item.image}>
            <button
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={cn(
                'h-2.5 w-2.5 rounded-full bg-white/40 transition-colors hover:bg-white',
                index === active && 'bg-white',
              )}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}
