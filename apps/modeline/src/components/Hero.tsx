import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { slides, socials, type SlideKey } from '../data'
import { prefersReducedMotion } from '../lib/motion'

const SLIDE_INTERVAL = 6000

/**
 * Full-bleed monochrome hero: one photograph per slide, the halftone panel
 * behind a 160px headline, two square CTAs, the five-circle social rail, the
 * rotated brand line and two 84px controls at the bottom-left.
 */
export function Hero() {
  const [active, setActive] = useState<SlideKey>('editorial')
  const [paused, setPaused] = useState(false)
  const reduced = prefersReducedMotion()
  const slide = slides[active]

  const step = () => {
    setActive((current) => (current === 'editorial' ? 'campaign' : 'editorial'))
  }

  useEffect(() => {
    if (paused || reduced) {
      return
    }

    const id = window.setInterval(step, SLIDE_INTERVAL)

    return () => window.clearInterval(id)
  }, [paused, reduced])

  return (
    <section
      id="home"
      aria-label="Campaign"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative h-[520px] overflow-hidden sm:h-[700px] xl:h-[965px]"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="halftone absolute inset-x-0 top-1/2 hidden h-[581px] -translate-y-1/2 md:block"
      />

      <div className="relative mx-auto flex h-full max-w-[1140px] items-center px-6">
        <div className="w-full py-[102px] text-center md:pt-[179px]">
          <h1 className="text-[45px] leading-[1.1] font-bold text-ink sm:text-[60px] lg:text-[100px] xl:text-[160px] xl:leading-[192px]">
            {slide.headline}
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
            <a
              href="#portfolio"
              className="site-btn bg-white text-ink hover:bg-popup hover:text-white"
            >
              View the looks
            </a>
            <a href="#about" className="site-btn bg-ink text-white hover:bg-popup">
              About the brand
            </a>
          </div>
        </div>
      </div>

      <ul
        aria-label="Modeline on social"
        className="absolute top-[240px] right-[39px] hidden flex-col gap-[22px] md:flex"
      >
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href="#contact"
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-[13px] text-white transition-colors hover:bg-popup"
            >
              {social.mark}
            </a>
          </li>
        ))}
      </ul>

      <p
        aria-hidden="true"
        className="absolute right-10 bottom-10 hidden origin-top-right rotate-90 text-[14px] tracking-[0.3em] text-ink uppercase md:block"
      >
        We love our brand
      </p>

      <div className="absolute bottom-0 left-0 flex">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={step}
          className="flex h-[84px] w-[84px] items-center justify-center bg-ink text-white transition-colors hover:bg-popup"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={step}
          className="flex h-[84px] w-[84px] items-center justify-center bg-white text-ink transition-colors hover:bg-line"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
