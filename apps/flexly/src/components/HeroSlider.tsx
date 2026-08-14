import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data'
import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

/* Hero slider — full-height 2-slide carousel. Each slide splits into a
   photo side (with the vertical STRENGTH/WORKOUT word) and a text side
   (tagline, headline with emphasized spans, lorem, salmon pill CTA).
   Arrows + dots navigate; auto-advances every 6s. */
export function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  const go = (next: number) => setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length)

  return (
    <section aria-label="Hero slider" className="relative min-h-screen overflow-hidden bg-black">
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.vertical}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 transition-opacity duration-700',
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          <img
            src={item.photo}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative mx-auto grid h-full max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
            <div className="text-white">
              <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-[3px] text-brand">
                {item.tagline}
              </span>
              <h1 className="max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
                {item.headline.split(new RegExp(`(${item.emphasis.join('|')})`)).map((part) =>
                  item.emphasis.includes(part) ? (
                    <span key={part} className="font-black">
                      {part}
                    </span>
                  ) : (
                    part
                  ),
                )}
              </h1>
              <p className="mt-5 max-w-md text-white/80">{item.text}</p>
              <ButtonLink
                href="#programs-section"
                className="mt-8 rounded-full bg-brand px-5 py-3 text-white transition-colors hover:bg-brand/80"
              >
                Join with us
              </ButtonLink>
            </div>
            <div className="relative hidden h-[60vh] md:block">
              <img src={item.photo} alt="" className="h-full w-full object-cover" />
              <span className="absolute -right-4 top-8 [writing-mode:vertical-lr] [text-orientation:sideways] [transform:rotate(180deg)] text-4xl font-black uppercase text-white">
                {item.vertical}
              </span>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40 md:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40 md:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((item, i) => (
          <button
            key={item.vertical}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => go(i)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              i === index ? 'bg-brand' : 'bg-white/50 hover:bg-white/80',
            )}
          />
        ))}
      </div>
    </section>
  )
}
