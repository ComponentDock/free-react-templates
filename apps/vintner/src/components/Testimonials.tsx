import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

const slideCount = testimonials.length
const AUTOPLAY_MS = 5000

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideCount), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [])

  const next = () => setIndex((i) => (i + 1) % slideCount)
  const prev = () => setIndex((i) => (i - 1 + slideCount) % slideCount)

  return (
    <section id="about" aria-label="Customer testimonials" className="bg-mist py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-serif text-xl tracking-wide text-ink/70">Welcome</p>
        <h2 className="mt-2 font-serif text-4xl font-normal text-ink">Wines For Everyone</h2>

        <div className="relative mt-14 overflow-hidden">
          <div
            data-track
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.id}
                data-slide
                aria-hidden={i !== index ? 'true' : undefined}
                className="w-full shrink-0 px-2"
              >
                <Quote aria-hidden="true" className="mx-auto h-8 w-8 text-brand/60" />
                <blockquote className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-3">
                  <img src={t.photo} alt={t.alt} className="h-16 w-16 rounded-full object-cover" />
                  <span className="text-sm font-semibold text-ink">— {t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous quote"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow transition-colors hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to quote ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => setIndex(i)}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full bg-ink/20 transition-colors hover:bg-ink/40',
                    i === index && 'bg-brand',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next quote"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow transition-colors hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
