interface Slide {
  label: string
  title: string
  description: string
  image: string
}

const SLIDES: Slide[] = [
  {
    label: 'Photography',
    title: 'Project No. 1',
    description:
      'Capturing moments that tell a story. Each frame is a window into a world of light, shadow, and emotion.',
    image: 'https://picsum.photos/seed/snapfold-1/1920/1080',
  },
  {
    label: 'Photography',
    title: 'Project No. 2',
    description:
      'Exploring the beauty in everyday scenes. From golden hour landscapes to intimate portraits.',
    image: 'https://picsum.photos/seed/snapfold-2/1920/1080',
  },
]

interface HeroSliderProps {
  currentSlide: number
  onNext: () => void
  onPrev: () => void
}

export function HeroSlider({ currentSlide, onNext, onPrev }: HeroSliderProps) {
  const slide = SLIDES[currentSlide]!
  const nextIndex = (currentSlide + 1) % SLIDES.length
  const nextSlide = SLIDES[nextIndex]!

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      aria-label="Hero slider"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{ backgroundImage: `url(${slide.image})` }}
        role="img"
        aria-label={slide.title}
      />

      {/* Text box */}
      <div className="relative z-10 flex h-full items-center">
        <div className="ml-8 max-w-[395px] bg-white/95 p-10 lg:ml-20">
          <span className="block text-[11px] font-bold uppercase tracking-[2px] text-snap-body">
            {slide.label}
          </span>
          <h1 className="mt-4 text-[48px] font-bold leading-tight text-snap-primary">
            {slide.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-snap-body">{slide.description}</p>
          <a
            href="#gallery"
            className="mt-6 inline-flex items-center gap-2 border-2 border-snap-black px-6 py-3 text-xs font-bold uppercase tracking-widest text-snap-black transition-colors hover:bg-snap-black hover:text-white"
          >
            Read More
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Next slide preview */}
      <div className="absolute bottom-0 right-0 z-10 hidden w-48 lg:block">
        <div className="relative">
          <img
            src={nextSlide.image}
            alt={`Preview: ${nextSlide.title}`}
            className="h-32 w-full object-cover"
          />
          <span className="absolute bottom-2 left-2 text-xs font-bold uppercase text-white drop-shadow">
            Next
          </span>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-0 left-0 z-10 flex">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={onPrev}
          className="flex h-[88px] w-[111px] items-center justify-center bg-snap-primary text-white transition-colors hover:bg-gray-800"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={onNext}
          className="flex h-[88px] w-[111px] items-center justify-center bg-white text-snap-primary transition-colors hover:bg-gray-100"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
