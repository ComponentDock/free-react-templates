import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { works } from '../data'

export function Portfolio() {
  const [index, setIndex] = useState(0)
  const last = works.length - 1

  return (
    <section id="work" aria-label="Portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm text-brand">
            We&apos;re Happy to share our complete Projects
          </span>
          <h2 className="text-3xl font-normal text-ink">Our Portfolio</h2>
        </div>
        <div className="relative" aria-roledescription="carousel" aria-label="Portfolio projects">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {works.map((work, i) => (
                <figure
                  key={work.title}
                  className="relative min-w-full shrink-0"
                  aria-hidden={i !== index ? 'true' : undefined}
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-72 w-full object-cover md:h-96"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-black/40 p-5 text-white">
                    <span className="block text-sm text-white/80">{work.category}</span>
                    <span className="text-xl">{work.title}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous project"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow hover:bg-white"
            onClick={() => setIndex((current) => (current === 0 ? last : current - 1))}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/80 p-2 text-ink shadow hover:bg-white"
            onClick={() => setIndex((current) => (current === last ? 0 : current + 1))}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {works.map((work, i) => (
            <button
              key={work.title}
              type="button"
              aria-label={`Go to ${work.title}`}
              aria-current={i === index ? 'true' : undefined}
              className={cn(
                'h-2 w-2 rounded-full transition-colors',
                i === index ? 'bg-brand' : 'bg-gray-300',
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
