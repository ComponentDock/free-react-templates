import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { about } from '../data'

/** About section: text column (eyebrow, heading, paragraph, green
 *  check list, indigo CTA) beside an image slider with prev/next + dots. */
export function About() {
  const [slide, setSlide] = useState(0)
  const count = about.sliderImages.length

  const prev = () => setSlide((value) => (value - 1 + count) % count)
  const next = () => setSlide((value) => (value + 1) % count)

  return (
    <section id="about" aria-label="About" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-12">
        <div className="xl:col-span-4">
          <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary">
            {about.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold uppercase text-body xl:text-5xl">
            {about.heading}
          </h2>
          <p className="mt-6 leading-relaxed text-muted">{about.paragraph}</p>
          <ul className="mt-8 space-y-3">
            {about.checks.map((item) => (
              <li key={item} className="flex items-center gap-3 text-body">
                <Check className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <a href={about.cta.href} className="btn-primary">
              {about.cta.label}
            </a>
          </div>
        </div>

        <div className="xl:col-span-7 xl:col-start-6">
          <div className="relative overflow-hidden" aria-label="Image slider">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {about.sliderImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={
                    index === 0 ? 'Inside the restaurant dining room' : 'Dish from the chef kitchen'
                  }
                  className="h-[420px] w-full shrink-0 object-cover"
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-body transition-colors hover:bg-white hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-body transition-colors hover:bg-white hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {about.sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === slide ? 'true' : undefined}
                  onClick={() => setSlide(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    index === slide ? 'bg-primary' : 'bg-black/30 hover:bg-black/50',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
