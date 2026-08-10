import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { heroIntervalMs, heroSlides, imgUrl, slideLabel } from '../data'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const slide = heroSlides[index]!

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), heroIntervalMs)
    return () => window.clearInterval(id)
  }, [count])

  return (
    <section
      aria-label="Featured slides"
      className="relative h-[70vh] overflow-hidden bg-black lg:sticky lg:top-0 lg:h-screen lg:w-[44%]"
    >
      <img
        src={imgUrl(slide.seed, 900, 1200)}
        alt={slide.headline}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
        <p className="inline-block border border-white px-1 py-0.5 text-[13px] uppercase tracking-[1px] text-white">
          {slide.category}
        </p>
        <h1 className="mt-5 max-w-md font-display text-4xl font-normal leading-[1.2] text-white">
          {slide.headline}
        </h1>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2.5">
        {heroSlides.map((item, i) => (
          <button
            key={item.seed}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={slideLabel(i + 1)}
            aria-current={i === index}
            className={cn(
              'h-2.5 w-2.5 rounded-full border border-white/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              i === index ? 'bg-brand' : 'bg-transparent hover:bg-white/40',
            )}
          />
        ))}
      </div>
    </section>
  )
}
