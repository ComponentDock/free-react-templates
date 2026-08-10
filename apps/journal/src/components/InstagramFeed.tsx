import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  imgUrl,
  instagramAutoAdvanceMs,
  instagramNextLabel,
  instagramPrevLabel,
  instagramSeeds,
  instagramTitle,
} from '../data'
import { instagramPath } from './BrandIcon'

const visibleCount = 4
const maxOffset = instagramSeeds.length - visibleCount

/** Instagram feed strip: seven square photos in a translating carousel with
 *  prev/next controls, auto-advance, and an indigo hover overlay with the
 *  Instagram glyph (inline SVG — lucide removed brand icons). */
export function InstagramFeed() {
  const [offset, setOffset] = useState(0)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const id = window.setInterval(
      () => setOffset((current) => (current + 1) % (maxOffset + 1)),
      instagramAutoAdvanceMs,
    )
    return () => window.clearInterval(id)
  }, [])

  const step = (delta: number) =>
    setOffset((current) => (current + delta + maxOffset + 1) % (maxOffset + 1))

  return (
    <section aria-label={instagramTitle} className="border-t border-line py-10">
      <h3 className="text-center text-[18px] font-bold text-ink">{instagramTitle}</h3>
      <div className="relative mx-auto mt-10 max-w-6xl overflow-hidden px-4 lg:px-6">
        <div
          data-testid="insta-track"
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${offset * 25}%)` }}
        >
          {instagramSeeds.map((seed, index) => (
            <div
              key={seed}
              className="relative w-1/4 shrink-0"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={imgUrl(seed, 400, 400)}
                alt=""
                className="aspect-square w-full object-cover"
              />
              {hovered === index ? (
                <div
                  data-testid={`insta-overlay-${index}`}
                  className="absolute inset-0 flex items-center justify-center bg-accent/95"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[30px] w-[30px] text-white"
                  >
                    <path d={instagramPath} />
                  </svg>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-label={instagramPrevLabel}
          onClick={() => step(-1)}
          className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-nearblack/70 text-white transition-colors hover:bg-accent"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label={instagramNextLabel}
          onClick={() => step(1)}
          className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-nearblack/70 text-white transition-colors hover:bg-accent"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
