import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  { src: 'https://picsum.photos/seed/studio-hero-1/1200/800', alt: 'Studio workspace' },
  { src: 'https://picsum.photos/seed/studio-hero-2/1200/800', alt: 'Creative process' },
  { src: 'https://picsum.photos/seed/studio-hero-3/1200/800', alt: 'Finished project' },
]

export function Hero() {
  const [active, setActive] = useState(0)
  const count = slides.length

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section aria-label="Hero" className="bg-brand text-white">
      {/* Series label */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-[20px] font-normal text-white">Carousel #10</h2>
      </div>

      {/* Split-screen cover */}
      <div className="relative mx-auto min-h-[600px] max-w-7xl px-4 md:h-screen">
        {/* Left half — image carousel */}
        <div className="absolute left-0 top-0 z-2 h-full w-full overflow-hidden rounded-br-[200px] md:w-1/2">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === active ? 1 : 0 }}
              aria-hidden={i !== active}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}

          {/* Mobile white overlay */}
          <div className="pointer-events-none absolute inset-0 bg-white/50 md:hidden" />

          {/* Prev / Next arrows */}
          <div className="absolute bottom-[120px] right-[50px] z-10 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={prev}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-[30px] w-[30px]" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-[30px] w-[30px]" />
            </button>
          </div>
        </div>

        {/* Right half — intro text */}
        <div className="relative z-3 flex h-full items-center justify-end">
          <div className="w-full py-20 md:w-1/2 md:py-0">
            <div className="md:ml-[-150px]">
              <h1 className="text-[4rem] font-black leading-none text-white md:text-[8rem]">
                The Studio
              </h1>
            </div>
            <div className="mt-6 px-4 text-[1.4rem] font-light text-subtext md:px-0 md:pl-[50px] md:text-black">
              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis qui
                distinctio.
              </p>
              <p>
                <a
                  href="#start"
                  className="inline-block rounded-[30px] border-2 border-white px-[30px] py-[15px] text-[1rem] text-white transition-colors hover:bg-white hover:text-black"
                >
                  Start a project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
