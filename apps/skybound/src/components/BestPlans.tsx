import { useState, type CSSProperties } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Pin, Star, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { PACKAGES } from '../data/content'

const STARS = [0, 1, 2, 3, 4]

export function BestPlans() {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const lastIndex = PACKAGES.cards.length - 1
  const activePhoto = lightbox === null ? undefined : PACKAGES.cards[lightbox]

  return (
    <section id="packages" className="pb-20 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[38%_62%] lg:gap-0">
        <div>
          <h1 className="section-title">
            {PACKAGES.titleFirst}
            <br />
            {PACKAGES.titleSecond}
          </h1>
          {PACKAGES.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-6 max-w-md">
              {paragraph}
            </p>
          ))}
          <ButtonLink href="#search" className="main-btn mt-6">
            {PACKAGES.cta}
            <span className="btn-arrow" aria-hidden="true">
              <ArrowRight className="h-4 w-4" />
            </span>
          </ButtonLink>
        </div>

        <div
          role="region"
          aria-label="Package carousel"
          data-index={index}
          className="overflow-hidden"
        >
          <ul className="package-track" style={{ '--slide': index } as CSSProperties}>
            {PACKAGES.cards.map((card, cardIndex) => (
              <li key={card.src} className="w-full shrink-0 px-3 pb-3 lg:w-1/3">
                <article className="package-card group h-[430px]">
                  <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
                  <div aria-hidden="true" className="package-overlay" />
                  <div className="package-content">
                    <h4 className="text-2xl text-white">{card.title}</h4>
                    <p className="text-lg text-gold">
                      {PACKAGES.price}
                      <span className="text-sm text-gold">{PACKAGES.priceSuffix}</span>
                    </p>
                    <p className="max-w-[220px] text-sm text-white">{PACKAGES.blurb}</p>
                    <div className="mt-2 flex gap-1 text-star">
                      {STARS.map((star) => (
                        <Star key={star} aria-hidden="true" className="h-4 w-4 fill-star" />
                      ))}
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`View ${card.alt} photo`}
                    onClick={() => setLightbox(cardIndex)}
                    className="absolute right-[30px] top-[30px] flex h-[50px] w-[50px] items-center justify-center bg-white text-heading"
                  >
                    <Pin aria-hidden="true" className="h-5 w-5" />
                  </button>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-center gap-4 px-6 lg:justify-end">
        <button
          type="button"
          aria-label="Previous package"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="flex h-10 w-10 items-center justify-center border border-[#eeeeee] text-heading disabled:opacity-40"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {PACKAGES.cards.map((card, cardIndex) => (
            <button
              key={card.src}
              type="button"
              aria-label={`Show package ${cardIndex + 1}`}
              aria-current={cardIndex === index}
              onClick={() => setIndex(cardIndex)}
              className="h-3 w-3 border border-gold aria-[current=true]:bg-gold"
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next package"
          disabled={index === lastIndex}
          onClick={() => setIndex((value) => Math.min(lastIndex, value + 1))}
          className="flex h-10 w-10 items-center justify-center border border-[#eeeeee] text-heading disabled:opacity-40"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      {activePhoto ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Package photo"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
        >
          <div className="relative w-full max-w-3xl bg-white p-4">
            <button
              type="button"
              aria-label="Close package photo"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="h-[420px] w-full object-cover"
            />
            <h4 className="mt-4 text-2xl">{activePhoto.title}</h4>
          </div>
        </div>
      ) : null}
    </section>
  )
}
