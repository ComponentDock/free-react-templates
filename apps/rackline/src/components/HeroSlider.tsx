import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { useParallax } from '../lib/use-parallax'

interface Slide {
  id: string
  headline: string
  subline?: string
  image: string
}

const SLIDES: Slide[] = [
  {
    id: 'hero-1',
    headline: 'Domains that load before you blink',
    subline: 'Managed hosting from $3.99/month',
    image: 'https://picsum.photos/seed/rackline-hero-1/1920/1080',
  },
  {
    id: 'hero-2',
    headline: 'An engineer on the line, at any hour',
    image: 'https://picsum.photos/seed/rackline-hero-2/1920/1080',
  },
]

const ARROW_CLASS =
  'absolute top-1/2 z-[5] grid h-[50px] w-[50px] -translate-y-1/2 place-items-center bg-black/20 text-white transition-colors hover:bg-black focus-visible:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

/**
 * The hero: a 600px photo band with a 40% black wash that slides between two
 * centred headlines — the first pairing a white 80px/300 headline and a 24px
 * sub-line with a lime action beside a white-outlined one, the second carrying
 * the headline and the same action pair. Content of both slides stays in the
 * DOM; the inactive slide is hidden from assistive tech and from the pointer.
 */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const drift = useParallax(0.15)

  function step(delta: number) {
    setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length)
  }

  return (
    <section
      id="home"
      aria-label="Featured hosting"
      aria-roledescription="carousel"
      className="relative min-h-[600px] overflow-hidden bg-ink scroll-mt-[148px] max-[992px]:scroll-mt-[75px]"
    >
      {SLIDES.map((slide, slideIndex) => {
        const isActive = slideIndex === index

        return (
          <div
            key={slide.id}
            data-testid={slide.id}
            aria-hidden={!isActive}
            className={cn(
              'absolute inset-0 flex items-center justify-center bg-cover bg-top transition-opacity duration-500',
              isActive ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: `center ${drift}px`,
            }}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-black/40" />
            <div className="relative mx-auto w-full max-w-[920px] px-5 text-center text-white">
              {slideIndex === 0 ? (
                <h1 className="text-[48px] leading-[1.2] font-light text-white min-[768px]:text-[80px]">
                  {slide.headline}
                </h1>
              ) : (
                <h2 className="text-[48px] leading-[1.2] font-light text-white min-[768px]:text-[80px]">
                  {slide.headline}
                </h2>
              )}

              {slide.subline ? (
                <p className="mt-2 text-[24px] leading-[1.5] text-white">{slide.subline}</p>
              ) : null}

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                <ButtonLink
                  href="#plans"
                  className="rounded-none h-[58px] px-12 text-[16px] font-normal"
                >
                  See the plans
                </ButtonLink>
                <ButtonLink
                  href="#contact"
                  variant="outline"
                  className="rounded-none h-[58px] border border-white bg-transparent px-12 text-[16px] font-normal text-white hover:bg-white/10 hover:text-white"
                >
                  Get in touch
                </ButtonLink>
              </div>
            </div>
          </div>
        )
      })}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => step(-1)}
        className={cn(ARROW_CLASS, 'left-[10px]')}
      >
        <ChevronLeft aria-hidden="true" className="h-[25px] w-[25px]" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => step(1)}
        className={cn(ARROW_CLASS, 'right-[10px]')}
      >
        <ChevronRight aria-hidden="true" className="h-[25px] w-[25px]" />
      </button>
    </section>
  )
}
