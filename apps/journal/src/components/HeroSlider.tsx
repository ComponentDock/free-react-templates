import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroAutoAdvanceMs, heroNextLabel, heroPrevLabel, heroSlides, imgUrl } from '../data'

/** Full-width hero carousel: three photo slides with a black category pill
 *  and an uppercase headline on a black bar (only the active slide's content
 *  is visible, like the original's owl `center` mode). Auto-advances and
 *  responds to the prev/next arrow controls. */
export function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(
      () => setActive((current) => (current + 1) % heroSlides.length),
      heroAutoAdvanceMs,
    )
    return () => window.clearInterval(id)
  }, [])

  const prev = () => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setActive((current) => (current + 1) % heroSlides.length)

  return (
    <section aria-label="Featured posts" className="relative overflow-hidden bg-black">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div key={slide.seed} className="relative h-[520px] w-full shrink-0 lg:h-[670px]">
            <img
              src={imgUrl(slide.seed, 1600, 670)}
              alt=""
              className="h-full w-full object-cover"
            />
            {index === active ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="bg-ink px-[10px] py-[3px] text-[10px] font-semibold uppercase tracking-[2px] text-white">
                    {slide.tag}
                  </span>
                  <h2 className="mt-4 bg-ink px-5 pt-3 pb-[5px] text-[26px] font-bold uppercase leading-tight tracking-wide text-white lg:text-[40px]">
                    {slide.headline}
                  </h2>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label={heroPrevLabel}
        onClick={prev}
        className="absolute top-1/2 left-[7%] flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#cbcbcb] text-white transition-colors hover:bg-nearblack"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label={heroNextLabel}
        onClick={next}
        className="absolute top-1/2 right-[7%] flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-[#cbcbcb] text-white transition-colors hover:bg-nearblack"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  )
}
