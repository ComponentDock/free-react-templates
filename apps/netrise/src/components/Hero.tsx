import { useEffect, useState } from 'react'
import { Monitor } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero slider"
      className="relative overflow-hidden bg-[linear-gradient(45deg,#fb83b5,#9a51ff)]"
    >
      <div className="mx-auto grid min-h-[750px] max-w-[1200px] items-center gap-10 px-4 py-20 lg:grid-cols-2">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.headline}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
            aria-hidden={active !== index}
            className={cn(
              'col-start-1 row-start-1 transition-opacity duration-700',
              active === index ? 'opacity-100' : 'pointer-events-none opacity-0',
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[1px] text-white/90">
              {slide.subheading}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {slide.headline}
            </h1>
            <p className="mt-6 max-w-[520px] text-lg font-light leading-relaxed text-white/90">
              {slide.blurb}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="bg-[linear-gradient(45deg,#12e6ca,#8be55d)] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Get started
              </a>
              <a
                href="#about"
                className="bg-[linear-gradient(45deg,#56c8fb,#627bed)] px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
              >
                Read more
              </a>
            </div>
          </div>
        ))}

        <div className="col-start-1 row-start-1 hidden justify-end lg:col-start-2 lg:flex">
          <div className="w-[420px] rounded-lg bg-white/95 p-4 shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-gray-200 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Monitor className="h-5 w-5 text-indigo" aria-hidden="true" />
              <div className="h-2 flex-1 rounded bg-gray-200" />
            </div>
            <div className="mt-3 h-2 w-3/4 rounded bg-gray-200" />
            <div className="mt-3 h-2 w-1/2 rounded bg-gray-200" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-16 rounded bg-[linear-gradient(135deg,#12e6ca,#8be55d)] opacity-80" />
              <div className="h-16 rounded bg-[linear-gradient(135deg,#56c8fb,#627bed)] opacity-80" />
              <div className="h-16 rounded bg-[linear-gradient(135deg,#fb83b5,#9a51ff)] opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.headline}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-colors',
              active === index ? 'bg-white' : 'bg-white/50',
            )}
          />
        ))}
      </div>
    </section>
  )
}
