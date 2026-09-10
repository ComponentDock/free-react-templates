import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const SLIDES = [
  {
    tag: 'Welcome',
    heading: 'Photography is on its way.',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/focal-hero1/1200/800',
  },
  {
    tag: 'Photography',
    heading: 'Capture interesting things.',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/focal-hero2/1200/800',
  },
  {
    tag: 'Discover',
    heading: 'Discover New Things',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    image: 'https://picsum.photos/seed/focal-hero3/1200/800',
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  const slide = SLIDES[currentSlide]!

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col md:flex-row"
      aria-label="Hero carousel"
    >
      {/* Image panel — 60% width */}
      <div className="relative h-[50vh] w-full md:h-auto md:w-[60%]">
        <img
          src={slide.image}
          alt={slide.heading}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Navigation controls */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="rounded-full bg-white/80 p-2 text-gray-900 transition-colors hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="rounded-full bg-white/80 p-2 text-gray-900 transition-colors hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Text panel — 40% width */}
      <div className="flex w-full items-center bg-white px-8 py-16 md:w-[40%] md:px-12 lg:px-16">
        <div className="relative">
          {/* Large watermark slide number */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-8 select-none text-[120px] font-bold leading-none text-gray-100/80 md:text-[180px]"
          >
            {`0${currentSlide + 1}/0${SLIDES.length}`}
          </span>

          <div className="relative z-10">
            <span className="mb-4 inline-block bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand">
              {slide.tag}
            </span>
            <h2 className="mb-6 text-3xl font-bold tracking-wide text-gray-900 md:text-4xl lg:text-[42px]">
              {slide.heading}
            </h2>
            <p className="mb-8 max-w-md text-base text-gray-500">{slide.description}</p>
            <Button
              onClick={() => {}}
              className="inline-flex items-center gap-2 border-2 border-transparent bg-transparent text-xs uppercase tracking-[7px] text-gray-900 hover:text-brand"
            >
              View Galleries <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 md:left-[30%]">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-brand' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
