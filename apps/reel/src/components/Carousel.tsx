import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  thumbnailUrl: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'DREAM DESTINATION',
    subtitle: 'Tropical Paradise Resort',
    imageUrl: 'https://picsum.photos/seed/reel-1/1200/700',
    thumbnailUrl: 'https://picsum.photos/seed/reel-1-thumb/200/200',
  },
  {
    id: 2,
    title: 'TRAVEL EXPLORATION',
    subtitle: 'Coastal Luxury Retreat',
    imageUrl: 'https://picsum.photos/seed/reel-2/1200/700',
    thumbnailUrl: 'https://picsum.photos/seed/reel-2-thumb/200/200',
  },
  {
    id: 3,
    title: 'DISCOVER NEW PLACES',
    subtitle: 'Oceanfront Hotel & Spa',
    imageUrl: 'https://picsum.photos/seed/reel-3/1200/700',
    thumbnailUrl: 'https://picsum.photos/seed/reel-3-thumb/200/200',
  },
]

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(() => (index + slides.length) % slides.length)
  }, [])

  const nextSlide = useCallback(() => {
    goToSlide(activeIndex + 1)
  }, [activeIndex, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(activeIndex - 1)
  }, [activeIndex, goToSlide])

  const activeSlide = slides[activeIndex]!

  return (
    <section className="relative py-16 sm:py-24 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Carousel Showcase
          </h2>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={activeSlide.imageUrl}
              alt={activeSlide.title}
              className="w-full h-[500px] sm:h-[600px] object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h3 className="font-display text-4xl font-black uppercase tracking-wider mb-4 sm:text-5xl lg:text-6xl">
                {activeSlide.title}
              </h3>
              <p className="font-display text-lg font-normal max-w-2xl mx-auto sm:text-xl">
                {activeSlide.subtitle}
              </p>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:left-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-6"
              aria-label="Next slide"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          <div className="flex mt-8 justify-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(index)}
                className={`relative flex h-20 w-20 items-end rounded-full overflow-hidden border-4 transition-all duration-300 ${
                  index === activeIndex
                    ? 'border-white scale-110 shadow-xl'
                    : 'border-white/50 scale-90 hover:border-white/75 hover:scale-95'
                } dark:border-gray-700 dark:hover:border-gray-500`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              >
                <img
                  src={slide.thumbnailUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 right-0 p-2 text-xs font-medium text-white bg-black/50">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
