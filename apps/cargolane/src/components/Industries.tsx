import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { INDUSTRIES } from '../data/content'
import { SectionHeading } from './SectionHeading'

const VISIBLE_TILES = 3

export function Industries() {
  const [index, setIndex] = useState(0)

  const go = (delta: number) =>
    setIndex((current) => (current + delta + INDUSTRIES.length) % INDUSTRIES.length)

  const tiles = Array.from({ length: VISIBLE_TILES }, (_, offset) => {
    return INDUSTRIES[(index + offset) % INDUSTRIES.length]!
  })

  return (
    <section id="industries" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Industries"
          align="center"
          tone="primary"
          blurb="Freight expertise across the industries that keep the world moving."
        />
        <div className="relative mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((tile, position) => (
              <article
                key={tile.title}
                className={
                  position === 1
                    ? 'hidden sm:block'
                    : position === 2
                      ? 'hidden lg:block'
                      : undefined
                }
              >
                <div className="relative overflow-hidden">
                  <img src={tile.image} alt={tile.title} className="h-64 w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-lg text-white">{tile.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            aria-label="Previous industries"
            onClick={() => go(-1)}
            className="absolute -left-2 top-1/2 -translate-y-1/2 text-primary hover:text-black sm:-left-5"
          >
            <ChevronLeft aria-hidden="true" className="h-10 w-10" />
          </button>
          <button
            type="button"
            aria-label="Next industries"
            onClick={() => go(1)}
            className="absolute -right-2 top-1/2 -translate-y-1/2 text-primary hover:text-black sm:-right-5"
          >
            <ChevronRight aria-hidden="true" className="h-10 w-10" />
          </button>
        </div>
      </div>
    </section>
  )
}
