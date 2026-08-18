import { useState } from 'react'
import { ArrowLeft, ArrowRight, Bath, BedDouble, Building2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PROPERTIES } from '../data'

const VISIBLE = 3

const SPEC_ICONS = {
  bed: BedDouble,
  bath: Bath,
  building: Building2,
} as const

type SpecIcon = keyof typeof SPEC_ICONS

function PropertyCard({ item }: { item: (typeof PROPERTIES.items)[number] }) {
  return (
    <article className="mx-3 border border-cardborder bg-white shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <img src={item.image} alt={item.imageAlt} className="aspect-[10/7] w-full object-cover" />
      <div className="px-5 pb-[25px] pt-[30px]">
        <span className="text-base font-medium text-navy">$ {item.price}</span>
        <h3 className="mt-2 text-xl font-medium text-slate transition-colors hover:text-navy-ink">
          {item.title}
        </h3>
        <p className="mt-2 text-base font-light leading-relaxed text-[#5E5E5E]">{item.blurb}</p>
      </div>
      <div className="flex items-center justify-between border-t border-cardborder px-5 py-[11px]">
        {item.specs.map((spec) => {
          const Icon = SPEC_ICONS[spec.icon as SpecIcon]
          return (
            <span key={spec.label} className="flex items-center gap-1.5 text-sm text-navy-ink">
              <Icon className="size-4 text-gold" aria-hidden="true" />
              {spec.label}
            </span>
          )
        })}
      </div>
    </article>
  )
}

export function Properties() {
  const [index, setIndex] = useState(0)
  const maxIndex = PROPERTIES.items.length - VISIBLE

  const next = () => setIndex((current) => (current + 1) % (maxIndex + 1))
  const prev = () => setIndex((current) => (current - 1 + maxIndex + 1) % (maxIndex + 1))

  return (
    <section id="properties" className="bg-white px-4 py-[90px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[60px] text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-navy">
            {PROPERTIES.label}
          </span>
          <h2 className="mt-3 font-display text-[36px] font-semibold text-navy-ink">
            {PROPERTIES.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-[#5E5E5E]">
            {PROPERTIES.subtitle}
          </p>
        </div>

        <div className="relative">
          <div
            data-testid="properties-track"
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {PROPERTIES.items.map((item) => (
              <div key={item.title} className="w-full shrink-0 md:w-1/3">
                <PropertyCard item={item} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous properties"
            className="absolute -left-5 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-none border border-cardborder bg-white text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:flex"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next properties"
            className="absolute -right-5 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-none border border-cardborder bg-white text-navy-ink transition-colors hover:bg-gold hover:text-navy-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:flex"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, dot) => (
            <button
              key={dot}
              type="button"
              onClick={() => setIndex(dot)}
              aria-label={`Go to property slide ${dot + 1}`}
              aria-current={index === dot ? 'true' : undefined}
              className={cn(
                'size-2.5 rounded-full border border-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
                index === dot ? 'bg-gold' : 'bg-white',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
