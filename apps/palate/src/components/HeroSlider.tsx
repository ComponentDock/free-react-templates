import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  HERO_BUTTON_OUTLINE,
  HERO_BUTTON_PRIMARY,
  HERO_SLIDES,
  HERO_SLIDE_INTERVAL_MS,
} from '../data'
import { BTN_PRIMARY, BTN_WHITE } from '../buttons'

/* section.home-slider — 750px-tall hero slider (NOT 100vh), three cover
   photo slides under a 50% black overlay; centered Monoton display h1
   (5vw uppercase) + "Order Now" (orange) / "View Menu" (white) buttons;
   white dot indicators at bottom 40px. Auto-advances every 5s, wraps. */
export function HeroSlider() {
  const [active, setActive] = useState(0)
  const slideCount = HERO_SLIDES.length

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slideCount)
    }, HERO_SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slideCount])

  return (
    <section id="home" aria-label="Featured dishes" className="relative h-[750px] overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.image}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slideCount}`}
          aria-hidden={index !== active}
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-opacity duration-500',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          {/* 50% black overlay. */}
          <div aria-hidden="true" className="absolute inset-0 bg-black/50" />

          <div className="relative z-[1] flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-display max-w-[900px] text-[5vw] leading-[1.5] tracking-[1px] text-white uppercase max-md:text-4xl">
              {slide.headline}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#menu" className={BTN_PRIMARY}>
                {HERO_BUTTON_PRIMARY}
              </a>
              <a href="#menu" className={BTN_WHITE}>
                {HERO_BUTTON_OUTLINE}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* White dot indicators (bottom 40px). */}
      <div className="absolute bottom-10 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2.5">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
            className={cn(
              'flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-full border-2 border-white/50',
              index === active && 'border-white',
            )}
          >
            <span
              aria-hidden="true"
              className={cn('h-3 w-3 rounded-full bg-white/50', index === active && 'bg-white')}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
