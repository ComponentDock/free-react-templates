import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { HERO_IMAGE, HERO_SLIDES } from '../data'

/* Hero recreated from the ColorLib "Cloud83" hero slider: a full-width dark
   cover photo, "The Best Hosting" headline, two supporting paragraphs, a
   square slate "Read More" button, and bottom-center slider dots with the
   active dot in brand green. The original shows two identical slides — the
   recreation keeps both, switchable via the dots. */

export function Hero() {
  const [active, setActive] = useState(0)

  const slide = HERO_SLIDES[active]!

  return (
    <section
      id="home-section"
      className="relative flex min-h-[750px] items-center bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-40 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-[48px] font-bold leading-tight text-white lg:text-[64px]">
          {slide.heading}
        </h2>
        {slide.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80">
            {paragraph}
          </p>
        ))}
        <a
          href="#services-section"
          className="mt-[60px] inline-block min-w-[146px] bg-slate px-6 py-[14px] text-center text-[16px] text-white transition-opacity hover:opacity-90"
        >
          Read More
        </a>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {HERO_SLIDES.map((item, index) => (
          <button
            key={item.heading + index}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={cn(
              'h-[14px] w-[14px] rounded-full transition-colors',
              index === active ? 'bg-brand' : 'bg-white/40 hover:bg-white/70',
            )}
          />
        ))}
      </div>
    </section>
  )
}
