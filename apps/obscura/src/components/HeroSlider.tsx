import { useEffect, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { contactWidget, heroSlides, readMoreLabel } from '../data'
import { SiteButton } from './SiteButton'

const AUTOPLAY_MS = 5000

/* Full-screen photo hero slider (the reference's #hero-section): two
   autoplaying slides with a cursive script line over a 60px heading, a
   corner-bracket Read More button, a "1/2" counter and arrows on the right,
   a Discover hint bottom-center, and the Contact me avatar widget
   bottom-left. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const slideCount = heroSlides.length

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % slideCount),
      AUTOPLAY_MS,
    )
    return () => window.clearInterval(timer)
  }, [slideCount])

  const goTo = (next: number) => setIndex((next + slideCount) % slideCount)

  return (
    <section id="home" className="relative h-[919px] overflow-hidden bg-black">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.heading}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full items-center justify-center px-6 text-center">
            <div>
              <h1 className="font-script text-4xl text-white lg:text-5xl">{slide.script}</h1>
              <h2 className="mt-6 text-5xl font-semibold text-white lg:text-6xl">
                {slide.heading}
              </h2>
              <div className="mt-10">
                <SiteButton href="#about">{readMoreLabel}</SiteButton>
              </div>
            </div>
          </div>
        </div>
      ))}

      <p
        aria-label={`Slide ${index + 1} of ${slideCount}`}
        className="absolute right-[101px] top-1/2 -translate-y-1/2 text-base font-medium text-white"
      >
        {index + 1} / {slideCount}
      </p>

      <div className="absolute right-[52px] top-1/2 flex -translate-y-1/2 flex-col gap-5">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition-colors hover:border-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/50 text-white transition-colors hover:border-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="absolute bottom-[37px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5">
        <h6 className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">Discover</h6>
        <ChevronDown className="h-5 w-5 text-white" aria-hidden="true" />
      </div>

      <div className="absolute bottom-[40px] left-[42px] flex items-center gap-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white [writing-mode:vertical-rl]">
          {contactWidget.label}
        </p>
        <span aria-hidden="true" className="h-[135px] w-px bg-white" />
        <img
          src={contactWidget.avatar}
          alt="Contact"
          className="h-[71px] w-[71px] rounded-full object-cover"
        />
      </div>
    </section>
  )
}
