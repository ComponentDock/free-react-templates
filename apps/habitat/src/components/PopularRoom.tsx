import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { popular, properties } from '../data'

/* Reference: section.popular-room.set-bg.p-in — dark photo section whose
   right half (offset column) holds an owl-carousel of white .popular-items
   slides: title + location links, description, feature stats, "For Sale
   $345,000" with a red "Best Deal" pill badge, and a View Property button.
   Slides advance via prev/next controls with dot indicators. */
export function PopularRoom() {
  const [index, setIndex] = useState(0)
  const count = popular.slides.length

  const goTo = (next: number) => setIndex(((next % count) + count) % count)
  const slide = popular.slides[index]!

  return (
    <section
      id="popular"
      aria-label="Popular properties"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <img
        src={popular.photo}
        alt={popular.alt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 lg:pl-[55%]">
        <article className="rounded bg-white p-8 shadow-[2px_2px_30px_rgba(0,0,0,0.1)] lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[18px] font-medium text-navy">{slide.title}</h3>
            <span className="whitespace-nowrap rounded-full bg-badge px-3 py-0.5 text-[14px] font-medium uppercase text-white">
              {slide.deal}
            </span>
          </div>
          <div className="mt-2 flex items-center gap-4 text-[12px] font-medium text-outline">
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} aria-hidden="true" />
              {properties.cards[0]!.location}
            </span>
            <span>{properties.cards[0]!.showMap}</span>
          </div>
          <p className="mt-4 text-[14px] font-light leading-relaxed text-muted">
            {slide.description}
          </p>
          <dl className="mt-5 grid grid-cols-4 gap-2 border-y border-divider py-3 text-center">
            <div>
              <dt className="text-[11px] text-outline">Lot Size</dt>
              <dd className="text-[13px] font-medium text-navy">{slide.lotSize}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-outline">Beds</dt>
              <dd className="text-[13px] font-medium text-navy">{slide.beds}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-outline">Baths</dt>
              <dd className="text-[13px] font-medium text-navy">{slide.baths}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-outline">Garage</dt>
              <dd className="text-[13px] font-medium text-navy">{slide.garage}</dd>
            </div>
          </dl>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-[16px] text-outline">{properties.forSaleLabel}</p>
              <p className="text-[24px] font-medium text-navy">{slide.price}</p>
            </div>
            <a
              href="#popular"
              className="rounded border-2 border-outline px-5 py-2.5 text-[16px] font-medium text-outline transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              {properties.viewLabel}
            </a>
          </div>
        </article>
        <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
          <button
            type="button"
            aria-label={popular.previousLabel}
            onClick={() => goTo(index - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 text-white transition-colors hover:border-brand hover:bg-brand"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {popular.slides.map((item, slideIndex) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show property ${slideIndex + 1}`}
                aria-current={slideIndex === index ? 'true' : undefined}
                onClick={() => goTo(slideIndex)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  slideIndex === index ? 'bg-brand' : 'bg-white/50 hover:bg-white',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={popular.nextLabel}
            onClick={() => goTo(index + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 text-white transition-colors hover:border-brand hover:bg-brand"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
