import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionTitle } from './SectionTitle'

const CAROUSEL_CARDS = [
  {
    kicker: 'Science',
    headline: '26 last-minute holiday gifts that are still thoughtful and unique',
    byline: 'by Emily R.',
    image: 'https://picsum.photos/seed/kicker-car1/400/250',
  },
  {
    kicker: 'Science',
    headline: 'The Amex Business Platinum vs. the Amex Business Gold',
    byline: 'by David K.',
    image: 'https://picsum.photos/seed/kicker-car2/400/250',
  },
  {
    kicker: 'Science',
    headline: 'Lights that warn planes of obstacles were exposed to Open Internet',
    byline: 'by Marcus T.',
    image: 'https://picsum.photos/seed/kicker-car3/400/250',
  },
  {
    kicker: 'Health',
    headline: "Substituting 'follow your passion' with 'find your purpose'",
    byline: 'by Sarah Chen',
    image: 'https://picsum.photos/seed/kicker-car4/400/250',
  },
  {
    kicker: 'Science',
    headline: 'Fearing corona recession, France announces new measures',
    byline: 'by Jean-Luc',
    image: 'https://picsum.photos/seed/kicker-car5/400/250',
  },
]

export function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const track = trackRef.current
    if (!track || typeof track.scrollBy !== 'function') return
    const amount = 320
    track.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-4 pb-12 pt-10 lg:px-[88px]">
      <SectionTitle title="Science Update" />
      {/* Carousel arrows */}
      <div className="mb-4 flex justify-end gap-2">
        <button
          onClick={() => scroll('left')}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand-red hover:text-brand-red"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand-red hover:text-brand-red"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {CAROUSEL_CARDS.map((card) => (
          <article key={card.headline} className="w-[280px] shrink-0 group">
            <div className="overflow-hidden">
              <img
                src={card.image}
                alt={card.headline}
                className="h-[175px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="pt-4">
              <span className="font-chivo text-[14px] font-bold capitalize text-brand-red">
                {card.kicker}
              </span>
              <h3 className="mt-2 font-chivo text-[20px] font-bold leading-[1.4] text-ink transition-colors group-hover:text-brand-red">
                <a href="#">{card.headline}</a>
              </h3>
              <p className="mt-2 font-chivo text-[14px] font-bold text-ink">{card.byline}</p>
            </div>
          </article>
        ))}
      </div>
      {/* Ad strip placeholder */}
      <div className="mt-8 flex h-[100px] items-center justify-center border border-gray-200 bg-gray-50">
        <span className="font-chivo text-[12px] text-gray-400">Ad Space</span>
      </div>
    </section>
  )
}
