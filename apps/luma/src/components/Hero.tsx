import { useState } from 'react'

const SLIDES = [
  { title: 'Nature', seed: 'luma-nature' },
  { title: 'Portrait', seed: 'luma-portrait' },
  { title: 'People', seed: 'luma-people' },
  { title: 'Architecture', seed: 'luma-architecture' },
  { title: 'Animals', seed: 'luma-animals' },
  { title: 'Sports', seed: 'luma-sports' },
  { title: 'Travel', seed: 'luma-travel' },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    setCurrent((index + SLIDES.length) % SLIDES.length)
  }

  return (
    <section
      id="home"
      className="relative h-[80vh] w-full overflow-hidden bg-black"
      aria-label="Photo carousel"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.seed}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={`https://picsum.photos/seed/${slide.seed}/1920/1080`}
            alt={`${slide.title} photography`}
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{slide.title}</h2>
            <a
              href="#gallery"
              className="rounded-sm border-2 border-white px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
            >
              More Photos
            </a>
          </div>
        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-white transition-colors hover:bg-brand"
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      {/* Next arrow */}
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 rounded bg-black/60 px-3 py-2 text-white transition-colors hover:bg-brand"
        aria-label="Next slide"
      >
        &#8594;
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.seed}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-colors ${
              i === current ? 'bg-brand' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
          />
        ))}
      </div>
    </section>
  )
}
