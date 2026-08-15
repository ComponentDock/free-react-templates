import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroSlides } from '../data'

export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section
      id="home"
      aria-label="Hero slider"
      className="relative h-screen overflow-hidden bg-ink"
    >
      {heroSlides.map((slide, index) => (
        <div
          key={slide.headline}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${heroSlides.length}`}
          aria-hidden={active !== index}
          className={cn(
            'absolute inset-0 flex items-center justify-center transition-opacity duration-700',
            active === index ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
          style={{
            backgroundImage: `url(https://picsum.photos/seed/marina-hero-${index + 1}/1920/1080)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto max-w-[720px] px-4 text-center text-white">
            <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-wide sm:text-6xl">
              {slide.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] font-body text-lg font-light leading-relaxed">
              {slide.paragraph}
            </p>
            <a
              href="#about"
              className="mt-10 inline-block bg-brand px-10 py-4 font-heading text-sm font-bold uppercase tracking-[0.2rem] text-white transition-colors hover:bg-brand/90"
            >
              Read More
            </a>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.headline}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active === index ? 'true' : undefined}
            onClick={() => setActive(index)}
            className={cn(
              'h-1 w-[18px] transition-colors',
              active === index ? 'bg-brand' : 'bg-white',
            )}
          />
        ))}
      </div>
    </section>
  )
}
