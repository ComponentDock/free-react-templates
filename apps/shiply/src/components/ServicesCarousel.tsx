import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { services } from '../data'

/** Image services carousel: five photo slides with a bottom gradient and
 *  a caption, navigated by prev/next arrow controls below the carousel. */
export function ServicesCarousel() {
  const [index, setIndex] = useState(0)

  const goTo = (next: number) => {
    setIndex((next + services.length) % services.length)
  }

  return (
    <section id="services" aria-label="Services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((slide, i) => (
            <figure
              key={slide.title}
              aria-hidden={i !== index}
              className="group relative overflow-hidden"
            >
              <img
                src={slide.image}
                alt=""
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center text-white">
                <h3 className="text-2xl font-medium">{slide.title}</h3>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
            className="p-5 text-3xl text-ink transition-colors hover:text-brand disabled:opacity-20"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={index === services.length - 1}
            onClick={() => goTo(index + 1)}
            className="p-5 text-3xl text-ink transition-colors hover:text-brand disabled:opacity-20"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  )
}
