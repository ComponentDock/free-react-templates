import { ArrowRight } from 'lucide-react'
import { features } from '../data'

export function Features() {
  return (
    <section className="bg-white py-[102px]" id="apply">
      <div className="mx-auto max-w-[1176px] px-4">
        {features.map((feature) => (
          <div
            key={feature.headline}
            className="mb-[70px] grid items-center gap-10 last:mb-0 lg:grid-cols-2"
          >
            <img
              src={feature.image}
              alt={feature.imageAlt}
              className={`w-full object-cover ${feature.flip ? 'lg:order-2' : ''}`}
            />
            <div className={`pt-10 ${feature.flip ? 'lg:order-1' : ''}`}>
              <h2 className="mb-9 text-4xl font-bold text-ink">{feature.headline}</h2>
              <p className="mb-10 text-sm leading-7 text-muted">{feature.paragraph}</p>
              <a
                href={feature.href}
                className="inline-flex items-center gap-2 text-base font-black text-brand"
              >
                {feature.linkLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
