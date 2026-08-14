import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { hero } from '../data'

const SLIDE_MS = 5000

/** Full-height hero slider: two slides sharing the same content over a photo
 *  background with a wavy separator; the active slide crossfades on a timer
 *  with dot controls. Portrait photo blends into the light band. */
export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % 2), SLIDE_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden bg-soft">
      <div className="relative min-h-[700px] lg:min-h-[1000px]">
        <img src={hero.background} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        {[0, 1].map((slide) => (
          <div
            key={slide}
            aria-hidden={slide !== index}
            className={cn(
              'relative mx-auto flex min-h-[700px] max-w-7xl flex-col items-center gap-10 px-4 pt-20 pb-16 transition-opacity duration-700 lg:min-h-[1000px] lg:flex-row lg:justify-between lg:px-8 lg:pt-24',
              slide !== index && 'hidden',
            )}
          >
            <div className="max-w-xl">
              <span className="text-lg font-medium uppercase tracking-wide text-brand">
                {hero.eyebrow}
              </span>
              <h1 className="mt-5 font-serif text-5xl font-bold leading-tight text-deep lg:text-[70px] lg:leading-[1.1]">
                {hero.name}
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">{hero.intro}</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={hero.learnMoreHref}
                  className="rounded bg-brand px-11 py-[27px] text-sm font-medium capitalize text-white transition-colors hover:bg-primary-700"
                >
                  {hero.learnMore}
                </a>
                <a
                  href={hero.hireMeHref}
                  className="rounded-[5px] border border-[#e3c6c6] px-12 py-[25px] text-sm font-medium capitalize text-[#464d65] transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {hero.hireMe}
                </a>
              </div>
            </div>
            <div className="relative shrink-0">
              <img
                src={hero.portrait}
                alt={hero.portraitAlt}
                width={400}
                height={500}
                className="h-auto w-full max-w-[400px] object-cover"
              />
            </div>
          </div>
        ))}

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              type="button"
              aria-label={`Go to slide ${dot + 1}`}
              aria-current={dot === index ? 'true' : undefined}
              onClick={() => setIndex(dot)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                dot === index ? 'bg-brand' : 'bg-gray-300',
              )}
            />
          ))}
        </div>
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[60px] w-full fill-white"
      >
        <path d="M0 60h1440V30c-120 20-280 28-480 16S480 6 720 6s-40 10-120 12c-200 6-400 16-600 42z" />
      </svg>
    </section>
  )
}
