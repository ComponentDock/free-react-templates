import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Badge, ButtonLink, cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl } from '../data'

const slideCount = heroSlides.length

export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]!

  const goTo = (index: number) => setActive((index + slideCount) % slideCount)
  const next = () => setActive((value) => (value + 1) % slideCount)
  const prev = () => setActive((value) => (value - 1 + slideCount) % slideCount)

  return (
    <section aria-label="Featured posts" className="relative min-h-[550px] w-full overflow-hidden">
      <img
        src={imgUrl(slide.seed, 1600, 900)}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex min-h-[550px] items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="max-w-xl rounded-[3px] bg-black/60 p-6 text-white sm:p-8">
            <Badge className="rounded-sm bg-brand px-2.5 py-1 text-xs font-medium text-white">
              {slide.category}
            </Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[0.08em] text-white sm:text-4xl">
              {slide.title}
            </h2>
            <p className="mt-3 text-sm text-gray-300">{slide.date}</p>
            <ButtonLink
              href="#featured"
              className="mt-6 rounded-sm border border-brand bg-transparent px-4 py-2 text-sm font-medium text-brand hover:bg-brand hover:text-white"
            >
              Read More
            </ButtonLink>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-brand"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-brand"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => goTo(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              index === active ? 'bg-brand' : 'bg-white/60 hover:bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
