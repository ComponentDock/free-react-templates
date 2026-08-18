import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { instagramTiles } from '../data'
import { pillOutline } from './buttonClasses'
import { InstagramIcon } from './icons'

const PER_VIEW = 4
const TOTAL = instagramTiles.length
const MAX_INDEX = TOTAL - PER_VIEW

/**
 * Instagram gallery carousel (reference: .sec-instagram .instagram-slider).
 * Tiles carry an Instagram icon overlay; Prev/Next pills advance four tiles.
 */
export function Instagram() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + PER_VIEW))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - PER_VIEW))

  return (
    <section aria-label="Instagram gallery" className="pb-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand">
            Instagram
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous gallery"
              onClick={prev}
              className={pillOutline}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next gallery" onClick={next} className={pillOutline}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            data-instagram-track
            className="flex transition-transform duration-500"
            style={{
              width: `${(TOTAL / PER_VIEW) * 100}%`,
              transform: `translateX(${-(index / TOTAL) * 100}%)`,
            }}
          >
            {instagramTiles.map((tile) => (
              <a
                key={tile.alt}
                href="#instagram"
                aria-label={`View photo: ${tile.alt}`}
                className="group relative block shrink-0 overflow-hidden px-1.5"
                style={{ width: `${100 / TOTAL}%` }}
              >
                <img
                  src={tile.image}
                  alt={tile.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <InstagramIcon className="h-8 w-8 text-white" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
