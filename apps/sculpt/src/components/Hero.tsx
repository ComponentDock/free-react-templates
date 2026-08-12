import { useEffect, useState } from 'react'
import { HERO_SLIDES } from '../data'

/**
 * Hero — full-screen photo carousel with four motivational headlines,
 * carousel dots (active dot brand orange), and an animated mouse scroll
 * indicator. No CTA button on the home hero (matches the source).
 */
export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((index) => (index + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = HERO_SLIDES[active]!

  return (
    <section id="home" aria-label="Hero" className="relative">
      <div className="relative flex min-h-[650px] items-center justify-center overflow-hidden">
        {HERO_SLIDES.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div aria-hidden="true" className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-4 text-center">
          <h1 className="text-5xl font-light leading-[1.3] text-white opacity-80">
            {slide.headline}
          </h1>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-6">
          <div className="flex gap-2.5">
            {HERO_SLIDES.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === active}
                onClick={() => setActive(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === active ? 'bg-brand' : 'bg-white/60'
                }`}
              />
            ))}
          </div>

          <a
            href="#intro"
            aria-label="Scroll down"
            className="flex h-[45px] w-[30px] items-start justify-center rounded-[15px] border border-white/40 pt-2"
          >
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          </a>
        </div>
      </div>
    </section>
  )
}
