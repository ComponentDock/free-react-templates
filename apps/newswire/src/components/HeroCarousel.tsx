import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides, imgUrl } from '../data'
import { PostMeta } from './PostMeta'

const caption = "Editor's Pick"

/** Lightweight index-based hero carousel (reference: owl-carousel hero-slide). */
export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = heroSlides[activeIndex]!
  const slideCount = heroSlides.length

  const goTo = (index: number) => {
    setActiveIndex(((index % slideCount) + slideCount) % slideCount)
  }

  return (
    <section aria-label="Featured stories" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        <div className="grid items-stretch bg-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[400px]">
            <img
              src={imgUrl(slide.seed, 900, 600)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 lg:p-12">
            <p className="text-[0.9rem] uppercase tracking-[0.1em] text-accent">{caption}</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-ink lg:text-3xl">
              <a href="#top" className="transition-colors hover:text-accent">
                {slide.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-body">{slide.excerpt}</p>
            <div className="mt-4">
              <PostMeta post={slide} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {heroSlides.map((item, index) => (
              <button
                key={item.seed}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  'h-1 w-6 rounded-none transition-colors',
                  index === activeIndex ? 'bg-accent' : 'bg-black/20 hover:bg-black/40',
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous slide"
              className="rounded-full p-2 text-ink transition-colors hover:bg-soft hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next slide"
              className="rounded-full p-2 text-ink transition-colors hover:bg-soft hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
