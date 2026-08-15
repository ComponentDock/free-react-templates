import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { heroPlayLabel, heroReadMoreLabel, heroSlideLabel, heroSlides } from '../data'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroSlides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section id="home-section" className="relative">
      {heroSlides.map((item, slideIndex) => (
        <div
          key={item.title}
          aria-hidden={slideIndex !== index}
          className={`absolute inset-0 bg-cover bg-center ${
            slideIndex === index ? 'relative z-0' : 'z-0'
          }`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
          <div className="relative flex min-h-[620px] flex-col items-center justify-center px-4 pb-20 pt-40 text-center lg:min-h-[895px]">
            {slideIndex === index && (
              <>
                <button
                  type="button"
                  aria-label={heroPlayLabel}
                  className="mb-[17px] flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-dark"
                >
                  <Play className="ml-0.5 h-6 w-6" aria-hidden="true" />
                </button>
                <h1 className="max-w-[900px] text-5xl font-medium leading-tight text-white sm:text-7xl lg:text-[130px] lg:leading-[1.05]">
                  {item.title}
                </h1>
                <a
                  href="#features-section"
                  className="mt-12 bg-brand px-[50px] py-5 text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-dark"
                >
                  {heroReadMoreLabel}
                </a>
              </>
            )}
          </div>
        </div>
      ))}

      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3"
        role="group"
        aria-label="Slide controls"
      >
        {heroSlides.map((item, dotIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={heroSlideLabel(dotIndex)}
            aria-current={dotIndex === index ? 'true' : undefined}
            onClick={() => setIndex(dotIndex)}
            className={`h-3 w-3 rounded-full transition-colors ${
              dotIndex === index ? 'bg-brand' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
