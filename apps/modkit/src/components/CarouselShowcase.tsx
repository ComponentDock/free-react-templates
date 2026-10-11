import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band } from './Band'

interface Slide {
  id: string
  heading: string
  caption: string
}

const SLIDES: Slide[] = [
  {
    id: 'modkit-slide-1',
    heading: 'First slide label',
    caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    id: 'modkit-slide-2',
    heading: 'Second slide label',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'modkit-slide-3',
    heading: 'Third slide label',
    caption: 'Sed posuere consectetur est at lobortis nullam quis risus eget urna mollis.',
  },
]

export function CarouselShowcase() {
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]!

  const goTo = (next: number) => setIndex((next + SLIDES.length) % SLIDES.length)

  return (
    <Band
      title="Carousel"
      lead="A slideshow component for cycling through elements—images or slides of text—like a carousel."
    >
      <div className="relative overflow-hidden rounded">
        <img
          src={`https://picsum.photos/seed/${slide.id}/1200/560`}
          alt=""
          className="h-[320px] w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/40 px-6 py-5 text-center">
          <h5 className="text-white">{slide.heading}</h5>
          <p className="text-white/90">{slide.caption}</p>
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-kit-dark hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-white/80 p-2 text-kit-dark hover:bg-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2">
        {SLIDES.map((item, position) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to slide ${position + 1}`}
            aria-current={position === index ? 'true' : undefined}
            onClick={() => goTo(position)}
            className={cn(
              'h-2 cursor-pointer rounded-full transition-all',
              position === index ? 'w-6 bg-kit-primary' : 'w-2 bg-kit-primary/30',
            )}
          />
        ))}
      </div>
    </Band>
  )
}
