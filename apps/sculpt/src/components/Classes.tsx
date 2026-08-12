import { ChevronRight } from 'lucide-react'
import { CLASS_CARDS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Classes — three class cards with 250px circular photos, a circular
 * orange price badge, a blurb, and a Learn More link.
 */
export function Classes() {
  return (
    <section id="classes" aria-label="Classes" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Our Classes"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-3">
          {CLASS_CARDS.map((item) => (
            <div key={item.title}>
              <div className="relative mx-auto h-[250px] w-[250px]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute -bottom-5 left-1/2 flex h-20 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-brand text-center text-white">
                  <span className="text-sm font-bold leading-tight">$25.00</span>
                  <span className="text-[10px] leading-tight">/month</span>
                </div>
              </div>
              <div className="pt-12">
                <h3 className="text-xl font-light">{item.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm text-neutral-500">{item.copy}</p>
                <p className="mt-4">
                  <a
                    href="#request"
                    className="inline-flex items-center gap-1 text-[13px] text-ink hover:text-brand"
                  >
                    Learn More <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
