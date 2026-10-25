import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { EVENT, HERO_SLIDES } from '../content'
import { prefersReducedMotion } from '../lib/motion'
import { Duotone } from './ui'

const SLIDE_MS = 1200

/**
 * 976px full-bleed band: four neutral photos under one magenta→indigo wash at
 * `.75`, the 36px date kicker with superscript ordinals, the page's single `h1`
 * at 100px/900 and the venue line, with the vertical rail of 11px ring dots
 * pinned to the right edge.
 */
export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [plain] = useState(prefersReducedMotion)

  useEffect(() => {
    if (plain || paused) {
      return undefined
    }
    const id = setInterval(() => {
      setActive((index) => (index + 1) % HERO_SLIDES.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [plain, paused])

  return (
    <section
      id="top"
      aria-label="Keynoter conference"
      className="relative h-[700px] overflow-hidden bg-navy text-white md:h-[820px] lg:h-[976px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO_SLIDES.map((slide, index) => {
        const current = index === active
        return (
          <div
            key={slide.seed}
            aria-hidden={!current}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              current ? 'opacity-100' : 'opacity-0',
            )}
          >
            <Duotone
              src={`https://picsum.photos/seed/${slide.seed}/1920/1200`}
              alt={slide.alt}
              className="h-full w-full"
            />
            <div className="absolute inset-0 flex items-start pt-[180px] md:pt-[250px] lg:pt-[320px]">
              <div className="shell w-full">
                <p className="mb-[10px] text-[24px] leading-[1.5] font-normal md:text-[30px] lg:text-[36px]">
                  {EVENT.month} {EVENT.dayFrom}
                  <sup>TH</sup> - {EVENT.dayTo}
                  <sup>TH</sup> {EVENT.year}
                </p>
                {current ? (
                  <h1 className="mb-[12px] text-[48px] leading-[1.05] font-black tracking-[-1px] text-white uppercase md:text-[76px] lg:text-[100px] lg:leading-[100px]">
                    {EVENT.headline.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h1>
                ) : (
                  <p className="mb-[12px] text-[48px] leading-[1.05] font-black tracking-[-1px] text-white uppercase md:text-[76px] lg:text-[100px] lg:leading-[100px]">
                    {EVENT.headline.join(' ')}
                  </p>
                )}
                <h2 className="text-[24px] leading-[1.5] font-bold text-white md:text-[30px] lg:text-[36px]">
                  {EVENT.venue}
                </h2>
              </div>
            </div>
          </div>
        )
      })}

      <div className="absolute top-1/2 right-[25px] z-10 flex -translate-y-1/2 flex-col gap-[10px] lg:right-[65px]">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.seed}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === active ? 'true' : undefined}
            onClick={() => setActive(index)}
            className="block h-[11px] w-[11px] rounded-full border-[3px] border-white p-0"
            style={{
              backgroundColor: index === active ? 'var(--color-hero-start)' : 'transparent',
            }}
          />
        ))}
      </div>
    </section>
  )
}
