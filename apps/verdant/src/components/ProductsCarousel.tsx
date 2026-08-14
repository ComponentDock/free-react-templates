import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { products } from '../data'
import { pagesFor, slideIndex } from '../carousel'

const PER_VIEW = 3

/** "Share Before You Download" — owl-style products carousel: six media
 *  cards, three visible at once, sliding one card per arrow press with
 *  dots; cards lift with a soft shadow on hover. */
export function ProductsCarousel() {
  const [index, setIndex] = useState(0)
  const pages = pagesFor(products.length, PER_VIEW)

  const go = (delta: number) => setIndex((current) => slideIndex(current, pages, delta))
  const visible = products.slice(index, index + PER_VIEW)

  return (
    <section aria-label="Products" className="bg-mist py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/50">
            Products &amp; Services
          </p>
          <h2 className="heading-underline font-heading mt-3 inline-block pb-3 text-3xl font-semibold uppercase text-black">
            Share Before You Download
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <article
              key={item.title}
              className="group bg-white p-8 transition-shadow duration-300 hover:shadow-[0_5px_40px_-5px_rgba(0,0,0,0.1)]"
            >
              <img
                src={item.image}
                alt={`${item.title} preview`}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <h3 className="font-heading mt-6 text-xl font-semibold uppercase text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
              </p>
              <a
                href="#learn-more"
                className="mt-4 inline-block text-sm font-semibold text-primary"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center bg-white text-black/60 transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }, (_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show product ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                className={cn(
                  'h-2.5 w-2.5 transition-colors',
                  dotIndex === index ? 'bg-primary' : 'bg-black/20 hover:bg-black/40',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next product"
            className="flex h-10 w-10 items-center justify-center bg-white text-black/60 transition-colors hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
