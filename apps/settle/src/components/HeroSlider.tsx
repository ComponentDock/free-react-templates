import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { HERO_BUY_NOW, HERO_LEAD, HERO_SLIDES } from '../data'

/* banner_part — pale cyan (#ecfdff) split hero: headline slider on the
   left (4 alternating sofa headlines), lorem lead, pink "Buy Now" pill;
   floating seeded sofa image on the right; prev/next controls. */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slideCount = HERO_SLIDES.length

  const previous = () => setActive((current) => (current - 1 + slideCount) % slideCount)
  const next = () => setActive((current) => (current + 1) % slideCount)

  const slide = HERO_SLIDES[active]!

  return (
    <section id="home" aria-label="Featured products" className="bg-hero py-16 dark:bg-ink/90">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl leading-tight font-bold text-ink dark:text-white lg:text-5xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-[480px] text-[15px] leading-7 text-body dark:text-white/70">
            {HERO_LEAD}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <ButtonLink
              href="#shop"
              className="rounded-[5px] px-8 py-4 text-[14px] font-medium tracking-[0.1em] uppercase"
            >
              {HERO_BUY_NOW}
            </ButtonLink>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={previous}
                className="cursor-pointer rounded-full border border-ink/20 p-2 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-white"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={next}
                className="cursor-pointer rounded-full border border-ink/20 p-2 text-ink transition-colors hover:border-brand hover:text-brand dark:border-white/30 dark:text-white"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src={`https://picsum.photos/seed/${slide.seed}/640/640`}
            alt={`${slide.headline} product shot`}
            className="mx-auto aspect-square w-full max-w-[520px] rounded-[5px] object-cover shadow-[0_20px_60px_-15px_rgba(42,42,42,.35)]"
          />
        </div>
      </div>
    </section>
  )
}
