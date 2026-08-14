import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { ctaSlides, ctaPanel } from '../data'

/* Big-image CTA: a three-photo carousel with prev/next arrows and a pink
 * caption panel absolutely positioned over its bottom-right corner; the
 * panel stacks below the image on mobile (source .cta-big-image + .img-box). */
export function CtaBigImage() {
  const [index, setIndex] = useState(0)
  const count = ctaSlides.length

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count)
  }

  return (
    <section id="about" data-testid="cta" className="relative">
      <div className="relative h-[420px] overflow-hidden md:h-[520px]">
        {ctaSlides.map((slide, slideIndex) => (
          <div
            key={slide.image}
            aria-hidden={slideIndex !== index}
            className={cn(
              'absolute inset-0 transition-opacity duration-700',
              slideIndex === index ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img src={slide.image} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-brand"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-brand"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative mx-4 -mt-16 bg-brand p-8 md:absolute md:bottom-[-10%] md:right-[10%] md:z-10 md:mx-0 md:mt-0 md:max-w-[550px] md:p-12">
        <span className="text-[13px] uppercase tracking-[0.1em] text-white/70">
          {ctaPanel.eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{ctaPanel.headline}</h2>
        <p className="mt-4 text-base font-light text-white/90">{ctaPanel.subtext}</p>
        <ButtonLink
          href={ctaPanel.readMoreHref}
          className="mt-6 rounded-full bg-royal px-8 py-3 text-white transition-colors hover:bg-royal/90"
        >
          {ctaPanel.readMoreLabel}
        </ButtonLink>
      </div>
    </section>
  )
}
