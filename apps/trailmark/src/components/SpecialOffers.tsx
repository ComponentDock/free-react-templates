import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'
import { SPECIAL_OFFERS } from '../data/content'

export function SpecialOffers() {
  const [index, setIndex] = useState(0)
  const count = SPECIAL_OFFERS.length

  const step = (delta: number) => {
    setIndex((current) => (current + delta + count) % count)
  }

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Special offers" />
      </div>

      <div className="relative mt-20">
        <ul className="flex justify-center gap-5 overflow-hidden px-4">
          {SPECIAL_OFFERS.map((offer, slideIndex) => {
            const isActive = slideIndex === index
            return (
              <li
                key={offer.title}
                data-active={isActive}
                className={cn(
                  'relative h-[380px] w-[280px] shrink-0 overflow-hidden transition-opacity duration-500 lg:h-[520px] lg:w-[360px]',
                  isActive ? 'opacity-100' : 'opacity-60',
                )}
              >
                <img
                  src={`https://picsum.photos/seed/${offer.seed}/600/900`}
                  alt={`${offer.title} offer`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  className={cn(
                    'absolute inset-0 flex flex-col items-center justify-center text-center text-white transition-colors duration-500',
                    isActive && 'bg-[rgba(254,67,91,0.83)]',
                  )}
                >
                  <p className="text-2xl font-light">{offer.category}</p>
                  <a
                    href="#home"
                    className="text-3xl font-light transition-opacity hover:opacity-80 lg:text-4xl"
                  >
                    {offer.title}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label="Previous offer"
          onClick={() => step(-1)}
          className="absolute left-2 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-brand-nav text-white transition-opacity hover:opacity-80 lg:h-[90px] lg:w-[90px]"
        >
          <ChevronLeft aria-hidden="true" className="h-7 w-7" />
        </button>
        <button
          type="button"
          aria-label="Next offer"
          onClick={() => step(1)}
          className="absolute right-2 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-brand-nav text-white transition-opacity hover:opacity-80 lg:h-[90px] lg:w-[90px]"
        >
          <ChevronRight aria-hidden="true" className="h-7 w-7" />
        </button>
      </div>
    </section>
  )
}
