import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

const SLIDES = [
  {
    seed: 'flairkit-slide-1',
    label: 'First slide label',
    caption:
      'Grey cloud settled over the ridge line long before the first climbers reached the saddle.',
  },
  {
    seed: 'flairkit-slide-2',
    label: 'Second slide label',
    caption:
      'The valley floor held a thin mist that lifted only as the afternoon light began to fade.',
  },
  {
    seed: 'flairkit-slide-3',
    label: 'Third slide label',
    caption:
      'Every stone on the path was still wet, and the wind carried the smell of cold granite.',
  },
]

const FIRST = 0

/** Three image slides with white captions, indicator dots and arrow controls. */
export function CarouselShowcase() {
  const [index, setIndex] = useState(FIRST)
  const slide = SLIDES[index] as (typeof SLIDES)[number]

  const go = (offset: number) =>
    setIndex((previous) => (previous + offset + SLIDES.length) % SLIDES.length)

  return (
    <Band className="bg-band">
      <SectionHeading className="mb-5">Carousel</SectionHeading>
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${slide.seed}/1200/600`}
          alt={slide.label}
          className="block w-full"
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/40 px-6 py-4 text-center">
          <h5 className="text-[1.25rem] text-white">{slide.label}</h5>
          <p className="text-white">{slide.caption}</p>
        </div>
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-flair-dark"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 text-flair-dark"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="absolute inset-x-0 bottom-24 flex justify-center gap-2">
          {SLIDES.map((item, slideIndex) => (
            <button
              key={item.seed}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={cn(
                'h-3 w-3 cursor-pointer rounded-full bg-white',
                slideIndex === index && 'bg-flair-primary',
              )}
            />
          ))}
        </div>
      </div>
    </Band>
  )
}
