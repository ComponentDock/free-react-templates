import { useState } from 'react'
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Map,
  Mountain,
  Palmtree,
  Plane,
  type LucideIcon,
} from 'lucide-react'
import { services } from '../data'
import { pillOutline } from './buttonClasses'

const PER_VIEW = 3
const TOTAL = services.length
const MAX_INDEX = TOTAL - PER_VIEW

const serviceIcons: LucideIcon[] = [Mountain, Map, Briefcase, Palmtree, Globe, Plane]

/**
 * "Our Services" cards on the light background (reference: .sec-features).
 * The source used tiny-slider — recreated with client-side index state over
 * a translated flex track; the wrapper bleeds 250px into the next section
 * (margin-bottom -250px) exactly like the original.
 */
export function Services() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + PER_VIEW))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - PER_VIEW))

  return (
    <section id="services" aria-label="Our services" className="bg-light-bg py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand">
            Our Services
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous services"
              onClick={prev}
              className={pillOutline}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Next services" onClick={next} className={pillOutline}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="-mb-[250px] overflow-hidden" data-services-wrap>
          <div
            data-services-track
            className="flex transition-transform duration-500"
            style={{
              width: `${(TOTAL / PER_VIEW) * 100}%`,
              transform: `translateX(${-(index / TOTAL) * 100}%)`,
            }}
          >
            {services.map((service, i) => {
              const Icon = serviceIcons[i]!
              return (
                <article
                  key={service.title}
                  aria-label={`Service: ${service.title}`}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / TOTAL}%` }}
                >
                  <div className="h-full bg-white p-[50px] pb-[100px] shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
                    <Icon className="mb-6 h-[70px] w-[70px] text-brand" aria-hidden="true" />
                    <h3 className="mb-3 text-[20px] font-bold text-ink">{service.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-black/50">{service.blurb}</p>
                    <a
                      href="#services"
                      className="text-xs font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
