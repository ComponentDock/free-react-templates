import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/* Two-layer hero slider (source: two rev_slider layers with the same
   wordmark + SIGN UP pill). Subtitles and backdrop seeds vary per slide. */
const SLIDES = [
  {
    wordmark: 'OnTouch',
    subtitle: 'The best app landing page template for your next launch',
    image: 'https://picsum.photos/seed/ripply-hero-1/1920/800',
  },
  {
    wordmark: 'OnTouch',
    subtitle: 'Beautiful, fast and easy to customize for any product',
    image: 'https://picsum.photos/seed/ripply-hero-2/1920/800',
  },
]

export function Hero() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % SLIDES.length)
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)

  const slide = SLIDES[index]!

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Hero slides"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      {/* Water-ripple approximation: subtle animated gradient wash over the
          cover photo (never copies the ripples.js asset). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#d6c3fc,#acc4fc,#98c5fc)] opacity-30"
      />

      <div className="relative z-10 px-[15px] text-center">
        <h1 className="font-display text-[72px] font-bold uppercase leading-none text-white drop-shadow-md md:text-[150px]">
          {slide.wordmark}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[18px] text-white/90">{slide.subtitle}</p>
        <a
          href="#feature"
          className="mt-10 inline-block rounded-[23.5px] bg-white px-10 py-[14px] font-sans text-[16px] text-body shadow-[0_4px_12.35px_0.65px_rgba(0,0,0,0.09)]"
        >
          SIGN UP
        </a>
      </div>

      {/* Carousel controls. */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-2 text-ink hover:bg-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/70 p-2 text-ink hover:bg-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators. */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.image}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
